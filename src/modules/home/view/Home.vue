<template>
  <div class="z-home">
    <div class="slider-banner">
      <z-carousel :banner="banner" />
    </div>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator'
  import ZCarousel from '@/components/carousel/ZCarousel.vue'
  import { IQuery } from '@/interface'
  import { filter } from 'lodash'
  import getRepository from '@/services'
  import HomeRepository from '@/services/repositories/home'
  const apiHome: HomeRepository = getRepository('home')
  @Component({ components: { ZCarousel } })
  export default class Home extends Vue {
    banner: Record<string, any> = {}

    query: IQuery = {
      page: 1
    }

    created(): void {
      apiHome.getHome(this.query).then((res: any) => {
        console.log(res)
        this.banner = filter(res.items, item => item.sectionType === 'banner')[0]
      })
    }
  }
</script>

<style scoped></style>
