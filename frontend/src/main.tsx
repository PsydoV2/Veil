import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { AppDataProvider } from "./context/AppDataContext.tsx";
import { TabProvider } from "./context/TabContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppDataProvider>
      <TabProvider>
        <App />
      </TabProvider>
    </AppDataProvider>
  </StrictMode>
);
