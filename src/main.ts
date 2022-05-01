import { app, BrowserWindow } from "electron";
import { initialize } from "@electron/remote/main";

initialize();

const createWindow = (): void => {
  let win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
  });
  // win.loadURL(`file://${app.getAppPath()}/index.html`);
  win.loadURL(`http://localhost:9000`);

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
};

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});

app.on("ready", createWindow);
