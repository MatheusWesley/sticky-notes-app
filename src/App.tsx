import { ThemeProvider } from "styled-components";
import { Note } from "./components/Note";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle, LayoutContainer } from "./styles/global";
import { Header } from "./components/Header";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <LayoutContainer>
        <Header />
        <Note />
        <GlobalStyle />
      </LayoutContainer>
    </ThemeProvider>
  )
}