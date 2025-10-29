import React from "react"
import Image from "next/image"

import LoginSectionImage from "@/public/images/login-section-img.jpg"

import LivwellLogo from "@/components/atoms/LivwellLogo"

function LoginPage() {
	return (
		<div className="flex h-screen flex-row sm:space-x-4 items-center justify-between">
			<div className="flex flex-col items-center justify-center w-full p-5 sm:p-0 sm:mx-20 sm:w-1/2 space-y-4">
				<LivwellLogo color="primary" href="" />
				<h3 className="text-4xl font-medium">Welcome Admin</h3>
				{/* <LoginForm /> */}
			</div>
			<div className="w-full sm:w-1/2">
				<div className="rounded-b-[40px] sm:rounded-[40px] h-[400px] sm:h-[660px] sm:my-8 w-full sm:w-[500px] lg:w-[584px] relative mx-auto overflow-hidden">
					<LivwellLogo
						color="white"
						className="sm:hidden absolute top-5 left-5 z-10"
					/>
					<Image
						src={LoginSectionImage}
						alt="contact-us-hero"
						fill
						objectFit="cover"
					/>
				</div>
			</div>
		</div>
	)
}

export default LoginPage
