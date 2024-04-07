import { type IconProps } from "./Icon.interface"

export function Sunset(props: IconProps) {
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
			<path d="M12 10V2" />
			<path d="m4.93 10.93 1.41 1.41" />
			<path d="M2 18h2" />
			<path d="M20 18h2" />
			<path d="m19.07 10.93-1.41 1.41" />
			<path d="M22 22H2" />
			<path d="m16 6-4 4-4-4" />
			<path d="M16 18a4 4 0 0 0-8 0" />
		</svg>
	)
}
