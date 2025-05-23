const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");

function createWindow() {
  const userDataPath = app.getPath("userData");

  const win = new BrowserWindow({
    width: 1000,
    height: 800,
    resizable: true,
    frame: false,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      contextIsolation: true,
      nodeIntegration: false,
      sandbox: false,
      additionalArguments: [`--userDataPath=${userDataPath}`],
    },
  });

  win.loadURL("http://localhost:5173");

  win.on("maximize", () => win.webContents.send("window-state", "maximized"));
  win.on("unmaximize", () => win.webContents.send("window-state", "restored"));

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
