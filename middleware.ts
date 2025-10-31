import { NextResponse, type NextRequest } from "next/server"

import { auth } from "auth"

import { PASSWORD_SIGN_IN_ROUTE } from "@/constants"

import { createRouteMatcher } from "@/lib/utils"

// const protectedRoutes = ["/api/(.*)", "/dashboard/(.*)"]
const protectedRoutes = ["/dashboard/(.*)"]

const isProtectedRoute = createRouteMatcher(protectedRoutes)

export async function middleware(request: NextRequest) {
	const { pathname } = request.nextUrl

	if (pathname === "/") {
		return NextResponse.redirect(new URL("/dashboard", request.url))
	}

	// Check if the path matches any protected route
	if (isProtectedRoute(pathname)) {
		const session = await auth()

		// If no session exists, redirect to sign-in page
		if (!session) {
			const signInUrl = new URL(PASSWORD_SIGN_IN_ROUTE, request.url)
			// Add the current path as a redirect parameter
			signInUrl.searchParams.set("redirect", pathname)
			return NextResponse.redirect(signInUrl)
		}
	}

	// Continue with the request if authenticated or not a protected route
	return NextResponse.next()
}

export const config = {
	matcher: [
		// Skip Next.js internal paths and static files, unless found in search params
		"/((?!_next/static|_next/image|favicon.ico).*)",
		// Always run for API routes
		"/(api|trpc)(.*))"
	]
}
