import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: ${props => props.theme["gray-900"]};
  color: ${props => props.theme.white};
}

body, input, textarea, button {
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 1rem;
}
`

export const LayoutContainer = styled.div`
  max-width: 74rem;
  min-height: calc(100vh - 10rem);
  margin: 5rem auto;

  padding: 2.5rem;

  background-color: ${props => props.theme["gray-800"]};
  border-radius: 8px;

  display: flex;
  flex-direction: column;

`;
