<template>
  <footer class="footer">
    <div>
      <div>
        <span>公司地址： </span>
        <span>中国上海市奉贤区金碧路585号2幢1层（Building 1 Floor,No.585 Jinbi Road,Fengxian Distruct,Shanghai P. R. China.）</span>
      </div>
      <div>
        <span>Tel:021-57487038</span>
      </div>
      <div>
        <span>Fax:021-57487058</span>
      </div>
      <div>
        <span>Email:info@cab-electric.com</span>
      </div>
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
    min-height: 100px;
    background: #006ab3;
    padding: 50px;
    color: #BBCDDF
  }
</style>
