import { Button, Input } from "."
import {
	type Control,
	type FieldValues,
	type SubmitHandler,
	useForm
} from "react-hook-form"
import { toast } from "sonner"

import { type IWeather } from "@/entities/weather/model/Weather"

import { Search } from "./icons/Search"

export interface ISearchCityForm {
	city: string
}

interface CreateCityFormProps {
	list?: IWeather[]
	getWeatherByCity: (city: string) => void
}

export function CreateCityForm({ getWeatherByCity, list }: CreateCityFormProps) {
	const { reset, control, handleSubmit, setValue } = useForm<ISearchCityForm>({
		mode: "onChange",
		defaultValues: {
			city: ""
		}
	})

	const onSubmit: SubmitHandler<ISearchCityForm> = (data: ISearchCityForm) => {
		if (list?.some(city => city.name.toLowerCase() === data.city.toLowerCase())) {
			toast.error("City already exists")

			return
		}

		getWeatherByCity(data.city)
		reset()
	}

	return (
		<div className="h-fit w-full max-w-xl rounded-xl bg-white/40 backdrop-blur-md max-md:px-4 max-md:py-5 md:px-6 md:pb-12 md:pt-10">
			<h1 className="text-center font-semibold max-md:mb-6 max-md:text-2xl md:mb-10 md:text-3xl">
				Check the weather
			</h1>

			<form
				onSubmit={handleSubmit(onSubmit)}
				data-testid="create-city-form"
				className="flex gap-x-3"
			>
				<Input
					control={control as unknown as Control<FieldValues>}
					label="Enter a city name"
					setValue={setValue}
					name="city"
				/>

				<div>
					<Button
						variant="contained"
						type="submit"
						size="large"
					>
						<Search />
					</Button>
				</div>
			</form>
		</div>
	)
}
