module.exports = {
	root: true,
	env: { browser: true, es2020: true },
	extends: [
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:react-hooks/recommended"
	],
	ignorePatterns: ["dist", ".eslintrc.cjs"],
	parser: "@typescript-eslint/parser",
	plugins: ["react-refresh", "perfectionist"],
	rules: {
		"@typescript-eslint/no-unused-vars": "warn",
		"react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
		"perfectionist/sort-jsx-props": [
			"error",
			{
				type: "line-length",
				order: "desc",
				groups: ["multiline", "unknown", "shorthand"]
			}
		],
		"@typescript-eslint/consistent-type-imports": [
			"error",
			{
				fixStyle: "inline-type-imports"
			}
		]
	}
}
