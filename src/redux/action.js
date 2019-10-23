import { CHANGE_MENU } from './action-types'

export const changeMenu = menuName => ({
  type: CHANGE_MENU,
  menuName
})