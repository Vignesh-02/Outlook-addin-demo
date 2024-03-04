import * as React from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App";
import { FluentProvider, webLightTheme } from "@fluentui/react-components";
import "./index.css";


/* global document, Office, module, require */
import { Provider } from "react-redux";
import {store} from "../Store/store"






const title = "Contoso Task Pane Add-in";

const rootElement = document.getElementById("container");
const root = createRoot(rootElement);

/* Render application after Office initializes */
Office.onReady(() => {
  root.render(
    // <FluentProvider theme={webLightTheme}>
        <Provider store={store}>
            <App title={title} />
        </Provider>
    // </FluentProvider>
  );
});

if (module.hot) {
  module.hot.accept("./components/App", () => {
    const NextApp = require("./components/App").default;
    root.render( 
        <Provider store={store}>
            <NextApp title={title} />
        </Provider>
    );
  });
}
