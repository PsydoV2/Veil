// types/global.d.ts
interface Window {
  electronAPI: {
    controlWindow: (
      command: "minimize" | "maximize" | "unmaximize" | "close"
    ) => void;
    onWindowStateChange: (
      callback: (state: "maximized" | "restored") => void
    ) => void;
  };
}
