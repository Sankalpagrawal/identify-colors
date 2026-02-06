const { app, BrowserWindow } = require("electron");

function createWindow() {
  const win = new BrowserWindow({
    fullscreen: true,
    titleBarStyle: "hidden",
    trafficLightPosition: { x: 20, y: 20 },
    webPreferences: {
      preload: __dirname + "/preload.js"
    }
  });

  win.loadFile("index.html");
}

app.whenReady().then(createWindow);
