import { useEffect } from "react"
import { toast } from "sonner"

import { useGetWeatherByCityQuery } from "@/entities/weather/api/weatherApi"

import { useMounted } from "./useMounted"

export const useWeatherByCity = (city: string) => {
	const { data: weather, isSuccess, isError, isFetching } = useGetWeatherByCityQuery(city)

	const isMounted = useMounted()

	useEffect(() => {
		if (!isMounted) return

		if (isSuccess) toast.success(`The weather for the ${city} was successfully loaded`)
	}, [isSuccess, weather, city, isMounted])

	useEffect(() => {
		if (!isMounted) return

		if (isError)
			toast.error(`An error occurred while loading the weather for the ${city}`)
	}, [isError, city, isMounted])

	return { weather, isSuccess, isError, isFetching }
}
