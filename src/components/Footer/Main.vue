<template>
  <footer class="footer">
    <div>
      <span>公司地址： </span>
      <span>中国上海市奉贤区金碧路585号2幢1层（Building 1 Floor,No.585 Jinbi Road,Fengxian Distruct,Shanghai P. R. China.）</span>
    </div>
  </footer>
</template>

<script>
  export default {
    name: 'Footer',
    data () {
      return {
        name: 'Footer'
      }
    }
  }
</script>

<style scoped>
  .footer{
    display: flex;
    align-items: center;
    height: 100px;
    background: #006ab3;
    padding: 50px;
    color: #BBCDDF
  }
</style>
