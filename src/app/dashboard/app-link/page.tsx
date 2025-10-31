"use client"

import * as React from "react"

import {
	flexRender,
	getCoreRowModel,
	getPaginationRowModel,
	useReactTable,
	type ColumnDef
} from "@tanstack/react-table"
import { MoreVertical, Search } from "lucide-react"

import PageHeader from "@/components/molecules/PageHeader"
import { Button } from "@/components/ui/button"
import {
	DataTablePagination,
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow
} from "@/components/ui/data-table"
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"

type Business = {
	id: string
	name: string
	logo: string
	identifier: string
	googlePlayLink?: string
	appleStoreLink?: string
}

const mockBusinesses: Business[] = [
	{
		id: "1",
		name: "Healthy Panda Fitness",
		logo: "🐼",
		identifier: "Rtud29iof9gdare-dig-efwnf_equhfspipQ...",
		googlePlayLink: "app.playstore.livwell.panda-fitne...",
		appleStoreLink: undefined
	},
	{
		id: "2",
		name: "Dyson Groups Fitness",
		logo: "⚫",
		identifier: "Rtud29iof9gdare-dig-efwnf_equhfspipQ...",
		googlePlayLink: "app.playstore.livwell.panda-fitne...",
		appleStoreLink: "app.playstore.livwell.panda-fitne..."
	},
	{
		id: "3",
		name: "The North Face Massage & Spa Studios",
		logo: "🔴",
		identifier: "Rtud29iof9gdare-dig-efwnf_equhfspipQ...",
		googlePlayLink: "app.playstore.livwell.panda-fitne...",
		appleStoreLink: "app.appstore.livwell.panda-fitnes..."
	},
	{
		id: "4",
		name: "Go Pro Studios & Gym Centers",
		logo: "⚫",
		identifier: "Rtud29iof9gdare-dig-efwnf_equhfspipQ...",
		googlePlayLink: "app.playstore.livwell.panda-fitne...",
		appleStoreLink: "app.appstore.livwell.panda-fitnes..."
	},
	{
		id: "5",
		name: "BMW Yoga Studios",
		logo: "🔵",
		identifier: "Rtud29iof9gdare-dig-efwnf_equhfspipQ...",
		googlePlayLink: "app.playstore.livwell.panda-fitne...",
		appleStoreLink: "app.appstore.livwell.panda-fitnes..."
	},
	{
		id: "6",
		name: "Belle Beauty, Cosmetics & Spa Studio",
		logo: "🟣",
		identifier: "Rtud29iof9gdare-dig-efwnf_equhfspipQ...",
		googlePlayLink: undefined,
		appleStoreLink: "app.appstore.livwell.panda-fitnes..."
	},
	{
		id: "7",
		name: "P&G Fitness Studios",
		logo: "🔵",
		identifier: "Rtud29iof9gdare-dig-efwnf_equhfspipQ...",
		googlePlayLink: "app.playstore.livwell.panda-fitne...",
		appleStoreLink: "app.appstore.livwell.panda-fitnes..."
	}
]

const columns: ColumnDef<Business>[] = [
	{
		accessorKey: "name",
		header: "Business name",
		cell: ({ row }) => {
			const business = row.original
			return (
				<div className="flex items-center gap-3">
					<div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted text-lg">
						{business.logo}
					</div>
					<span className="font-medium">{business.name}</span>
				</div>
			)
		}
	},
	{
		accessorKey: "identifier",
		header: "Business identifier",
		cell: ({ row }) => {
			return (
				<span className="text-muted-foreground underline cursor-pointer">
					{row.getValue("identifier")}
				</span>
			)
		}
	},
	{
		accessorKey: "googlePlayLink",
		header: "Google play store app link",
		cell: ({ row }) => {
			const link = row.getValue("googlePlayLink") as string | undefined
			return link ? (
				<a href="#" className="text-blue-500 underline hover:text-blue-600">
					{link}
				</a>
			) : null
		}
	},
	{
		accessorKey: "appleStoreLink",
		header: "Apple iOS app link",
		cell: ({ row }) => {
			const link = row.getValue("appleStoreLink") as string | undefined
			return link ? (
				<a href="#" className="text-blue-500 underline hover:text-blue-600">
					{link}
				</a>
			) : null
		}
	},
	{
		id: "actions",
		cell: () => {
			return (
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button variant="ghost" size="icon" className="h-8 w-8">
							<MoreVertical className="h-4 w-4" />
							<span className="sr-only">Open menu</span>
						</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent align="end">
						<DropdownMenuItem>Edit</DropdownMenuItem>
						<DropdownMenuItem>View details</DropdownMenuItem>
						<DropdownMenuItem className="text-destructive">
							Delete
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			)
		}
	}
]

export default function AppLinkPage() {
	const [searchQuery, setSearchQuery] = React.useState("")

	const table = useReactTable({
		data: mockBusinesses,
		columns,
		getCoreRowModel: getCoreRowModel(),
		getPaginationRowModel: getPaginationRowModel(),
		initialState: {
			pagination: {
				pageSize: 10
			}
		}
	})

	return (
		<div className="flex flex-1 flex-col gap-6 p-6">
			{/* Page Header */}
			<PageHeader />
			{/* Customize Businesses Section */}
			<div className="flex flex-col bg-white shadow-md rounded-md px-6 py-4 border-gray-200  gap-4">
				<div className="flex items-start justify-between">
					<div className="space-y-5">
						<div className="flex items-center gap-2">
							<h2 className="text-xl font-bold">Customize Businesses</h2>
							<span className="rounded-md border-gray-200 border-2 bg-white hover:bg-gray-50 px-2 py-0.5 text-sm">
								{mockBusinesses.length} Businesses
							</span>
						</div>
						<p className="text-sm text-muted-foreground mt-1">
							Manage all businesses with customized application for Golivwell
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

				{/* Table */}
				<Table className="cursor-pointer">
					<TableHeader className="bg-stone-50">
						{table.getHeaderGroups().map((headerGroup) => (
							<TableRow key={headerGroup.id}>
								{headerGroup.headers.map((header) => (
									<TableHead key={header.id} className="py-4">
										{header.isPlaceholder
											? null
											: flexRender(
													header.column.columnDef.header,
													header.getContext()
												)}
									</TableHead>
								))}
							</TableRow>
						))}
					</TableHeader>
					<TableBody>
						{table.getRowModel().rows?.length ? (
							table.getRowModel().rows.map((row, index) => (
								<TableRow
									key={row.id}
									data-state={row.getIsSelected() && "selected"}
									className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
								>
									{row.getVisibleCells().map((cell) => (
										<TableCell key={cell.id} className="py-3">
											{flexRender(
												cell.column.columnDef.cell,
												cell.getContext()
											)}
										</TableCell>
									))}
								</TableRow>
							))
						) : (
							<TableRow>
								<TableCell
									colSpan={columns.length}
									className="h-24 text-center"
								>
									No results.
								</TableCell>
							</TableRow>
						)}
					</TableBody>
				</Table>

				{/* Pagination */}
				<DataTablePagination table={table} />
				{/* <div className="flex items-center justify-between">
					<Button variant="ghost" size="sm" disabled>
						<span className="mr-2">←</span>
						Previous
					</Button>
					<span className="text-sm">1</span>
					<Button variant="ghost" size="sm" disabled>
						Next
						<span className="ml-2">→</span>
					</Button>
				</div> */}
			</div>
		</div>
	)
}
