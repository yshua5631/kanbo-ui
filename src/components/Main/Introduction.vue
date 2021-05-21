<template>
  <fragment>
    <div :class="$style.banner" v-bind:style="{ backgroundImage: 'url(' + Banner + ')' }">
      <p :class="$style.bigtitle">提供技术服务，我们是认真的</p>
      <p :class="$style.smalltitle">网站建设、APP开发、移动开发等，我们提供PC+手机+微信+APP全方位的技术服务</p>
      <p :class="$style.smalltitle">网站改版、SEO优化、系统运维、应用功能优化等，我们提供一对一私人定制化的技术开发</p>
      <p :class="$style.smalltitle">官网建设、网上商城、互动营销、内外信息网、物联网云端建设等，我们提供各领域专业的解决方案</p>
    </div>
  </fragment>
</template>

<script>
import Banner from '@/assets/banner.jpeg'
export default {
  name: 'Introduction',
  components: {
  },
  methods: {
  },
  data () {
    return {
      Banner
    }
  }
}
</script>

<style module>
  .introduction{
    min-height: 50px;
    font-size: 26px;
    display: flex;
    color: black;
    justify-content: center;
    align-items: center;
    position: relative;
  }
  .telephone{
    font-size: 18px;
    position: absolute;
    right: 0px;
  }

  .banner {
    height: 450px;
    background-size: cover;
    color: white;
    padding: 120px 40px 0 40px;
  }

  .bigtitle{
    font-size: 60px;
  }

  .smalltitle {
    font-size: 16px;
    margin-top: 14px;
  }
  .banner img{
    width: 100%;
  }

  .welcome{
    font-size: 16px;
    text-align: center;
    margin-top: 50px;
  }
</style>
