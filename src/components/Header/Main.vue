<template>
  <fragment>
    <header :class="$style.header">
      <div :class="$style.menu">
        <span :class="$style.item"> CAB </span>
        <span :class="$style.item"> ELECTRIC COMPONENTS </span>
        <span :class="$style.item"> BUILDING TECHNOLOGY </span>
        <span :class="$style.item"> CAB </span>
      </div>
      <div :class="$style.right">T:021-57487038</div>
    </header>
  </fragment>
</template>

<script>
export default {
  name: 'Header',
  components: {
  },
  methods: {
  },
  data () {
    return {
    }
  }
}
</script>

<style module>
  .header{
    min-height: 50px;
    font-size: 16px;
    background-color: #666;
    color: rgb(247, 247, 247);
    justify-content: center;
    display: flex;
    font-family: "Futura LT W01 Book", "Helvetica Neue", Helvetica, Arial, sans-serif;
  }
  .right{
    color: #BBCDDF;
    display: flex;
    align-items: center;
    padding-left: 20px;
    margin-left: 140px;
  }

  .menu {
    display: flex;
  }

  .item {
    font-size: 13px;
    padding: 13px 16px;
  }

  .item:hover {
    color: #009ee3;
    font-size: 13px;
    background-color: white;
  }
</style>
