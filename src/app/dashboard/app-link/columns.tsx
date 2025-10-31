import { type ColumnDef } from "@tanstack/react-table"
import { MoreVertical } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger
} from "@/components/ui/dropdown-menu"

type Business = {
	id: string
	name: string
	logo: string
	identifier: string
	googlePlayLink?: string
	appleStoreLink?: string
}

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
export default columns
