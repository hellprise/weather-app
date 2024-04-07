import ButtonComponent, { type ButtonProps } from "@mui/material/Button"
import { type PropsWithChildren } from "react"

export function Button({ children, ...props }: PropsWithChildren<ButtonProps>) {
	return <ButtonComponent {...props}>{children}</ButtonComponent>
}
