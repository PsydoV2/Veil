interface WebShortCut {
  id: number;
  url: string;
  imgUrl: string;
}

interface AppSettings {
  theme: "light" | "dark";
}

interface AppData {
  webShortCuts: WebShortCut[];
  settings: AppSettings;
}

interface ElectronAPI {
  getAllData: () => AppData;
  updateWebShortCuts: (shortcuts: WebShortCut[]) => void;
  updateSettings: (settings: AppSettings) => void;
  controlWindow: (
    command: "minimize" | "maximize" | "unmaximize" | "close"
  ) => void;
  onWindowStateChange: (
    callback: (state: "maximized" | "restored") => void
  ) => void;
}

interface Window {
  electronAPI: ElectronAPI;
}
