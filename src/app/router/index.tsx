import { createBrowserRouter } from "react-router-dom"

import { City } from "@/shared/components/screens/City"
import { Error } from "@/shared/components/screens/Error"
import { Home } from "@/shared/components/screens/Home"

export const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
		errorElement: <Error />
	},
	{
		path: "/city/:city",
		element: <City />,
		errorElement: <Error />
	}
])
