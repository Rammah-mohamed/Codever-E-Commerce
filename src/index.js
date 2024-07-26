import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import store from "./state/store";
import { Provider } from "react-redux";
import { ProductProvider } from "./context/productContext";
import { ColorProvider } from "./context/colorContext";
import { SizeProvider } from "./context/sizeContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ProductProvider>
        <ColorProvider>
          <SizeProvider>
            <App />
          </SizeProvider>
        </ColorProvider>
      </ProductProvider>
    </Provider>
  </React.StrictMode>
);
