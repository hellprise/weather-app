import AddOutlinedIcon from "@mui/icons-material/AddOutlined"
import ArrowCircleLeftOutlinedIcon from "@mui/icons-material/ArrowCircleLeftOutlined"
import CompressOutlinedIcon from "@mui/icons-material/CompressOutlined"
import DeviceThermostatIcon from "@mui/icons-material/DeviceThermostat"
import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined"
import WindPowerOutlinedIcon from "@mui/icons-material/WindPowerOutlined"
import { Link } from "react-router-dom"

import { getIconUrl } from "@/app/config/api.config"
import { ROUTES } from "@/app/router/utils"

import { type IForecast } from "@/entities/weather/model/Forecast"
import { type IWeather } from "@/entities/weather/model/Weather"

import { Humidity } from "../ui/icons/Humidity"
import { Sunrise } from "../ui/icons/Sunrise"
import { Sunset } from "../ui/icons/Sunset"

interface IDetailedCity {
	weather?: IWeather
	forecast?: IForecast
}

export function DetailedCity({ weather, forecast }: IDetailedCity) {
	return (
		<section className="animate-fade h-fit w-full max-w-4xl rounded-xl bg-blue-50/50 drop-shadow-sm backdrop-blur-md max-md:px-4 max-md:py-5 md:px-6 md:pb-6 md:pt-5 lg:px-10">
			<Link
				className="block w-fit transition-transform hover:-translate-x-1"
				to={ROUTES.HOME}
			>
				<ArrowCircleLeftOutlinedIcon />
			</Link>

			<div className="flex justify-between max-md:flex-col">
				<section className="mt-6 flex flex-col justify-between">
					<div>
						<h1 className="mb-2 font-semibold max-md:text-2xl md:text-3xl">
							{weather?.name}, {weather?.sys.country}
						</h1>

						<span className="text-sm font-medium">
							Population: {forecast?.city.population}
						</span>
					</div>

					<div>
						<p className="font-medium md:text-lg">
							{new Date(Number(weather?.dt) * 1000).toLocaleDateString("en-US", {
								weekday: "long",
								year: "numeric",
								month: "long",
								day: "2-digit"
							})}
						</p>

						<p className="mt-1 font-light max-md:text-sm">
							Local Time:{" "}
							<span className="font-medium">
								{new Date(Number(weather?.dt) * 1000).toLocaleTimeString("en-US", {
									hour: "numeric",
									minute: "numeric"
								})}
							</span>
						</p>

						<div className="mt-4 flex items-center max-md:gap-x-5 md:gap-x-8 lg:gap-x-10">
							<section className="flex flex-col items-center gap-y-1">
								<Sunset />

								<p className="font-medium">
									{new Date(Number(weather?.sys.sunset) * 1000).toLocaleTimeString([], {
										timeStyle: "short"
									})}
								</p>
							</section>

							<section className="flex flex-col items-center gap-y-1">
								<Sunrise />

								<p className="font-medium">
									{new Date(Number(weather?.sys.sunrise) * 1000).toLocaleTimeString([], {
										timeStyle: "short"
									})}
								</p>
							</section>
						</div>
					</div>

					<p className="font-semibold max-md:mt-7 max-md:text-5xl md:text-7xl">
						{Math.round(Number(weather?.main.temp))} °C
					</p>
				</section>

				<section className="flex flex-col">
					<div className="flex flex-col max-md:items-center sm:items-end">
						<img
							src={getIconUrl(String(weather?.weather[0].icon))}
							className="h-full max-h-[100px]"
						/>

						<p className="font-medium max-md:-mt-3 md:text-lg">
							{weather?.weather[0].description}
						</p>
					</div>

					<div className="flex flex-col max-md:mt-4 max-sm:gap-y-2 sm:gap-y-4 md:mt-7">
						<p className="flex items-center justify-between max-lg:gap-x-4 lg:gap-x-7">
							Feels like:{" "}
							<span className="flex items-center gap-x-3 font-semibold">
								<DeviceThermostatIcon />
								{Math.round(Number(weather?.main.feels_like))}°C
							</span>
						</p>

						<p className="flex items-center justify-between max-lg:gap-x-4 lg:gap-x-7">
							Humidity:{" "}
							<span className="flex items-center gap-x-3 font-semibold">
								<Humidity />
								{weather?.main.humidity}%
							</span>
						</p>

						<p className="flex items-center justify-between max-lg:gap-x-4 lg:gap-x-7">
							Wind speed:{" "}
							<span className="flex items-center gap-x-3 font-semibold">
								<WindPowerOutlinedIcon />
								{weather?.wind.speed.toFixed()} Km/h
							</span>
						</p>

						<p className="flex items-center justify-between max-lg:gap-x-4 lg:gap-x-7">
							Pressure:{" "}
							<span className="flex items-center gap-x-3 font-semibold">
								<CompressOutlinedIcon />
								{weather?.main.pressure} hPa
							</span>
						</p>

						<p className="flex items-center justify-between max-lg:gap-x-4 lg:gap-x-7">
							Minimum:{" "}
							<span className="flex items-center gap-x-3 font-semibold">
								<RemoveOutlinedIcon />
								{weather?.main.temp_min.toFixed()} °C
							</span>
						</p>

						<p className="flex items-center justify-between max-lg:gap-x-4 lg:gap-x-7">
							Maximum:{" "}
							<span className="flex items-center gap-x-3 font-semibold">
								<AddOutlinedIcon />
								{weather?.main.temp_max.toFixed()} °C
							</span>
						</p>
					</div>
				</section>
			</div>
		</section>
	)
}
