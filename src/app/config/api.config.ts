export const API_URL = import.meta.env.VITE_API_URL || ""

export const ICON_URL = "https://openweathermap.org/img/wn/"

export const getWeatherUrl = (string: string) =>
	`/weather/?${string}&appid=${import.meta.env.VITE_WEATHER_API_KEY}`

export const getHourlyForecastUrl = (string: string) =>
	`/forecast?${string}&appid=${import.meta.env.VITE_WEATHER_API_KEY}`

export const getIconUrl = (icon: string) => `${ICON_URL}${icon}@2x.png`
