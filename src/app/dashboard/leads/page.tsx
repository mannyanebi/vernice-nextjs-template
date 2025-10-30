export default function LeadsPage() {
	return (
		<div className="flex flex-1 flex-col gap-4 p-6">
			<div>
				<h1 className="text-3xl font-bold">Leads</h1>
				<p className="text-muted-foreground mt-2">
					Manage and track your leads
				</p>
			</div>
			<div className="grid auto-rows-min gap-4 md:grid-cols-3">
				<div className="bg-muted/50 aspect-video rounded-xl" />
				<div className="bg-muted/50 aspect-video rounded-xl" />
				<div className="bg-muted/50 aspect-video rounded-xl" />
			</div>
			<div className="bg-muted/50 min-h-screen flex-1 rounded-xl md:min-h-min" />
		</div>
	)
}
