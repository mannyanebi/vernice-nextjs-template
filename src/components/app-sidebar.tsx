"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { BarChart3, Link as LinkIcon } from "lucide-react"

import { cn } from "@/lib/utils"

import {
	Sidebar,
	SidebarContent,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarRail
} from "@/components/ui/sidebar"

const navItems = [
	{
		title: "Leads",
		url: "/dashboard/leads",
		icon: BarChart3
	},
	{
		title: "App Link",
		url: "/dashboard/app-link",
		icon: LinkIcon
	}
]

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
	const pathname = usePathname()

	return (
		<Sidebar collapsible="icon" {...props}>
			<SidebarContent className="mt-24">
				<SidebarMenu className="space-y-4">
					{navItems.map((item) => {
						const isActive = pathname === item.url
						return (
							<SidebarMenuItem key={item.title}>
								<SidebarMenuButton
									asChild
									tooltip={item.title}
									className={cn(
										"relative [&>svg]:size-6",
										isActive &&
											"bg-[#E7FDFB] hover:bg-[#E7FDFB] border-l-2 border-[#38FFFD]"
									)}
								>
									<Link href={item.url}>
										<item.icon />
										<span className="text-lg">{item.title}</span>
									</Link>
								</SidebarMenuButton>
							</SidebarMenuItem>
						)
					})}
				</SidebarMenu>
			</SidebarContent>
			<SidebarRail />
		</Sidebar>
	)
}
