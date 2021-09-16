import { Module } from 'vuex'
import actions from './actions'
import mutations from './mutations'

export interface ISBase {
  // popup: string[]
  currentTrack: Record<string, any>
  isPlay: boolean
}

const state: ISBase = {
  // popup: [],
  currentTrack: {},
  isPlay: false
}

const beBase: Module<ISBase, unknown> = {
  namespaced: true,
  state,
  actions,
  mutations
}

export default beBase
