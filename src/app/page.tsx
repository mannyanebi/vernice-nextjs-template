import { Actions, Stack, Title } from "@/widgets"

export default function Home() {
	return (
		<div className="container mx-auto px-4">
			<div className="flex flex-col items-center justify-center gap-12 mt-20">
				<Title text="Welcome to Tokyo Nextjs Templace" />
				<Stack />
				<Actions />
			</div>
		</div>
	)
}
