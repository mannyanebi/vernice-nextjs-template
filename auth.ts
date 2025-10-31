import NextAuth, { AuthError, Session, User } from "next-auth"
import { JWT } from "next-auth/jwt"
import CredentialsProvider from "next-auth/providers/credentials"

import { PASSWORD_SIGN_IN_ROUTE } from "@/constants"

import { http } from "@/lib/http"

class AuthenticationError extends AuthError {
	constructor(message: string) {
		super()
		this.message = message
		this.stack = undefined
	}
}

export const { handlers, signIn, signOut, auth } = NextAuth({
	session: {
		strategy: "jwt"
	},
	providers: [
		CredentialsProvider({
			name: "Credentials",
			credentials: {
				email: { label: "Email", type: "text", placeholder: "Email" },
				password: {
					label: "Password",
					type: "password",
					placeholder: "Password"
				}
			},
			async authorize(credentials) {
				try {
					if (!credentials?.email || !credentials?.password) {
						return null
					}
					const { email, password } = credentials
					// eslint-disable-next-line @typescript-eslint/no-explicit-any
					const response = await http.post<any>(PASSWORD_SIGN_IN_ROUTE, {
						email,
						password
					})

					// response.data contains access token and user data
					return response.data
				} catch (error) {
					// Handle HTTP errors from the backend
					if (error && typeof error === "object" && "response" in error) {
						const httpError = error as {
							response?: { status?: number; data?: { message?: string } }
						}
						const status = httpError.response?.status

						const backendMessage = httpError.response?.data?.message

						// 401 Unauthorized - Invalid credentials
						if (status === 401) {
							throw new AuthenticationError("Invalid email or password")
						}

						// 404 Not Found - User not found
						if (
							status === 404 ||
							backendMessage?.toLowerCase().includes("system user not found")
						) {
							throw new AuthenticationError("Invalid email or password")
						}

						// 500 Server Error
						if (status === 500) {
							throw new AuthenticationError(
								"Authentication service unavailable. Please try again later."
							)
						}

						// Other HTTP errors
						if (backendMessage) {
							throw new AuthenticationError(backendMessage)
						}
					}

					// Fallback for unknown errors
					const errorMessage =
						error instanceof Error ? error.message : String(error)
					throw new AuthenticationError(errorMessage)
				}
			}
		})
	],
	callbacks: {
		async jwt({
			token,
			user: authResponse,
			trigger,
			account,
			session
		}): Promise<JWT> {
			let tokenResponse: JWT = token
			if (trigger === "update" && session?.user) {
				tokenResponse = {
					...token,
					user: {
						...token.user,
						...session.user
					}
				}
				return tokenResponse
			}

			// Initial sign in
			if (authResponse) {
				const { user, accessToken, expiresIn } = authResponse as Session
				tokenResponse.user = user
				tokenResponse.access = accessToken
				tokenResponse.accessTokenExpires =
					Date.now() +
					(expiresIn || (account?.expires_in ?? 24 * 60 * 60) * 1000)

				return tokenResponse
			}

			// Return previous token if the access token has not expired yet
			if (Date.now() < (token.accessTokenExpires as number)) {
				return tokenResponse
			}
			return tokenResponse
		}
	}
})
