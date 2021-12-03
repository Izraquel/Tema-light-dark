import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
@import "https://fonts.googleapis.com/css2?family=Roboto&display=swap";

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background: ${props => props.theme.colors.background};
        font-size: 14px;
        color: ${props => props.theme.colors.text};
        font-family: sans-serif;
    }

`