import { apiHelper } from "@/helpers/api-helper/api-helper"

import { UserType } from "@/types"
import { ApiResponseType } from "@/types/api-types"

export const usersService = {
	getUsers: async (): Promise<ApiResponseType<UserType[]>> => {
		return apiHelper.get<UserType[]>(
			"https://jsonplaceholder.typicode.com/users"
		)
	}
}
