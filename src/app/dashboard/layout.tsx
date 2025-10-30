// app/dashboard/layout.tsx
import { ReactNode } from "react"

// import Header from "@/components/Header"
// import Sidebar from "@/components/Sidebar"

export default function DashboardLayout({ children }: { children: ReactNode }) {
	return (
		<div className="flex min-h-screen">
			{/* <Sidebar /> */}
			<div className="flex-1 flex flex-col">
				{/* <Header /> */}
				<main className="p-6">{children}</main>
			</div>
		</div>
	)
}
