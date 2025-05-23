const { contextBridge, ipcRenderer } = require("electron");
const fs = require("fs");
const path = require("path");

const userDataArg = process.argv.find((arg) =>
  arg.startsWith("--userDataPath=")
);
const userDataPath = userDataArg?.split("=")[1];
const dataFile = path.join(userDataPath, "webShortCuts.json");

function load() {
  try {
    return JSON.parse(fs.readFileSync(dataFile, "utf-8"));
  } catch {
    return [];
  }
}

function save(data) {
  fs.writeFileSync(dataFile, JSON.stringify(data, null, 2));
}

contextBridge.exposeInMainWorld("electronAPI", {
  getWebShortCuts: () => load(),
  addWebShortCut: (shortCut) => {
    const current = load();
    const newShortCut = { ...shortCut, id: current.length };
    save([...current, newShortCut]);
  },
  controlWindow: (command) => ipcRenderer.send("window-control", command),
  onWindowStateChange: (callback) =>
    ipcRenderer.on("window-state", (_, state) => callback(state)),
});
