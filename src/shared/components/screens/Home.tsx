import { useWeather } from "@/shared/hooks/useWeather"

import { CreateCityForm } from "../ui/CreateCityForm"
import { CitiesList } from "../ui/list/CitiesList"

export function Home() {
	const { getWeatherByCity, remove, update, data: list, isLoading } = useWeather()

	return (
		<main className="bg-main flex min-h-dvh flex-col items-center bg-white/10 bg-top bg-no-repeat pt-10 bg-blend-lighten max-md:gap-y-5 max-md:px-3 md:gap-y-10 md:pt-20">
			<CreateCityForm
				getWeatherByCity={getWeatherByCity}
				list={list}
			/>

			<section className="flex w-full flex-col items-center">
				{isLoading ? (
					<p>Loading...</p>
				) : list && list.length > 0 ? (
					<CitiesList
						remove={remove}
						update={update}
						list={list}
					/>
				) : (
					<p className="font-medium md:text-lg">
						There are no cities yet. Add one using the form above
					</p>
				)}
			</section>
		</main>
	)
}
