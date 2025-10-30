// app/dashboard/layout.tsx
"use client"

import { ReactNode } from "react"

import { Bell, MoreVertical } from "lucide-react"

import { AppSidebar } from "@/components/app-sidebar"
import LivwellLogo from "@/components/atoms/LivwellLogo"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { SidebarProvider } from "@/components/ui/sidebar"
import { ThemeToggleIcon } from "@/components/widgets/ThemeToggleIcon"

export default function DashboardLayout({ children }: { children: ReactNode }) {
	return (
		<div className="flex min-h-screen w-full flex-col">
			{/* Header */}
			<header className="sticky top-0 z-50 flex h-16 items-center justify-between border-b bg-background px-6">
				<div className="flex items-center">
					<LivwellLogo color="black" className="h-8" />
				</div>
				<div className="flex items-center gap-4">
					<div className="flex items-center gap-3">
						<Avatar className="h-8 w-8">
							<AvatarImage src="/avatars/user.jpg" alt="Kahlifa Rasheed" />
							<AvatarFallback>KR</AvatarFallback>
						</Avatar>
						<div className="flex flex-col">
							<span className="text-sm font-medium">Kahlifa Rasheed</span>
							<span className="text-xs text-muted-foreground">
								Marketing Director
							</span>
						</div>
					</div>
					<Button variant="ghost" size="icon">
						<Bell className="h-5 w-5" />
					</Button>
					<ThemeToggleIcon />
					<Button variant="ghost" size="icon">
						<MoreVertical className="h-5 w-5" />
					</Button>
				</div>
			</header>

			{/* Main content area with sidebar */}
			<SidebarProvider>
				<div className="flex flex-1">
					<AppSidebar />
					<main className="flex-1">{children}</main>
				</div>
			</SidebarProvider>
		</div>
	)
}
