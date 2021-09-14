<template>
  <div class="z-home" id="z-home">
    <!-- carousel -->
    <div class="slider-banner">
      <z-carousel :banner="banner" />
    </div>
    <div class="mt-2 mb-3 suggest-list">
      <suggest-list :listItem="suggestList.items" title="Gợi Ý Cho Hôm Nay" :isCarousel="true" />
    </div>
    <div class="mb-3 suggest-list">
      <suggest-list :listItem="selectTodayList.items" title="Lựa chọn hôm nay" :isCarousel="false" />
    </div>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator'
  import ZCarousel from '@/components/carousel/ZCarousel.vue'
  import SuggestList from '../components/SuggestList.vue'
  import { IQuery } from '@/interface'
  import { filter } from 'lodash'
  import getRepository from '@/services'
  import HomeRepository from '@/services/repositories/home'
  const apiHome: HomeRepository = getRepository('home')
  @Component({ components: { ZCarousel, SuggestList } })
  export default class Home extends Vue {
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
        this.banner = filter(res.items, item => item.sectionType === 'banner')[0]
        this.suggestList = filter(res.items, item => item.sectionId === 'hSuggestPl')[0]
        this.selectTodayList = filter(res.items, item => item.sectionId === 'hAutoTheme1')[0]
      })
    }

    mounted(): void {
      const elm: any = document.querySelector('.main-center')
      console.log(elm)

      setTimeout(() => {
        elm.addEventListener('scroll', this.handleScroll)
      }, 1000)
    }

    handleScroll(): void {
      const elm: any = document.querySelector('.main-center')
      if (elm.scrollTop >= elm.scrollHeight - elm.offsetHeight && !this.isEnd) {
        this.query.page += 1
        console.log('end scroll')
      }
    }
  }
</script>

<style scoped lang="scss">
  .z-home {
    width: 100%;
  }
</style>
