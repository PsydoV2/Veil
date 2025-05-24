const { contextBridge, ipcRenderer } = require("electron");
const fs = require("fs");
const path = require("path");

const userDataArg = process.argv.find((arg) =>
  arg.startsWith("--userDataPath=")
);
const userDataPath = userDataArg?.split("=")[1];

// Hilfsfunktionen für JSON-Dateien
function loadFile(name) {
  const file = path.join(userDataPath, `${name}.json`);
  try {
    return JSON.parse(fs.readFileSync(file, "utf-8"));
  } catch {
    return name === "settings" ? { theme: "light" } : [];
  }
}

function saveFile(name, data) {
  const file = path.join(userDataPath, `${name}.json`);
  fs.writeFileSync(file, JSON.stringify(data, null, 2));
}

contextBridge.exposeInMainWorld("electronAPI", {
  getAllData: () => ({
    webShortCuts: loadFile("webShortCuts"),
    settings: loadFile("settings"),
  }),

  updateWebShortCuts: (shortcuts) => saveFile("webShortCuts", shortcuts),
  updateSettings: (settings) => saveFile("settings", settings),

  controlWindow: (command) => ipcRenderer.send("window-control", command),
  onWindowStateChange: (callback) =>
    ipcRenderer.on("window-state", (_, state) => callback(state)),
});
