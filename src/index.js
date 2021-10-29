/*
 * @Author: Chenyu Wang
 * @LastEditors: Chenyu Wang
 * @email: chenyu.wang96@outlook.com
 * @github: https://github.com/alina52
 * @Date: 2021-10-18 14:52:09
 * @LastEditTime: 2021-10-29 13:07:51
 */
import React from 'react';
import ReactDOM from 'react-dom';
import App from 'src/app';
import appConfig from 'src/config/AppConfig'
import reportWebVitals from 'src/reportWebVitals';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from 'src/config/AppMuiTheme'
import { GeneralProvider } from "src/app/context";

appConfig.initialize(window.CONFIG)
delete window.CONFIG

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GeneralProvider>
      <App />
      </GeneralProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('app')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
