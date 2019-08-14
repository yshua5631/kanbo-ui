<template>
  <div>
    <Header />
    <div class="hello">
      <h1>{{ msg }}</h1>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header/Main';
import Footer from '@/components/Footer/Main';
import Main from '@/components/Main/Main';
export default {
  name: 'Main',
  components: {
    Header,
    Main,
    Footer,
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
.hello {
  background: gray;
}
</style>
