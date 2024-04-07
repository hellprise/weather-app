import { Provider } from "react-redux"
import { RouterProvider } from "react-router-dom"
import { Toaster } from "sonner"

import { router } from "@/app/router"
import { store } from "@/app/store/store"

export function MainProvider() {
	return (
		<Provider store={store}>
			<RouterProvider router={router} />
			<Toaster
				position="bottom-right"
				duration={3000}
				closeButton
			/>
		</Provider>
	)
}
