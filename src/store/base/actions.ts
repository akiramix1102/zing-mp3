import { ActionTree } from 'vuex'
import { ISBase } from '.'

const actions: ActionTree<ISBase, unknown> = {
  // setOpenPopup({ commit }, data: { popupName: string; isOpen: string }) {
  //   commit('SET_OPEN_POPUP', data)
  // }
  setcurrentTrack({ commit }, song) {
    commit('SET_DETAI_SONG', song)
  },
  setPlaySong({ commit }, status) {
    commit('SET_PLAY_SONG', status)
  }
}

export default actions
