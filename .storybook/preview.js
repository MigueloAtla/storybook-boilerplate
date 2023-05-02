import { withThemeFromJSXProvider } from "@storybook/addon-styling"
import { ThemeProvider as StyledComponentsThemeProvider } from "styled-components"
import { theme } from "../src/styles/theme"

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
  withThemeFromJSXProvider({
    themes: {
      light: theme,
      dark: theme,
    },
    defaultTheme: "light",
    Provider: StyledComponentsThemeProvider,
  }),
]
