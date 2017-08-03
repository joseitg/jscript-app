const { app, BrowserWindow } = require('electron')

app.on('ready', () => {
  let main = null
  main = new BrowserWindow({
    show: false, 
    frame: true,
  });
  
  main.webContents.once('dom-ready', () => {
      console.log('main loaded')
      main.show()
      main.webContents.openDevTools({mode:"undocked"})
  })

  main.loadURL('file://' + __dirname + '/index.html');
})