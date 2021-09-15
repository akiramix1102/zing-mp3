<template>
  <div class="z-home" id="z-home">
    <!-- carousel -->
    <div class="slider-banner">
      <z-carousel :banner="getBanner" />
    </div>
    <div class="mt-2 mb-3 suggest-list">
      <suggest-list :listItem="getSuggestList" title="Gợi Ý Cho Hôm Nay" :isCarousel="true" />
    </div>
    <div class="mb-3 suggest-list">
      <suggest-list :listItem="getSelectTodayList" title="Lựa chọn hôm nay" :isCarousel="false" />
    </div>
    <div v-if="getListMusicToday && getListMusicToday.length" class="mb-3 suggest-list">
      <suggest-list :listItem="getListMusicToday" title="Nhạc Mới Mỗi Ngày" :isCarousel="true" />
    </div>
    <div v-if="getListChart && getListChart.length" class="mb-3 suggest-list">
      <list-chart :listChart="getListChart" :listBanner="getListBannerChart" :totalScore="getTotalScore" />
    </div>
    <div v-if="getTop100 && getTop100.length" class="mb-3 suggest-list">
      <suggest-list :listItem="getTop100" title="Top 100" :isCarousel="true" />
    </div>
    <div v-if="getTopHitVie && getTopHitVie.length" class="mb-3 suggest-list">
      <suggest-list :listItem="getTopHitVie" title="Những Bản Hits Việt" :isCarousel="true" />
    </div>
    <div v-if="getTopHitUsUk && getTopHitUsUk.length" class="mb-3 suggest-list">
      <suggest-list :listItem="getTopHitUsUk" title="Top Hits US-UK" :isCarousel="true" />
    </div>
    <div v-if="getTopMood && getTopMood.length" class="mb-3 suggest-list">
      <suggest-list :listItem="getTopMood" title="Tâm Trạng Và Hoạt Động" :isCarousel="true" :isShowDes="false" />
    </div>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator'
  import ZCarousel from '@/components/carousel/ZCarousel.vue'
  import SuggestList from '../components/SuggestList.vue'
  import ListChart from '../components/ListChart.vue'

  import { IQuery } from '@/interface'
  import { filter } from 'lodash'

  import getRepository from '@/services'
  import HomeRepository from '@/services/repositories/home'
  const apiHome: HomeRepository = getRepository('home')

  @Component({ components: { ZCarousel, SuggestList, ListChart } })
  export default class Home extends Vue {
    data: Array<Record<string, any>> = []
    banner: Record<string, any> = {}
    suggestList: Record<string, any> = {}
    selectTodayList: Record<string, any> = {}
    query: IQuery = {
      page: 1
    }
    isEnd = false

    created(): void {
      apiHome.getHome(this.query).then((res: any) => {
        console.log(res)
        this.data = [...res.items]
        // this.banner = filter(res.items, item => item.sectionType === 'banner')[0]
        // this.suggestList = filter(res.items, item => item.sectionId === 'hSuggestPl')[0]
        // this.selectTodayList = filter(res.items, item => item.sectionId === 'hAutoTheme1')[0]
      })
    }

    mounted(): void {
      const elm: any = document.querySelector('.main-center')
      console.log(elm)

      setTimeout(() => {
        elm.addEventListener('scroll', this.handleScroll)
      }, 1000)
    }

    //computed
    get getBanner(): Record<string, any> {
      return filter(this.data, item => item.sectionType === 'banner')[0]
    }
    get getSuggestList(): Array<Record<string, any>> {
      const objList = filter(this.data, item => item.sectionId === 'hSuggestPl')
      return objList.length ? objList[0].items : []
    }
    get getSelectTodayList(): Array<Record<string, any>> {
      const objList = filter(this.data, item => item.sectionId === 'hAutoTheme1')
      return objList.length ? objList[0].items : []
    }
    get getListMusicToday(): Array<Record<string, any>> {
      const objList = filter(this.data, item => item.sectionId === 'hAutoTheme2')
      return objList.length ? objList[0].items : []
    }
    get getListChart(): Array<Record<string, any>> {
      const objList = filter(this.data, item => item.sectionId === 'hZC')
      return objList.length ? objList[0].items : []
    }
    get getTotalScore(): number {
      const objList = filter(this.data, item => item.sectionId === 'hZC')
      return objList.length ? objList[0].chart.totalScore : 0
    }
    get getListBannerChart(): Array<Record<string, any>> {
      const objList = filter(this.data, item => item.sectionType === 'weekChart')
      return objList.length ? objList[0].items : []
    }
    get getTop100(): Array<Record<string, any>> {
      const objList = filter(this.data, item => item.sectionId === 'h100')
      return objList.length ? objList[0].items : []
    }
    get getTopHitVie(): Array<Record<string, any>> {
      const objList = filter(this.data, item => item.sectionId === 'hAutogenre1')
      return objList.length ? objList[0].items : []
    }
    get getTopHitUsUk(): Array<Record<string, any>> {
      const objList = filter(this.data, item => item.sectionId === 'hAutogenre2')
      return objList.length ? objList[0].items : []
    }
    get getTopMood(): Array<Record<string, any>> {
      const objList = filter(this.data, item => item.sectionId === 'hGenre')
      return objList.length ? objList[0].items : []
    }

    async handleScroll(): Promise<void> {
      const elm: any = document.querySelector('.main-center')
      if (elm.scrollTop >= elm.scrollHeight - elm.offsetHeight && !this.isEnd) {
        this.query.page += 1
        await apiHome.getHome(this.query).then(res => {
          this.isEnd = !res.hasMore
          this.data = [...this.data, ...res.items]
        })
      }
    }
  }
</script>

<style scoped lang="scss">
  .z-home {
    width: 100%;
  }
</style>
