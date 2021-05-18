<template>
  <fragment>
    <div :class="$style.introduction">
      <p :class="$style.name"> 侃博电气 </p>
      <p :class="$style.telephone"> 021-57487038 </p>
    </div>
    <div :class="$style.banner">
      <img src="@/assets/main1.jpeg"  alt="banner"/>
    </div>
    <p :class="$style.welcome"> welcome to visit cab electric </p>
  </fragment>
</template>

<script>
export default {
  name: 'Header',
  components: {
  },
  methods: {
  },
  data () {
    return {
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
    margin-top: 40px;
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
