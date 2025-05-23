interface WebShortCut {
  id: number;
  url: string;
  imgUrl: string;
}

interface ElectronAPI {
  getWebShortCuts: () => WebShortCut[];
  addWebShortCut: (shortcut: WebShortCut) => void;
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
