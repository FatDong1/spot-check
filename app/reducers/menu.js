const initialState = {
  isClick: false
}

const menu = (state=initialState, action) => {
  switch (action.type) {
    case 'CLICKMENU':
      return  {
        isClick: action.isClick
      }
    default: 
      return state
  }
}

export default menu