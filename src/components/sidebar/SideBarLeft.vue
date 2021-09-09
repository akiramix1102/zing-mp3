<template>
  <div class="sb-left">
    <base-icon icon="logo-zing" class="icon-logo-zing" />
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator'

  @Component
  export default class SideBarLeft extends Vue {}
</script>

<style scoped lang="scss">
  .sb-left {
    padding-top: 15px;
    .icon-logo-zing {
      padding: 0 25px;
    }
  }
</style>
