<template>
  <header class="header">
    <div class="logo"></div>
    <div class="right">侃博电气（上海）有限公司  | Canbo Electric (Shanghai) Co.,Ltd.</div>
    <div class="lng-container" >
      <div class="lng" v-for='lng in lngs' :key='lng' @click='switchLanguage'>{{lng}}</div>
    </div>
  </header>
</template>

<script>
  export default {
    name: 'Header',
    methods: {
      switchLanguage: function(){
        console.log('switchLanguage');
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

<style scoped>
  .header{
    min-height: 75px;
    font-size: 24px;
    display: flex;
    box-shadow: 5px 5px 15px 5px #000000;
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
  .lng-container{
    display: flex;
    flex: 0 0 100px;
    justify-content: space-around;
    align-items: center;
    font-size: 20px;
  }

  .lng{
    cursor: pointer;
  }
</style>
