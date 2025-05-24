import { createContext, useContext, useEffect, useState } from "react";

export interface WebShortCut {
  id: number;
  url: string;
  imgUrl: string;
}

export interface AppSettings {
  theme: "light" | "dark";
}

export interface AppData {
  webShortCuts: WebShortCut[];
  settings: AppSettings;
}

interface AppDataContextValue {
  data: AppData;
  updateWebShortCuts: (items: WebShortCut[]) => void;
  updateSettings: (settings: AppSettings) => void;
  refresh: () => void;
}

const AppDataContext = createContext<AppDataContextValue | null>(null);

export function AppDataProvider({ children }: { children: React.ReactNode }) {
  const [data, setData] = useState<AppData>({
    webShortCuts: [],
    settings: { theme: "light" },
  });

  const refresh = () => {
    const loaded = window.electronAPI.getAllData();
    setData(loaded);
  };

  const updateWebShortCuts = (items: WebShortCut[]) => {
    window.electronAPI.updateWebShortCuts(items);
    setData((prev) => ({ ...prev, webShortCuts: items }));
  };

  const updateSettings = (settings: AppSettings) => {
    window.electronAPI.updateSettings(settings);
    setData((prev) => ({ ...prev, settings }));
  };

  useEffect(() => {
    refresh();
  }, []);

  return (
    <AppDataContext.Provider
      value={{ data, updateWebShortCuts, updateSettings, refresh }}
    >
      {children}
    </AppDataContext.Provider>
  );
}

export function useAppData() {
  const ctx = useContext(AppDataContext);
  if (!ctx) throw new Error("useAppData must be used inside AppDataProvider");
  return ctx;
}
