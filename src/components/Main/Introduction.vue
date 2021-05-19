<template>
  <fragment>
    <div :class="$style.banner" v-bind:style="{ backgroundImage: 'url(' + Banner + ')' }">
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
