<template>
  <header class="header">
    <div class="logo"></div>
    <div class="right">侃博电气（上海）有限公司  | Canbo Electric (Shanghai) Co.,Ltd.</div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
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
  }
  .logo{
    flex: 0 0 0px;
  }
  .right{
    background: #006ab3;
    color: #BBCDDF;
    flex: 1;
    display: flex;
    align-items: center;
    padding-left: 20px;
  }
</style>
