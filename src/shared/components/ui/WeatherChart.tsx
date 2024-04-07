import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from "recharts"

import { type IForecast } from "@/entities/weather/model/Forecast"

export const WeatherChart = ({ forecast }: { forecast: IForecast }) => {
	const data = forecast.list.map(day => ({
		name: new Date(Number(day.dt) * 1000).toLocaleDateString("en-US", {
			weekday: "short",
			hour: "numeric",
			minute: "numeric"
		}),
		temp: day.main.temp
	}))

	return (
		<LineChart
			margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
			height={400}
			width={800}
			data={data}
		>
			<CartesianGrid strokeDasharray="3 3" />
			<XAxis dataKey="name" />
			<YAxis />
			<Tooltip />
			<Legend />
			<Line
				activeDot={{ r: 8 }}
				stroke="#8884d8"
				type="monotone"
				dataKey="temp"
			/>
		</LineChart>
	)
}
