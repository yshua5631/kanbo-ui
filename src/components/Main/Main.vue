<template>
  <div class="main">
    <div class="container">
      <Introduction />
      <AboutUs />
    </div>
  </div>
</template>

<script>
import Slider from '@/components/Main/Slider'
import Products from '@/components/Main/Products'
import Introduction from '@/components/Main/Introduction'
import AboutUs from '@/components/Main/AboutUs'

export default {
  name: 'Main',
  components: {
    Slider,
    Products,
    Introduction,
    AboutUs
  },
  data () {
    return {
      name: 'Main'
    }
  }
}
</script>

<style scope>
  .main{
    margin: 0px 150px;
    padding: 40px 0;
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
