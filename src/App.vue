<template>
  <Header />
  <router-view/>
  <Footer />
</template>

<script>
import Header from '@/components/Header/Main'
import Footer from '@/components/Footer/Main'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>

<style module>
.ricky{
  color: red;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
