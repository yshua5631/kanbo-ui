<template>
  <footer :class="$style.footer">
    <div>
      <div>
        <span>联系电话: 021-57487038</span>
      </div>
      <div>
        <span>传真: 021-57487058</span>
      </div>
      <div>
        <span>电子邮箱: info@cab-electric.com</span>
      </div>
      <div>
        <span>公司地址:</span>
        <span>中国上海市奉贤区金碧路585号2幢1层</span>
      </div>
      <div>
        <a target="_blank" href="http://beian.miit.gov.cn" style="color: #BBCDDF;">沪ICP备19026354号</a>
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

<style module>
  .footer{
    display: flex;
    align-items: center;
    background: #006ab3;
    padding: 20px 30px;
    color: #BBCDDF
  }
</style>
