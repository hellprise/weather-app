/// <reference types="vitest" />
// import react from "@vitejs/plugin-react"
import react from "@vitejs/plugin-react-swc"
import { defineConfig } from "vite"

export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			"@": "/src"
		}
	},
	test: {
		globals: true,
		environment: "jsdom",
		setupFiles: "./tests/setup"
		// coverage: {
		// 	reporter: ["text", "json", "html"]
		// }
	}
})
