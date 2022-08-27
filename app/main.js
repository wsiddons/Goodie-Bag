import React from "react";
import { createRoot } from "react-dom/client";
import Root from "./Root";
import { Provider } from "react-redux";
import store from "./store/index";
import { BrowserRouter } from 'react-router-dom'

const root = createRoot(document.getElementById("main"));

root.render(
  <BrowserRouter>
    <Provider store={store}>
      <Root />
    </Provider>
  </BrowserRouter>

);
