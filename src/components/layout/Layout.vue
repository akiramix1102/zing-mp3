<template>
  <el-container class="main-layout">
    <el-aside class="sidebar-left" style="width: 240px">
      <side-bar-left />
    </el-aside>
    <el-container class="main-content">
      <el-header class="be-flex main-header" style="height: 70px">
        <div class="display-block be-flex-item">top bar</div>
      </el-header>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
    <el-aside class="sidebar-right" style="width: 320px"> sidebar right </el-aside>
  </el-container>
</template>
<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator'
  import SideBarLeft from '../sidebar/SideBarLeft.vue'
  @Component({
    components: { SideBarLeft }
  })
  export default class Layout extends Vue {
    isLoading = true
    isDashboard = false
    async init(): Promise<void> {
      console.log('a')
    }
    created(): void {
      this.init()
    }
  }
</script>
<style lang="scss" scoped>
  .main-layout {
    position: relative;
    background-color: var(--background-color);
    height: 100vh;
    .sidebar-left {
      background-color: var(--background-sidebar-color);
    }
  }
</style>
