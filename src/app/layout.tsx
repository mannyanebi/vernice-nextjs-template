import type { Metadata } from "next"
import { Inter } from "next/font/google"

import { APP_CONFIG } from "@/constants"

import { Providers } from "@/providers"

import { Footer, Header } from "@/shared"

// @ts-expect-error: TypeScript may not have CSS
//  module declarations in this project; suppress the error for the global CSS import.
import "./globals.css"

const interFont = Inter({
	variable: "--font-inter",
	subsets: ["latin"]
})

export const metadata: Metadata = {
	title: {
		default: APP_CONFIG.APP_NAME,
		template: `%s | ${APP_CONFIG.APP_NAME}`
	},
	description: APP_CONFIG.APP_DESCRIPTION,
	keywords: APP_CONFIG.APP_KEYWORDS,
	authors: [{ name: APP_CONFIG.CREATOR }],
	creator: APP_CONFIG.CREATOR,
	metadataBase: new URL(APP_CONFIG.SITE_URL),
	alternates: {
		canonical: "/",
		languages: {
			tr: "/tr",
			en: "/en"
		}
	},
	openGraph: {
		type: "website",
		locale: "tr_TR",
		url: APP_CONFIG.SITE_URL,
		title: APP_CONFIG.APP_NAME,
		description: APP_CONFIG.APP_DESCRIPTION,
		siteName: APP_CONFIG.APP_NAME,
		images: [
			{
				url: "/opengraph-image.png",
				width: 1200,
				height: 630,
				alt: APP_CONFIG.APP_NAME
			}
		]
	},
	twitter: {
		card: "summary_large_image",
		title: APP_CONFIG.APP_NAME,
		description: APP_CONFIG.APP_DESCRIPTION,
		creator: APP_CONFIG.TWITTER_HANDLE,
		images: ["/twitter-image.png"]
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1
		}
	},
	verification: {
		google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
	}
}

interface RootLayoutProps {
	children: React.ReactNode
	params: Promise<{ locale: string }>
}

export default function RootLayout({ children }: RootLayoutProps) {
	return (
		<html className="light" style={{ colorScheme: "light" }}>
			<body
				className={`${interFont.variable} antialiased flex flex-col min-h-screen w-full`}
				suppressHydrationWarning
			>
				<Providers>
					<Header />
					<main className="flex-1">{children}</main>
					<Footer />
				</Providers>
			</body>
		</html>
	)
}
