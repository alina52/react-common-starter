import React from 'react';
import ReactDOM from 'react-dom';
import App from 'src/app';
import appConfig from 'src/config/AppConfig'
import reportWebVitals from 'src/reportWebVitals';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from 'src/config/AppMuiTheme'

appConfig.initialize(window.CONFIG)
delete window.CONFIG

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('app')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
