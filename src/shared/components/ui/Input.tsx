import { TextField } from "@mui/material"
import {
	type Control,
	Controller,
	type FieldValues,
	type UseFormSetValue
} from "react-hook-form"

import { type ISearchCityForm } from "./CreateCityForm"

export interface FormInputProps {
	name: string
	control: Control<FieldValues>
	label: string
	setValue: UseFormSetValue<ISearchCityForm>
}

export function Input({ name, label, control }: FormInputProps) {
	return (
		<Controller
			render={({ field: { onChange, value }, fieldState: { error } }) => (
				<TextField
					helperText={error ? error.message : null}
					onChange={onChange}
					variant="outlined"
					error={!!error}
					value={value}
					label={label}
					size="small"
					fullWidth
				/>
			)}
			rules={{
				required: {
					value: true,
					message: "Field is required"
				},
				minLength: {
					value: 3,
					message: "Field must be at least 3 characters"
				},
				pattern: {
					value: /^[A-Za-z]+$/,
					message: "Field must contain only letters"
				}
			}}
			control={control}
			name={name}
		/>
	)
}
