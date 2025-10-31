// app/dashboard/layout.tsx
"use client"

import { ReactNode } from "react"

import { AppSidebar } from "@/components/app-sidebar"
import NavHeader from "@/components/nav-header"
import { SidebarProvider } from "@/components/ui/sidebar"

export default function DashboardLayout({ children }: { children: ReactNode }) {
	return (
		<div className="flex min-h-screen w-full flex-col">
			{/* Header */}
			<NavHeader />
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
