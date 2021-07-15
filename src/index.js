import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import mytheme from './themes'
import { ThemeProvider } from 'styled-components'

ReactDOM.render
(
    <ThemeProvider theme = {mytheme}>
<App />
    </ThemeProvider>
, document.getElementById("root"));
