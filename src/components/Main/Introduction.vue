<template>
  <fragment>
    <div :class="$style.banner" v-bind:style="{ backgroundImage: 'url(' + Banner + ')' }">
      <p :class="$style.title">愿景</p>
      <p :class="$style.content">提供可靠的电缆密封紧固和电气连接产品及其方案，力争成为全球客户之首选；</p>
      <p :class="$style.title"> 策略</p>
      <p :class="$style.content">在所选领域持续改善、奋力创新，通过为客户提供安全、可靠、敏捷的供应链
服务，寻求能够提供市场领先地位之础石；</p>
      <p></p>
    </div>
  </fragment>
</template>

<script>
import Banner from '@/assets/logo1.jpeg'
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

  .title {
    font-size: 29px;
    margin-top: 18px;
  }

  .content {
    font-size: 18px;
    margin-top: 10px;
    width: 400px;
    margin-top: 12px;
  }

  .banner {
    height: 354px;
    background-size: cover;
    color: white;
    padding: 62px 40px 0 62px;
    font-weight: 300;
    font-family: "Futura LT W01 Book","Helvetica Neue",Helvetica,Arial,sans-serif;
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
