const ipc = require('electron').ipcRenderer

// 退出系统
const exitBtn = document.getElementById('exit')
exitBtn.addEventListener('click', function () {
  ipc.send('test')
})