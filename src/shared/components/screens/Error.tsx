/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRouteError } from "react-router-dom"

export function Error() {
	const error: any = useRouteError()
	console.error(error)

	return (
		<main
			className="flex min-h-dvh flex-col items-center max-md:pt-10 md:pt-20"
			id="error-page"
		>
			<h1 className="mb-6 text-3xl font-semibold">Oops!</h1>
			<p className="mb-4 md:text-xl">Sorry, an unexpected error has occurred.</p>
			<p className="underline underline-offset-2 max-md:text-sm md:text-lg">
				<i>{error.statusText || error.message}</i>
			</p>
		</main>
	)
}
