
import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducers";
import App from "./App";
import GlobalStyle from "./theme/GlobalStyle";
import { ThemeProvider } from 'styled-components';
import {theme} from '../src/theme/theme'


const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  
  <Provider store={store}>
     <ThemeProvider theme={theme}>
        <GlobalStyle/>
        <App />
    </ThemeProvider>
  </Provider>,
  document.querySelector("#root")
);