import React from "react"

import {
	flexRender,
	getCoreRowModel,
	getPaginationRowModel,
	useReactTable
} from "@tanstack/react-table"

import {
	DataTablePagination,
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow
} from "@/components/ui/data-table"

import columns from "./columns"
import { mockBusinessLeads } from "./data"

function LeadsDataTable() {
	const table = useReactTable({
		data: mockBusinessLeads,
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
		<>
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
										{flexRender(cell.column.columnDef.cell, cell.getContext())}
									</TableCell>
								))}
							</TableRow>
						))
					) : (
						<TableRow>
							<TableCell colSpan={columns.length} className="h-24 text-center">
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
		</>
	)
}

export default LeadsDataTable
