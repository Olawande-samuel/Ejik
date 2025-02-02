import pluginJs from "@eslint/js";
import eslintPluginPrettier from "eslint-plugin-prettier/recommended";
import pluginJSXReactConfig from "eslint-plugin-react/configs/jsx-runtime.js";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";
import tailwind from "eslint-plugin-tailwindcss";
import globals from "globals";
import tseslint from "typescript-eslint";

export default [
	{
		ignores: [
			".next",
			"**/node_modules/",
			".git/",
			"dist",
			"**/*.config.*",
			"**/src/components/ui/",
		],
	},
	{ languageOptions: { globals: globals.browser } },
	pluginJs.configs.recommended,
	pluginReactConfig,
	pluginJSXReactConfig,
	...tseslint.configs.recommended,
	...tailwind.configs["flat/recommended"],
	eslintPluginPrettier,
	{
		files: ["**/*.jsx"],
		languageOptions: { parserOptions: { ecmaFeatures: { jsx: true } } },
		rules: {
			"prettier/prettier": "error",
			"react/react-in-jsx-scope": "off",
			"react/jsx-uses-react": "off",
			"@typescript-eslint/no-explicit-any": "error",
			"no-unused-vars": ["error", { args: "none" }],
		},
	},
	{
		settings: {
			react: {
				version: "detect",
			},
		},
	},
];
