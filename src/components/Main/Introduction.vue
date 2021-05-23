<template>
  <fragment>
    <div :class="$style.banner" v-bind:style="{ backgroundImage: 'url(' + Banner + ')' }">
      <fragment v-if="isDownload">
        <p :class="$style.title">侃博电气 安心连接</p>
        <p :class="$style.content">您身边的电缆密封保护和安全电气连接专家</p>
      </fragment>
      <fragment v-else>
        <p :class="$style.title">愿景</p>
        <p :class="$style.content">提供可靠的电缆密封紧固和电气连接产品及其方案，力争成为全球客户之首选；</p>
        <p :class="$style.title"> 策略</p>
        <p :class="$style.content">在所选领域持续改善、奋力创新，通过为客户提供安全、可靠、敏捷的供应链
  服务，寻求能够提供市场领先地位之础石；</p>
      </fragment>

    </div>
  </fragment>
</template>

<script>
import Banner from '@/assets/banner.jpeg'
import DownloadBanner from '@/assets/download-banner.jpeg'

export default {
  name: 'Introduction',
  components: {
  },
  methods: {
    getProduct () {
      return 'test introduction'
    }
  },
  data () {
    return {
      Banner : this.$route.path.includes('download') ? DownloadBanner : Banner,
      isDownload: this.$route.path.includes('download')
    }
  },
  mounted () {
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
    font-size: 24px;
    margin-top: 18px;
  }

  .content {
    font-size: 18px;
    margin-top: 10px;
    width: 400px;
    margin-top: 12px;
  }

  .banner {
    aspect-ratio: 3.72 / 1;
    background-size: cover;
    color: white;
    padding: 62px 40px 0 140px;
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
