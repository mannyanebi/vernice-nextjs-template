import { z } from "zod"

const loginSchema = z.object({
	username: z.email({
		message: "Please enter a valid email address"
	}),
	password: z.string().min(8, {
		message: "Password must be at least 8 characters long"
	})
})

export default loginSchema
