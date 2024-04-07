import { useEffect } from "react"
import { toast } from "sonner"

import { useGetHourlyForecastByCityQuery } from "@/entities/weather/api/weatherApi"

export const useForecast = (city: string) => {
	const {
		data: forecast,
		isSuccess,
		isError,
		isFetching
	} = useGetHourlyForecastByCityQuery(String(city))

	useEffect(() => {
		if (isSuccess) toast.success(`The forecast for the ${city} was successfully loaded`)
	}, [isSuccess, forecast, city])

	useEffect(() => {
		if (isError)
			toast.error(`An error occurred while loading the forecast for the ${city}`)
	}, [isError, city])

	return { forecast, isSuccess, isError, isFetching }
}
