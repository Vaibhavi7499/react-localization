import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import HomeContainer from "./contexts/HomeContext.jsx";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n/i18n.js";
import { Provider } from "react-redux";
import Store from "./Store/EmpStore.js";
import "bootstrap/dist/css/bootstrap.min.css";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
    <Provider store={Store}>
    <I18nextProvider i18n={i18n}>
      <HomeContainer>
        <App />
      </HomeContainer>
      </I18nextProvider>
      </Provider>
    </BrowserRouter>
  </StrictMode>
);
