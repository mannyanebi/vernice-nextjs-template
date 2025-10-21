"use client"

import { LanguageSelector, ThemeToggle } from "@/widgets"

export default function Header() {
	return (
		<header>
			<div className="flex items-center justify-center gap-4 py-7">
				<LanguageSelector />
				<ThemeToggle />
			</div>
		</header>
	)
}
