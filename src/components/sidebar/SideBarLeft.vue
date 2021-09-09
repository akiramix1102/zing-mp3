<template>
  <div class="sb-left">
    <base-icon icon="logo-zing" class="icon-logo-zing" />
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator'
  import getRepository from '@/services'
  import HomeRepository from '@/services/repositories/home'
  const apiHome: HomeRepository = getRepository('home')
  @Component
  export default class SideBarLeft extends Vue {
    created(): void {
      const params = {
        page: 1
      }
      apiHome.getHome(params).then((res: any) => {
        console.log(res)
      })
    }
  }
</script>

<style scoped lang="scss">
  .sb-left {
    padding-top: 15px;
    .icon-logo-zing {
      padding: 0 25px;
    }
  }
</style>
