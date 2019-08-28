<template>
  <div class="main">
    <div class="container">
      <Slider />
      <Products />
    </div>
  </div>
</template>

<script>
  import Slider from '@/components/Main/Slider';
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
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 40px;
  }
  .container{
    width: 100%;
  }

  .product-container{
    height: 200px;
  }
</style>
