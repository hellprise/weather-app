import { getIconUrl } from "@/app/config/api.config"

import { type IForecast } from "@/entities/weather/model/Forecast"

interface IForecastCard {
	day: IForecast["list"][number]
}

export function ForecastCard({ day }: IForecastCard) {
	return (
		<li
			className="flex flex-col items-center rounded-lg bg-blue-100 p-4"
			data-testid="forecast-card"
			key={day.dt}
		>
			<p className="text-sm font-medium uppercase text-gray-600">
				{new Date(Number(day?.dt) * 1000).toLocaleTimeString("en-US", {
					hour: "numeric",
					minute: "numeric"
				})}
			</p>

			<img
				src={getIconUrl(String(day?.weather[0].icon))}
				alt="day weather icon"
			/>

			<span className="text-sm font-medium">{day?.main.temp.toFixed()}°</span>
		</li>
	)
}
