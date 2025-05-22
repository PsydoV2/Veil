const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");

function createWindow() {
  const win = new BrowserWindow({
    width: 1000,
    height: 800,
    resizable: true,
    autoHideMenuBar: true,
    frame: false, // <- Fensterrahmen entfernen für eigene Controls
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      contextIsolation: true,
      nodeIntegration: false,
    },
  });

  win.maximize(); // direkt maximieren
  win.loadURL("http://localhost:5173");

  // Optional: Zustand an Renderer schicken
  win.on("maximize", () => win.webContents.send("window-state", "maximized"));
  win.on("unmaximize", () => win.webContents.send("window-state", "restored"));

  // Window-Steuerungen vom Renderer empfangen
  ipcMain.on("window-control", (_, command) => {
    if (command === "minimize") win.minimize();
    else if (command === "maximize") win.maximize();
    else if (command === "unmaximize") win.unmaximize();
    else if (command === "close") win.close();
  });
}

app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
