export const APP_CONFIG = {
	API_TIMEOUT: 30000, // 30 seconds
	APP_NAME: "Golivwell Backoffice",
	APP_VERSION: "1.0.0",
	DEFAULT_THEME: "light",
	SITE_URL: process.env.NEXT_PUBLIC_SITE_URL || "",
	APP_DESCRIPTION:
		"Modern Next.js 15 boilerplate with TypeScript & Tailwind CSS",
	APP_KEYWORDS: [
		"nextjs",
		"typescript",
		"tailwind",
		"boilerplate",
		"react"
	] as string[],
	CREATOR: "@mannyanebi",
	TWITTER_HANDLE: "@mannyanebi"
} as const

export type AppConfig = keyof typeof APP_CONFIG

export const CURRENCY_CONFIG = {
	NGN: {
		locale: "en-NG",
		minimumFractionDigits: 2,
		maximumFractionDigits: 2
	},
	USD: {
		locale: "en-US",
		minimumFractionDigits: 2,
		maximumFractionDigits: 2
	},
	EUR: {
		locale: "de-DE",
		minimumFractionDigits: 2,
		maximumFractionDigits: 2
	}
} as const

export const DEFAULT_CURRENCY = "USD" as const
export type CurrencyCode = keyof typeof CURRENCY_CONFIG
