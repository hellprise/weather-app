import CachedOutlinedIcon from "@mui/icons-material/CachedOutlined"
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined"
import { Link } from "react-router-dom"

import { getIconUrl } from "@/app/config/api.config"
import { ROUTES } from "@/app/router/utils"

import { type IWeather } from "@/entities/weather/model/Weather"

interface ICityCard {
	city: IWeather
	index: number
	remove: (city: string) => void
	update: (city: string) => void
}

export function CityCard({ city, index, remove, update }: ICityCard) {
	return (
		<li
			style={{
				animationDelay: `${index * 0.1}s`
			}}
			className="animate-scaleIn group relative w-full rounded-xl bg-blue-50/50 backdrop-blur-md max-md:pr-7 md:pr-3"
			key={index}
		>
			<button
				className="absolute -right-2 -top-1 rounded-full bg-blue-50/30 opacity-0 transition-opacity group-hover:opacity-100 max-md:h-6 max-md:w-6 md:-right-3 md:-top-3 md:h-8 md:w-8"
				onClick={() => remove(city.name)}
			>
				<CloseOutlinedIcon className="max-md:!h-5 max-md:!w-5" />
			</button>

			<button
				className="absolute flex items-center justify-center rounded-full bg-blue-50/30 opacity-0 transition-opacity group-hover:opacity-100 max-md:-right-2 max-md:top-6 max-md:h-6 max-md:w-6 md:-right-3 md:top-7 md:h-8 md:w-8"
				onClick={() => update(city.name)}
			>
				<CachedOutlinedIcon className="max-md:!h-5 max-md:!w-5" />
			</button>

			<Link
				className="flex w-full justify-between max-md:flex-col"
				to={ROUTES.CITY.replace(":city", city.name)}
			>
				<div className="flex justify-between md:w-8/12">
					<section className="max-md:px-3 max-md:py-5 md:px-6 md:py-8">
						<h3 className="flex gap-x-1 font-medium max-md:text-lg md:text-xl">
							{city.name}, <p>{city.sys.country}</p>
						</h3>
					</section>

					<section className="max-md:py-5 md:py-7">
						<p className="font-light max-md:text-xs">
							{new Date(city.dt * 1000).toLocaleDateString("en-US", {
								weekday: "long",
								year: "numeric",
								month: "short",
								day: "numeric"
							})}
						</p>

						<div className="mt-3 flex gap-x-3">
							<section>
								<p className="font-medium max-md:text-[10px] md:text-xs">min:</p>
								<span className="block transition-transform duration-200 group-hover:scale-125 max-md:text-sm">
									{Math.round(city.main.temp_min)}°
								</span>
							</section>

							<section>
								<p className="font-medium max-md:text-[10px] md:text-xs">max:</p>
								<span className="block transition-transform delay-200 duration-200 group-hover:scale-125 max-md:text-sm">
									{Math.round(city.main.temp_max)}°
								</span>
							</section>
						</div>
					</section>
				</div>

				<img
					className="h-full max-h-[100px] max-md:mx-auto max-md:max-w-[100px]"
					src={getIconUrl(city.weather[0].icon)}
				/>
			</Link>
		</li>
	)
}
