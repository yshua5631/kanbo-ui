<template>
  <fragment>
    <header :class="$style.header">
      <div :class="$style.logo"></div>
      <div :class="$style.right">侃博电气 (上海) 有限公司 | Canbo Electric (Shanghai) Co.,Ltd.</div>
      <div :class="$style.lngcontainer" >
        <div :class="$style.lng" v-for='lng in lngs' :key='lng' @click='switchLanguage'>{{lng}}</div>
      </div>
    </header>
    <Menu />
  </fragment>
</template>

<script>
import Menu from '@/components/Menu/main.vue'
export default {
  name: 'Header',
  components: {
    Menu
  },
  methods: {
    switchLanguage: function () {
      console.log('switchLanguage')
    }
  },
  data () {
    return {
      lngs: ['EN', 'CN'],
      name: 'Header'
    }
  }
}
</script>

<style module>
  .header{
    min-height: 75px;
    font-size: 24px;
    display: flex;
    background: #006ab3;
  }
  .logo{
    flex: 0 0 0px;
  }
  .right{
    color: #BBCDDF;
    flex: 1;
    display: flex;
    align-items: center;
    padding-left: 20px;
  }
  .lngcontainer{
    display: flex;
    color: #BBCDDF;
    flex: 0 0 100px;
    justify-content: space-around;
    align-items: center;
    font-size: 20px;
  }

  .lng{
    cursor: pointer;
  }
</style>
