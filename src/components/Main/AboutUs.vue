<template>
  <fragment>
    <div :class="$style.aboutus">
      <div :class="$style.container">
        <div :class="$style.detail" v-bind:style="{ backgroundImage: 'url(' + MainImage + ')' }">
          <p :class="$style.title">CABLE GLANDS</p>
        </div>
        <div :class="$style.detail" v-bind:style="{ backgroundImage: 'url(' + MainImage2 + ')' }">
          <p :class="$style.title">
            <router-link to="/download">CIRCULAR CONNECTORS</router-link>
          </p>
        </div>
      </div>
      <div :class="$style.bigcategory" v-bind:style="{ backgroundImage: 'url(' + MainImage3 + ')' }">
        <p :class="$style.title">Heating equipment</p>
      </div>
    </div>
  </fragment>
</template>

<script>
import MainImage from '@/assets/category1.png'
import MainImage2 from '@/assets/category2.png'
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

  .container{
    display: flex;
    margin-top: 30px;
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

  .detail img {
    width: 52px;
  }

  .detail:not(:first-child) {
    margin-left: 50px;
  }

  .title{
    font-size: 18px;
    margin-top: 20px;
    position: absolute;
    left: 0px;
    top: 20px;
    color: white;
    background-color: #009ee3;
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

  .bigcategory:hover .title {
    background-color: #235CA2;
  }

  .content{
    font-size: 16px;
    margin-top: 24px;
  }
</style>
