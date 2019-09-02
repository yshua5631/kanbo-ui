<template>
  <div class="product">
    <div class="title">
      cable title
    </div>
    <div class="content">
      cable content
    </div>
    <div class="overlay">
      overlay
    </div>
  </div>
</template>

<script>
export default {
  name: 'product',
  data () {
    return {}
  }
}
</script>

<style scoped>
  .product{
    position: relative;
    width: 234px;
    height: 234px;
    margin: 8px;
    border: 1px solid gray;
  }

  .product:hover .title{
    color: red;
  }

  .product:hover .overlay{
    display: block;
  }

  .overlay{
    position: absolute;
    width: 100%;
    height: 168px;
    bottom: 0px;
    right: 0px;
    opacity: 0.4;
    display: none;
  }

  .title{
    font-size: 24px;
    min-height: 64px;
    background: #7394AD;
  }
  .content{
    font-size: 14px;
  }
</style>
