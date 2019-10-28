<template>
  <div>
    <a-menu v-model="current" mode="horizontal">
      <a-sub-menu>
        <span slot="title" class="submenu-title-wrapper">产品 <a-icon type="down" class="arrowfont" /></span>
        <a-menu-item key="setting:1">产品1</a-menu-item>
        <a-menu-item key="setting:2">产品2</a-menu-item>
      </a-sub-menu>
      <a-sub-menu>
        <span slot="title" class="submenu-title-wrapper">公司</span>
        <a-menu-item key="setting:1">公司简介1</a-menu-item>
        <a-menu-item key="setting:2">公司简介2</a-menu-item>
      </a-sub-menu>
      <a-menu-item key="service">
        服务
      </a-menu-item>
      <a-menu-item key="concat">
        联系方式
      </a-menu-item>
    </a-menu>
  </div>
</template>

<script>
// import
// define model
export default {
  name: 'Menu',
  components: {
  },
  data () {
    return {
      current: ['mail'],
    }
  }
}
</script>

<style scoped>
  .arrowfont{
    font-size: 12px;
  }
</style>
