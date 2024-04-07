import { type Clouds, type Coord, type Weather, type Wind } from "./common"

export interface IWeather {
	coord: Coord
	weather: Weather[]
	base: string
	main: Main
	visibility: number
	wind: Wind
	clouds: Clouds
	dt: number
	sys: Sys
	timezone: number
	id: number
	name: string
	cod: number
}

interface Sys {
	type: number
	id: number
	country: string
	sunrise: number
	sunset: number
}

interface Main {
	temp: number
	feels_like: number
	temp_min: number
	temp_max: number
	pressure: number
	humidity: number
}
