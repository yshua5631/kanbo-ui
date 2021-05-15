<template>
  <div class="container">
    <Product />
    <Product />
    <Product />
    <Product />
  </div>
</template>

<script>
import Product from '@/components/Main/Product'
export default {
  name: 'Products',
  components: {
    Product,
  },
  data () {
    return {
      name: 'Products'
    }
  }
}
</script>

<style scoped>
  .container{
    width: 100%;
    position: relative;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    border: 1px solid gray;
  }
</style>
