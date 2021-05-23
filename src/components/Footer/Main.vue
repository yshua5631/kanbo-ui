<template>
  <footer :class="$style.footer">
    <div :class="$style.left">
      <div :class="$style.content">
        <p :class="$style.title">产品方案</p>
        <p :class="$style.item">电缆接头</p>
        <p :class="$style.item">穿线保护软管</p>
        <p :class="$style.item">工业机箱</p>
        <p :class="$style.item">防爆机箱</p>
        <p :class="$style.item">防爆连接管</p>
        <p :class="$style.item">防爆机箱和配电装置</p>
      </div>
      <div :class="$style.content">
        <p :class="$style.title">安装视频</p>
        <p :class="$style.item">电缆接头</p>
        <p :class="$style.item">穿线保护软管</p>
        <p :class="$style.item">防爆连接器</p>
      </div>
      <div :class="$style.content">
        <p :class="$style.title">资源下载</p>
        <p :class="$style.item">资料样本</p>
        <p :class="$style.item">认证信息</p>
      </div>
      <div :class="$style.content">
        <p :class="$style.title">新闻资讯</p>
        <p :class="$style.item">新闻资讯</p>
        <p :class="$style.item">展会展示</p>
      </div>
      <div :class="$style.content">
        <p :class="$style.title">关于我们</p>
        <p :class="$style.item">公司介绍</p>
        <p :class="$style.item">在线留言</p>
      </div>
    </div>
    <div :class="$style.right">
      <div :class="$style.content">
        <p :class="$style.title">联系我们CONTACT</p>
        <p :class="$style.item">联系电话: 021-57487038 / 13761088209</p>
        <p :class="$style.item">电子邮箱: info@cab-electric.com</p>
        <p :class="$style.item">公司地址: 中国上海市奉贤区金碧路585号2幢1层</p>
      </div>
      <div :class="$style.copyright">
        <a target="_blank" href="http://beian.miit.gov.cn" style="color: #BBCDDF;">沪ICP备19026354号</a>
      </div>
    </div>
  </footer>
</template>

<script>
import 'reset.css'
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
    font-family: "Futura LT W01 Medium","Helvetica Neue",Helvetica,Arial,sans-serif;
    display: flex;
    justify-content: space-between;
    background-color: #333;
    padding: 40px 136px 40px 90px;
    color: #BBCDDF
  }

  .title {
    font-size: 14px;
    color: #999;
    margin-bottom: 10px;
    font-family: "Futura LT W01 Medium","Helvetica Neue",Helvetica,Arial,sans-serif;
  }

  .item {
    color: #fff;
    font-size: 14px;
    line-height: 20px;
    font-family: "Futura LT W01 Medium","Helvetica Neue",Helvetica,Arial,sans-serif;
  }

  .left {
    display: flex;
  }

  .left .content:not(.first-child) {
    margin-left: 50px;
  }
  .item:hover{
    color: #009ee3;
  }

  .copyright {
    margin-top: 30px;
    font-size: 13px;
  }
</style>
