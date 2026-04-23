import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import ShopContextProvider from "./context/ShopProvider.tsx";
import { FavoriteContextProvider } from "./context/FavoritesProvider.tsx";
import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <ShopContextProvider>
        <FavoriteContextProvider>
          <App />
        </FavoriteContextProvider>
      </ShopContextProvider>
    </BrowserRouter>
  </StrictMode>,
);
