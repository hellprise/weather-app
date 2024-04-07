import { type IWeather } from "@/entities/weather/model/Weather"

import { CityCard } from "../CityCard"

interface ICitiesList {
	list: IWeather[]
	remove: (city: string) => void
	update: (city: string) => void
}

export function CitiesList({ list, remove, update }: ICitiesList) {
	return (
		<ul
			className="flex w-full max-w-2xl flex-col max-md:gap-y-2.5 md:gap-y-5"
			data-testid="cities-list"
		>
			{list.map((city, index) => (
				<CityCard
					key={city.name}
					remove={remove}
					update={update}
					index={index}
					city={city}
				/>
			))}
		</ul>
	)
}
