"use client"

import { useState } from "react"

import { Search } from "lucide-react"

import PageHeader from "@/components/molecules/PageHeader"
import { Input } from "@/components/ui/input"

import { mockBusinessLeads } from "./data"
import LeadsDataTable from "./DataTable"

function LeadsWrapper() {
	const [searchQuery, setSearchQuery] = useState("")

	return (
		<div className="flex flex-1 flex-col gap-6 p-6">
			{/* Page Header */}
			<PageHeader />
			{/* Customize Businesses Section */}
			<div className="flex flex-col bg-white shadow-md rounded-md px-6 py-4 border-gray-200  gap-4">
				<div className="flex items-start justify-between">
					<div className="space-y-5">
						<div className="flex items-center gap-2">
							<h2 className="text-xl font-bold">Leads</h2>
							<span className="rounded-md border-gray-200 border-2 bg-white hover:bg-gray-50 px-2 py-0.5 text-sm">
								{mockBusinessLeads.length} Leads
							</span>
						</div>
						<p className="text-sm text-muted-foreground mt-1">
							Keep track of all leads for Golivwell
						</p>
					</div>
					<div className="relative w-64">
						<Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
						<Input
							placeholder="Search"
							value={searchQuery}
							onChange={(e) => setSearchQuery(e.target.value)}
							className="pl-9"
						/>
					</div>
				</div>
				<LeadsDataTable />
			</div>
		</div>
	)
}

export default LeadsWrapper
