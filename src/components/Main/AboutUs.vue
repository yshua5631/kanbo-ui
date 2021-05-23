<template>
  <fragment>
    <div :class="$style.aboutus">
      <div :class="$style.container">
        <div :class="$style.detail" v-bind:style="{ backgroundImage: 'url(' + MainImage + ')' }">
          <div :class="$style.title">
            普通工业用产品
            <p :class="$style.small">- 电缆接头</p>
            <p :class="$style.small">- 工业机箱</p>
            <p :class="$style.small">- 穿线法兰板</p>
            <p :class="$style.small">- 穿线保护软管</p>
          </div>
        </div>
        <div :class="$style.detail" v-bind:style="{ backgroundImage: 'url(' + MainImage2 + ')' }">
          <div :class="$style.title">
            <router-link to="/download">危险区域用产品</router-link>
            <p :class="$style.small">- 防爆机箱</p>
            <p :class="$style.small">- 防爆连接器</p>
            <p :class="$style.small">- 防爆电缆接头</p>
            <p :class="$style.small">- 防爆配电装置</p>
          </div>
        </div>
      </div>
      <div :class="$style.bigcategory" v-bind:style="{ backgroundImage: 'url(' + MainImage3 + ')' }">
        <p :class="$style.title">电气集成和工程服务</p>
      </div>
    </div>
  </fragment>
</template>

<script>
import MainImage from '@/assets/category1.jpeg'
import MainImage2 from '@/assets/category2.jpeg'
import MainImage3 from '@/assets/category3.jpeg'
import Download from '@/assets/download.svg'

export default {
  name: 'AboutUs',
  components: {
  },
  methods: {
  },
  data () {
    return {
      MainImage,
      MainImage2,
      MainImage3,
      Download
    }
  }
}
</script>

<style module>
  .aboutus{
    margin-top: 100px;
    margin: 100px 150px 0 150px;
    font-weight: 300;
    font-family: "Futura LT W01 Book","Helvetica Neue",Helvetica,Arial,sans-serif;
  }

  .name {
    text-align: center;
    font-size: 26px;
  }

  .small{
    font-size: 12px;
    margin-top: 10px;
    display: none;
  }

  .container{
    margin-top: 30px;
    display: flex;
  }

  .detail {
    flex: 1 1 30px;
    padding: 72px 32px;
    background-size: cover;
    color: black;
    text-align: center;
    height: 196px;
    position: relative;
  }

  .bigcategory {
    margin-top: 50px;
    height: 400px;
    background-size: cover;
    position: relative;
  }

  .bigcategory .title {
    width: 240px;
  }

  .detail img {
    width: 52px;
  }

  .detail:not(:first-child) {
    margin-left: 50px;
  }

  .title{
    font-size: 18px;
    margin-top: 20px;
    text-align: left;
    position: absolute;
    left: 0px;
    top: 20px;
    color: white;
    width: 186px;
    background-color: rgba(0, 158, 227,0.8);
    padding: 9px 28px;
  }

  .title a {
    text-decoration: none;
    color: white;
    background: none;
  }

  .detail:hover .title {
    background-color: #235CA2;
  }

  .detail:hover .small {
    display: block;
  }

  .bigcategory:hover .title {
    background-color: #235CA2;
  }

  .content{
    font-size: 16px;
    margin-top: 24px;
  }
</style>
