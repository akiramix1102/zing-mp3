<template>
  <div class="be-flex align-center control-player">
    <div class="be-flex align-center control-player__description">
      <img :src="currentTrack.thumbnail" :alt="currentTrack.title" class="is-60 is-round" />
      <div class="text-white title">
        <span>{{ currentTrack.title }}</span>
        <div class="artists-small">
          <span> {{ currentTrack.artistsNames }}</span>
        </div>
      </div>
    </div>
    <div class="control-player__bar">
      <div class="level-item">
        <div class="be-flex align-center btn-actions">
          <div class="icon-item text-white cursor">
            <base-icon icon="shuffle-icon" class="icon" style="font-size: 22px" />
          </div>
          <div class="icon-item text-white cursor">
            <base-icon icon="previous-icon" class="icon" style="font-size: 16px; padding: 6px 8px" />
          </div>
          <div class="icon-item text-white cursor">
            <base-icon icon="play-icon" class="play-icon" style="font-size: 40px" />
          </div>
          <div class="icon-item text-white cursor">
            <base-icon icon="next-icon" class="icon" style="font-size: 16px; padding: 6px 8px" />
          </div>
          <div class="icon-item text-white cursor">
            <base-icon icon="repeat-icon" class="icon" style="font-size: 22px" />
          </div>
        </div>
      </div>
      <div class="progress-bar">
        <span class="time time-curent">{{ timeCurent }}</span>
        <div class="progress-line">
          <div class="line-main"></div>
          <div class="line-curent" :style="{ width: barWidth }"></div>
          <div class="line-cricle" :style="{ left: circleLeft }"></div>
        </div>
        <span class="time time-total">{{ currentTrack.duration | formatTimeTotal }}</span>
      </div>
    </div>
    <div class="control-player__volume"></div>
  </div>
</template>

<script lang="ts">
  import { Component, Vue, Watch } from 'vue-property-decorator'
  import { namespace } from 'vuex-class'
  const beBase = namespace('beBase')

  import getRepository from '@/services'
  import PlayerRepository from '@/services/repositories/player'
  const apiPlayer: PlayerRepository = getRepository('player')

  @Component
  export default class ControlPlayer extends Vue {
    @beBase.State('currentTrack') currentTrack!: Record<string, any>

    audio: Record<string, any> = {}
    timeCurent = '00:00'
    barWidth = '0px'
    circleLeft = '0%'

    created(): void {
      this.audio = new Audio()
      this.audio.ontimeupdate = () => {
        this.generateTime()
      }
    }

    @Watch('currentTrack.encodeId', { immediate: true }) watchCurentTrack(new_: string): void {
      this.getStreaming(new_)
    }

    async getStreaming(id: string): Promise<void> {
      const result = await apiPlayer.getLinkStreaming({ id })
      if (result['320'] !== 'VIP') {
        this.audio.src = result['320']
      } else {
        this.audio.src = result['128']
      }
      this.audio.play()
    }
    generateTime(): void {
      let width = (100 / this.audio.duration) * this.audio.currentTime
      this.barWidth = width + '%'
      this.circleLeft = width - 1 + '%'
      let durmin: string | number = Math.floor(this.audio.duration / 60)
      let dursec: string | number = Math.floor(this.audio.duration - durmin * 60)
      let curmin: string | number = Math.floor(this.audio.currentTime / 60)
      let cursec: string | number = Math.floor(this.audio.currentTime - curmin * 60)
      if (durmin < 10) {
        durmin = '0' + durmin
      }
      if (dursec < 10) {
        dursec = '0' + dursec
      }
      if (curmin < 10) {
        curmin = '0' + curmin
      }
      if (cursec < 10) {
        cursec = '0' + cursec
      }
      //   this.duration = durmin + ':' + dursec
      this.timeCurent = curmin + ':' + cursec
    }
  }
</script>

<style scoped lang="scss">
  .control-player {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 90px;
    background-color: #120c1c;
    display: flex;
    align-items: center;
    padding: 0 30px;
    border-top: 1px solid #373041;
    &__description {
      width: 30%;
      .title {
        padding-left: 10px;
        .artists-small {
          margin-top: 5px;
        }
      }
    }
    &__bar {
      flex-grow: 1;
      .level-item {
        .btn-actions {
          justify-content: center;
          .icon-item {
            margin: 0 10px;
            &:hover {
              .icon {
                background: hsla(0, 0%, 100%, 0.1);
              }
              .play-icon {
                color: var(--link-text-hover);
              }
            }
            .icon {
              padding: 3px 5px;
              border-radius: 50%;
            }
          }
        }
      }
      .progress-bar {
        display: flex;
        align-items: center;
        justify-content: space-between;
        .time {
          font-size: 12px;
          color: var(--text-subtitle);
        }
        .progress-line {
          position: relative;
          width: 100%;
          height: 3px;
          margin: 0 10px;
          cursor: pointer;
          &:hover {
            .line-main {
              height: 6px;
            }
            .line-cricle {
              display: inline-block;
            }
            .line-curent {
              height: 6px;
            }
          }
          .line-main {
            width: 100%;
            height: 3px;
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            border-radius: 4px;
            background: #595560;
          }
          .line-curent {
            width: 0px;
            height: 3px;
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            border-radius: 4px;
            background: #fff;
            z-index: 2;
          }
          .line-cricle {
            width: 12px;
            height: 12px;
            border-radius: 50%;
            background-color: #fff;
            position: absolute;
            top: 50%;
            left: 0;
            z-index: 3;
            transform: translateY(-50%);
            display: none;
          }
        }
      }
    }
    &__volume {
      width: 30%;
    }
  }
</style>
