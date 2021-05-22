<template>
  <fragment>
    <header :class="$style.header">
      <div :class="$style.logo">
        <img src="@/assets/logo.png" alt="logo"/>
      </div>
      <div :class="$style.menu">
        <span :class="$style.item"> 电缆密封保护技术</span>
        <span :class="$style.item"> 电气安全连接技术 </span>
      </div>
      <div :class="$style.right">
        <span> +86 137 6108 8209 </span>
        <span :class="$style.email"> info@cab-electric.com </span>
      </div>
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
    font-size: 16px;
    background-color: white;
    color: black;
    justify-content: center;
    display: flex;
    padding: 10px 62px;
    justify-content: space-between;
    align-items: center;
    font-family: "Futura LT W01 Book", "Helvetica Neue", Helvetica, Arial, sans-serif;
  }

  .logo img {
    height: 32px;
  }

  .right{
    color: black;
    display: flex;
    align-items: center;
    padding-left: 20px;
    margin-left: 140px;
    font-size: 13px;
  }

  .menu {
    display: flex;
  }

  .email {
    margin-left: 10px;
  }

  .item {
    font-size: 13px;
    padding: 15px 16px;
    text-transform: lowercase;
  }

  .item img {
    height: 10px;
  }

  .item:hover {
    color: #009ee3;
    font-size: 13px;
    background-color: white;
  }
</style>
