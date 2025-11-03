import Image from "next/image"

import { type ColumnDef } from "@tanstack/react-table"
import { MoreVertical } from "lucide-react"

import { cyrb53Hasher } from "@/lib/utils"

import { Badge, BadgeVariants } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger
} from "@/components/ui/dropdown-menu"

type LeadsBusiness = {
	id: string
	name: string
	logo: string
	contactEmail: string
	contactName: string
	contactPhone: string
	currentStatus: string
}

const columns: ColumnDef<LeadsBusiness>[] = [
	{
		accessorKey: "name",
		header: "Business name",
		cell: ({ row }) => {
			const business = row.original
			return (
				<div className="flex items-center gap-3">
					<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-muted overflow-hidden">
						<Image
							src={business.logo}
							alt={business.name}
							width={40}
							height={40}
							className="h-full w-full object-cover"
						/>
					</div>
					<span className="font-medium">{business.name}</span>
				</div>
			)
		}
	},
	{
		accessorKey: "contactEmail",
		header: "Contact email",
		cell: ({ row }) => {
			return (
				<span className="text-muted-foreground underline cursor-pointer">
					{row.getValue("contactEmail")}
				</span>
			)
		}
	},
	{
		accessorKey: "contactName",
		header: "Contact name",
		cell: ({ row }) => {
			const contactName = row.getValue("contactName") as string | undefined
			return <span>{contactName}</span>
		}
	},
	{
		accessorKey: "contactPhone",
		header: "Contact phone",
		cell: ({ row }) => {
			const contactPhone = row.getValue("contactPhone") as string | undefined
			return <span>{contactPhone}</span>
		}
	},
	{
		accessorKey: "currentStatus",
		header: "Current status",
		cell: ({ row }) => {
			const currentStatus = row.getValue("currentStatus") as string
			const badgeColors: NonNullable<BadgeVariants["color"]>[] = [
				"purple",
				"green",
				"orange",
				"blue",
				"amber",
				"teal"
			]

			const getVariantIndex = (value: string) => {
				const hash = cyrb53Hasher(value)
				return hash % badgeColors.length
			}

			return (
				<Badge
					color={badgeColors[getVariantIndex(currentStatus)]}
					className="px-3 py-2 mb-2 line-clamp-1"
				>
					{currentStatus}
				</Badge>
			)
		}
	}
]
export default columns
