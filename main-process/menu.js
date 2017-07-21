const electron = require('electron')
const BrowserWindow = electron.BrowserWindow
const Menu = electron.Menu
const app = electron.app

let template = [{
  label: '系统管理(D)',
  submenu: [{
    label: '权限授予',
    accelerator: 'CmdOrCtrl+M',
    role: 'minimize'
  }, {
    label: '退出系统',
    accelerator: 'CmdOrCtrl+W',
    role: 'close'
  }]
}, {
  label: '设备信息(O)',
  submenu: [{
    label: '设备导入'
  }, {
    label: '设备导出',
  }, {
    label: '设备查询',
    accelerator: 'CmdOrCtrl+X',
    role: 'cut'
  },{
    label: '设备分类',
  }, ]
}, {
  label: '人员管理(N)',
  submenu: [{
    label: '人员查询',
    // accelerator: 'CmdOrCtrl+R',
    click: function (item, focusedWindow) {
      // if (focusedWindow) {
      //   // 重载之后, 刷新并关闭所有的次要窗体
      //   if (focusedWindow.id === 1) {
      //     BrowserWindow.getAllWindows().forEach(function (win) {
      //       if (win.id > 1) {
      //         win.close()
      //       }
      //     })
      //   }
      //   focusedWindow.reload()
      // }
    }
  }, {
    label: '人员导入',
    // accelerator: (function () {
    //   if (process.platform === 'darwin') {
    //     return 'Ctrl+Command+F'
    //   } else {
    //     return 'F11'
    //   }
    // })(),
    click: function (item, focusedWindow) {
    //   if (focusedWindow) {
    //     focusedWindow.setFullScreen(!focusedWindow.isFullScreen())
    //   }
    }
  }]
}, {
  label: '标准化管理(G)',
  submenu: [{
    label: '设备标准'
  },{
    label: '故障标准',
    click: function () {
      // app.emit('activate')
    }
  }]
}, {
  label: '工单管理(M)',
  submenu: [{
    label: '工单导入',
    click: function () {
      // electron.shell.openExternal('http://electron.atom.io')
    }
  },{
    label: '工单导出'
  }]
}, {
  label: '工作管理(A)',
  submenu: [{
    label: '日常点检'
  }, {
    label: '专业点检'
  }, {
    label: '精密点检'
  }]
}]

function addUpdateMenuItems (items, position) {
  if (process.mas) return

  const version = electron.app.getVersion()
  let updateItems = [{
    label: `Version ${version}`,
    enabled: false
  }, {
    label: '正在检查更新',
    enabled: false,
    key: 'checkingForUpdate'
  }, {
    label: '检查更新',
    visible: false,
    key: 'checkForUpdate',
    click: function () {
      require('electron').autoUpdater.checkForUpdates()
    }
  }, {
    label: '重启并安装更新',
    enabled: true,
    visible: false,
    key: 'restartToUpdate',
    click: function () {
      require('electron').autoUpdater.quitAndInstall()
    }
  }]

  items.splice.apply(items, [position, 0].concat(updateItems))
}

function findReopenMenuItem () {
  const menu = Menu.getApplicationMenu()
  if (!menu) return

  let reopenMenuItem
  menu.items.forEach(function (item) {
    if (item.submenu) {
      item.submenu.items.forEach(function (item) {
        if (item.key === 'reopenMenuItem') {
          reopenMenuItem = item
        }
      })
    }
  })
  return reopenMenuItem
}

if (process.platform === 'darwin') {
  const name = electron.app.getName()
  template.unshift({
    label: name,
    submenu: [{
      label: `关于 ${name}`,
      role: 'about'
    }, {
      type: 'separator'
    }, {
      label: '服务',
      role: 'services',
      submenu: []
    }, {
      type: 'separator'
    }, {
      label: `隐藏 ${name}`,
      accelerator: 'Command+H',
      role: 'hide'
    }, {
      label: '隐藏其它',
      accelerator: 'Command+Alt+H',
      role: 'hideothers'
    }, {
      label: '显示全部',
      role: 'unhide'
    }, {
      type: 'separator'
    }, {
      label: '退出',
      accelerator: 'Command+Q',
      click: function () {
        app.quit()
      }
    }]
  })

  // 窗口菜单.
  template[3].submenu.push({
    type: 'separator'
  }, {
    label: '前置所有',
    role: 'front'
  })

  addUpdateMenuItems(template[0].submenu, 1)
}

if (process.platform === 'win32') {
  const helpMenu = template[template.length - 1].submenu
  // addUpdateMenuItems(helpMenu, 0)
}

app.on('ready', function () {
  const menu = Menu.buildFromTemplate(template)
  Menu.setApplicationMenu(menu)
})

app.on('browser-window-created', function () {
  let reopenMenuItem = findReopenMenuItem()
  if (reopenMenuItem) reopenMenuItem.enabled = false
})

app.on('window-all-closed', function () {
  let reopenMenuItem = findReopenMenuItem()
  if (reopenMenuItem) reopenMenuItem.enabled = true
})
