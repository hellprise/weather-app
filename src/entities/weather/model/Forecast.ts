import { type Clouds, type Coord, type Weather, type Wind } from "./common"

export interface IForecast {
	cod: string
	message: number
	cnt: number
	list: List[]
	city: City
}

interface City {
	id: number
	name: string
	coord: Coord
	country: string
	population: number
	timezone: number
	sunrise: number
	sunset: number
}

interface List {
	dt: number
	main: Main
	weather: Weather[]
	clouds: Clouds
	wind: Wind
	visibility: number
	pop: number
	sys: Sys
	dt_txt: string
}

interface Sys {
	pod: string
}

interface Main {
	temp: number
	feels_like: number
	temp_min: number
	temp_max: number
	pressure: number
	sea_level: number
	grnd_level: number
	humidity: number
	temp_kf: number
}
