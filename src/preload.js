const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("electronAPI", {
  controlWindow: (command) => ipcRenderer.send("window-control", command),
  onWindowStateChange: (callback) =>
    ipcRenderer.on("window-state", (_, state) => callback(state)),
});
