//console.log("hello,word")
const { app, BrowserWindow } = require('electron') // 2 importar esses recursos/ linha 4 a 11
// função anomina, dentro dela tem função broser window
const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600
  })

  win.loadFile('./src/views/index.html')// vai criar uma janela, precisa apontar o caminho
}

app.whenReady().then(() => {
  createWindow()
})