import { type IconProps } from "./Icon.interface"

export function Search(props: IconProps) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			strokeLinejoin="round"
			strokeLinecap="round"
			stroke="currentColor"
			viewBox="0 0 24 24"
			strokeWidth="2"
			height="24"
			fill="none"
			width="24"
			{...props}
		>
			<circle
				cx="11"
				cy="11"
				r="8"
			/>
			<path d="m21 21-4.3-4.3" />
		</svg>
	)
}
