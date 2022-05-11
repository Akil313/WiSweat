import { createGlobalStyle } from "styled-components"

export const lightTheme = {
    background: '#FFF'
}

export const darkTheme = {
    background: '#494D5F',
    primary: '#12B147',
    secondary: '#6357EE',
    fontColor: '#FFF'
}

export const GlobalStyles = createGlobalStyle`

    body {
        background-color: ${props => props.theme.background}
    }

`