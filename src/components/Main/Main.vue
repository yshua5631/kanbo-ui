<template>
  <div class="main">
    <div class="container">
      <Slider />
      <div>
        <p class="welcome">欢迎来到坎博</p>
        <p class="introduction">坎博简介坎博简介坎博简介坎博简介坎博简介坎博简介坎博简介坎博简介坎博简介</p>
      </div>
      <Products />
    </div>
  </div>
</template>

<script>
  import Slider from '@/components/Main/Slider'
  import Products from '@/components/Main/Products';
export default {
  name: 'Main',
  components: {
    Slider,
    Products,
  },
  data () {
    return {
      name: 'Main'
    }
  }
}
</script>

<style scoped>
  .main{
    margin: 0px 200px;
    padding: 20px 0;
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 40px;
  }

  .welcome{
    font-size: 24px;
  }

  .introduction{
    font-size: 16px;
  }

  .container{
    width: 100%;
  }

  .product-container{
    height: 200px;
  }
</style>
