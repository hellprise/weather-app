import { useParams } from "react-router-dom"

import { useForecast } from "@/shared/hooks/useForecast"
import { useWeatherByCity } from "@/shared/hooks/useWeatherByCity"

import { WeatherChart } from "../ui"
import { DetailedCity } from "../ui/DetailedCity"
import { ForecastCard } from "../ui/forecast/ForecastCard"

export function City() {
	const { city } = useParams()

	const { weather, isFetching } = useWeatherByCity(String(city))
	const { forecast, isFetching: isFetchingForecast } = useForecast(String(city))

	if (!isFetching && !weather) throw new Response("Weather Not Found", { status: 404 })
	if (!isFetchingForecast && !forecast)
		throw new Response("Forecast Not Found", { status: 404 })

	return (
		<main className="bg-main flex flex-col items-center bg-white/10 bg-left bg-no-repeat py-10 bg-blend-lighten max-md:gap-y-5 max-md:px-4 md:gap-y-10 md:pt-20">
			{isFetching ? (
				<p className="animate-fade">Loading...</p>
			) : (
				<DetailedCity
					forecast={forecast}
					weather={weather}
				/>
			)}

			<section className="animate-fade h-fit w-full rounded-xl bg-blue-50/30 drop-shadow-sm backdrop-blur-md max-md:px-3 max-md:py-5 md:px-6 md:pb-6 md:pt-5 lg:max-w-[95%] lg:px-10">
				<p className="text-lg font-medium max-md:mb-5 md:mb-8">Today at:</p>

				{forecast && (
					<div className="flex w-full justify-center max-md:mb-7 max-md:hidden md:mb-10">
						<WeatherChart forecast={forecast} />
					</div>
				)}

				{isFetching ? (
					<p>Loading...</p>
				) : (
					<div className="overflow-x-auto">
						<ul className="flex w-max gap-4">
							{forecast?.list.map(day => (
								<ForecastCard
									key={day.dt}
									day={day}
								/>
							))}
						</ul>
					</div>
				)}
			</section>
		</main>
	)
}
