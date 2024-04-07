import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

import { API_URL, getHourlyForecastUrl, getWeatherUrl } from "@/app/config/api.config"

import { RTK_TAGS } from "@/shared/utils/constants"

import { type IForecast } from "../model/Forecast"
import { type IWeather } from "../model/Weather"

export const weatherApi = createApi({
	reducerPath: "weatherApi",
	tagTypes: [RTK_TAGS.City],
	baseQuery: fetchBaseQuery({
		baseUrl: API_URL
	}),
	endpoints: builder => ({
		getWeatherByCity: builder.query<IWeather, string>({
			query: city => getWeatherUrl(`q=${city}&units=Metric`),
			providesTags: (_, __, city) => [{ type: RTK_TAGS.City, id: city }]
		}),
		updateWeatherByCity: builder.mutation<IWeather, string>({
			query: city => getWeatherUrl(`q=${city}&units=Metric`),
			invalidatesTags: [{ type: RTK_TAGS.City, id: "LIST" }]
		}),
		getHourlyForecastByCity: builder.query<IForecast, string>({
			query: city => getHourlyForecastUrl(`q=${city}&units=metric&cnt=17`),
			providesTags: (_, __, city) => [{ type: RTK_TAGS.City, id: city }]
		})
	})
})

export const {
	useLazyGetWeatherByCityQuery,
	useGetWeatherByCityQuery,
	useGetHourlyForecastByCityQuery,
	useUpdateWeatherByCityMutation
} = weatherApi
