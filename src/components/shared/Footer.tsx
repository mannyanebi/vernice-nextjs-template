export default function Footer() {
	return (
		<footer className="border-t">
			<div className="container">
				<div className="flex justify-between items-center py-4 font-mono text-sm">
					<p>© Copyright {new Date().getFullYear()} Next.js Boilerplate</p>
				</div>
			</div>
		</footer>
	)
}
