import CHANGE_MENU from './action-types'

const initState = {
  menuName: ''
}

const reducer = (state = initState, action) => {
  let newState
  switch (action.type) {
    case CHANGE_MENU:
      newState = {
        menuName: action.menuName
      }
      break
    default:
      newState = state
      return newState
  }
  return newState
}

export default reducer