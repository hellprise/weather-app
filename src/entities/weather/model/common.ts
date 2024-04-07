export interface Coord {
	lat: number
	lon: number
}

export interface Clouds {
	all: number
}

export interface Weather {
	id: number
	main: string
	description: string
	icon: string
}

export interface Wind {
	speed: number
	deg: number
	gust: number
}
