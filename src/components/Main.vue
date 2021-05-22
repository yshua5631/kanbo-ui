<template>
  <fragment>
    <Header />
    <Footer />
  </fragment>
</template>

<script>
import Footer from '@/components/Footer/Main'
import Body from '@/components/Main/Main'
export default {
  name: 'Index',
  components: {
    Body,
    Footer
  },
  data () {
    return {
      msg: 'Main infomation'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
html {
  height: 100%;
  font-family: "Futura LT W01 Book", "Helvetica Neue", Helvetica, Arial, sans-serif;
}
</style>
