<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
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
