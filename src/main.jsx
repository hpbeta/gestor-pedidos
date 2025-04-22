import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { ItemProvider } from "./contexts/ItemContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ItemProvider>
      <App />
    </ItemProvider>
  </StrictMode>
);
