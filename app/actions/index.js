import * as types from '../constants';

export function clikcMenu (flag) {
  return {
    type: types.CLICKMENU,
    isClick: flag
  }
}