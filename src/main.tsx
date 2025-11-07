import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { HashRouter } from "react-router-dom";
import ErrorBoundary from "./components/errorHandling/ErrorBoundry";
import { Provider } from "react-redux";
import { store } from "./store/store/store";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HashRouter>
      <ErrorBoundary>
        <Provider store={store}>
          <App />
        </Provider>
      </ErrorBoundary>
    </HashRouter>
  </React.StrictMode>
);
