import { useEffect, useState } from "react"
import { toast } from "sonner"

import {
	useLazyGetWeatherByCityQuery,
	useUpdateWeatherByCityMutation
} from "@/entities/weather/api/weatherApi"
import { type IWeather } from "@/entities/weather/model/Weather"

import { LS_KEYS } from "../utils/constants"

import { useMounted } from "./useMounted"

export const useWeather = () => {
	const [arr, setArr] = useState<IWeather[]>([])

	const isMounted = useMounted()

	const [getWeatherByCity, { data, isSuccess, isError, isFetching }] =
		useLazyGetWeatherByCityQuery()

	const [updateWeatherByCity, { data: updatedCity }] = useUpdateWeatherByCityMutation()

	useEffect(() => {
		if (!isMounted) return

		if (isSuccess) {
			toast.success("The weather was successfully loaded")

			if (!data) return

			const currentData: IWeather[] = JSON.parse(
				localStorage.getItem(LS_KEYS.WEATHER_DATA) || "[]"
			)

			currentData.push(data)

			localStorage.setItem(LS_KEYS.WEATHER_DATA, JSON.stringify(currentData))
		}

		// const lsData = localStorage.getItem(LS_KEYS.WEATHER_DATA)

		// if (lsData) {
		// 	setArr(JSON.parse(lsData))
		// }
	}, [isSuccess, isMounted, data])

	useEffect(() => {
		if (!isMounted) return

		const lsData = localStorage.getItem(LS_KEYS.WEATHER_DATA)

		if (lsData) {
			setArr(JSON.parse(lsData))
		}
	}, [isMounted, data])

	useEffect(() => {
		if (!isMounted) return

		if (!updatedCity) return

		const currentData: IWeather[] = JSON.parse(
			localStorage.getItem(LS_KEYS.WEATHER_DATA) || "[]"
		)

		const newCities = currentData.map(item => {
			if (item.name === updatedCity.name) {
				return updatedCity
			}

			return item
		})

		localStorage.setItem(LS_KEYS.WEATHER_DATA, JSON.stringify(newCities))

		setArr(newCities)

		toast.success("The weather was successfully updated")
	}, [isMounted, updatedCity])

	useEffect(() => {
		if (!isMounted) return

		if (isError) toast.error("An error occurred while loading the weather")
	}, [isError, isMounted])

	const removeFromLS = (city: string) => {
		const currentData: IWeather[] = JSON.parse(
			localStorage.getItem(LS_KEYS.WEATHER_DATA) || "[]"
		)

		const newCities = currentData.filter(item => item.name !== city)

		localStorage.setItem(LS_KEYS.WEATHER_DATA, JSON.stringify(newCities))

		setArr(newCities)

		toast.success("The weather was successfully deleted")
		// const newArr = arr.filter(item => item.name !== city)

		// setArr(newArr)

		// localStorage.setItem(LS_KEYS.WEATHER_DATA, JSON.stringify(newArr))
	}

	console.log("arr", arr)
	console.log("data", data)

	return {
		getWeatherByCity,
		data: arr,
		remove: removeFromLS,
		update: updateWeatherByCity,
		isLoading: isFetching
	}
}
