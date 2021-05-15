<template>
  <div id="app">
    <app-header />
    <router-view/>
    <app-footer />
  </div>
</template>

<script>
import Header from '@/components/Header/Main'
import Footer from '@/components/Footer/Main'
export default {
  name: 'App',
  components: {
    'app-header': Header,
    'app-footer': Footer
  }
}
</script>

<style>
#app {
  color: #2c3e50;
  height: 100%;
  display: flex;
  flex-direction: column;
}
html, body{
  height: 100%;
}
</style>
