<template>
  <el-container class="main-layout">
    <router-view />
  </el-container>
</template>
<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator'
  import { namespace } from 'vuex-class'

  @Component({
    components: {}
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
    .main-header {
      border-bottom: 1px solid var(--be-border-color);
      justify-content: flex-end;
    }
    .dashboard {
      border-bottom: none;
      background-color: #fafafa;
    }
    .customer {
      background-color: #fafafa;
    }
  }
</style>
