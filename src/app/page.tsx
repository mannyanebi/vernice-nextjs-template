import LivwellLogo from "@/components/atoms/LivwellLogo"
import { Actions, Stack, Title } from "@/widgets"

export default function Home() {
	return (
		<div className="container mx-auto px-4">
			<LivwellLogo color="primary" />
			<div className="flex flex-col items-center justify-center gap-12 mt-20">
				<Title text="Welcome to Golivwell Backoffice" />
				<Stack />
				<Actions />
			</div>
		</div>
	)
}
