<template>
  <div class="main">
    <Slider />
  </div>
</template>

<script>
  import Slider from '@/components/Main/Slider';
  export default {
    name: 'Main',
    components: {
      Slider,
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
    height: 100px;
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 40px;
  }
</style>
