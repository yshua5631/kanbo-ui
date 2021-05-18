<template>
  <fragment>
    <div :class="$style.aboutus">
      <p :class="$style.name"> 关于我们 </p>
      <div :class="$style.container">
        <div :class="$style.detail" v-bind:style="{ backgroundImage: 'url(' + MainImage + ')' }">
          <p :class="$style.title">开关&连接器......</p>
          <p :class="$style.content">按钮开关 隔离开关 转换开关 MCB  RCCB 刀熔开关 接线端子</p>
        </div>
        <div :class="$style.detail" v-bind:style="{ backgroundImage: 'url(' + MainImage2 + ')' }">
          <p :class="$style.title">机柜附件......</p>
          <p :class="$style.content">格兰头 穿线板 风扇 温控器 母线系统</p>
        </div>
        <div :class="$style.detail" v-bind:style="{ backgroundImage: 'url(' + MainImage + ')' }">
          <p :class="$style.title">配线器材&工具......</p>
          <p :class="$style.content">冷压端子，标识系统，电气测试附件，剪线工具，剥线工具压接工具。</p>
        </div>
      </div>
    </div>
  </fragment>
</template>

<script>
import MainImage from '@/assets/main.jpeg'
import MainImage2 from '@/assets/main2.jpeg'

export default {
  name: 'AboutUs',
  components: {
  },
  methods: {
  },
  data () {
    return {
      MainImage,
      MainImage2
    }
  }
}
</script>

<style module>
  .aboutus{
    position: relative;
    margin-top: 100px;
  }

  .name {
    text-align: center;
    font-size: 26px;
  }

  .container{
    display: flex;
    margin-top: 30px;
  }

  .detail {
    flex: 1 1 30px;
    height: 339px;
    padding: 72px 32px;
    background-size: cover;
    color: white;
    filter: brightness(0.9);
  }

  .detail:not(:first-child) {
    margin-left: 2px;
  }

  .title{
    font-size: 22px;
  }

  .content{
    font-size: 16px;
    margin-top: 24px;
  }
</style>
