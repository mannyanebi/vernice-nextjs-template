import { useQuery } from "@tanstack/react-query"

import { BUSINESSES_WITH_CUSTOM_APP_ROUTE } from "@/constants"
import { BUSINESSES_WITH_CUSTOM_APP_KEYS } from "@/constants/api/query-keys"

import { http } from "@/lib/http"

export interface SingleClassResponse {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	data: any
}

const useFetchBusinessesWithCustomApp = () => {
	const { data, isError, isPending } = useQuery<SingleClassResponse, Error>({
		queryKey: [BUSINESSES_WITH_CUSTOM_APP_KEYS],
		queryFn: () =>
			http.get<SingleClassResponse>(BUSINESSES_WITH_CUSTOM_APP_ROUTE)
	})

	return {
		data: data?.data ?? undefined,
		isLoading: isPending,
		isError
	}
}
export default useFetchBusinessesWithCustomApp
