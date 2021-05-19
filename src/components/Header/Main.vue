<template>
  <fragment>
    <header :class="$style.header">
      <div :class="$style.right">侃博电气网站更新中！Sorry ！ Our Website under construction！请联系 T:021-57487038</div>
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
    display: none;
    background: #000;
    color: rgb(247, 247, 247);
    justify-content: center;
  }
  .right{
    color: #BBCDDF;
    display: flex;
    align-items: center;
    padding-left: 20px;
  }
</style>
