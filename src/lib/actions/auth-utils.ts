import { Session } from "next-auth"
import { getSession } from "next-auth/react"

import { isServer } from "@tanstack/react-query"
import { auth, signOut } from "auth"

export const handleAuthFailure = async () => {
	await signOut({ redirectTo: "/auth/login" })
}

export const getAuthToken = async (): Promise<string | null> => {
	let session: Session | null = null
	if (isServer) {
		session = await auth()
	} else {
		session = await getSession()
	}

	return session ? session.accessToken : null
}
