<template>
  <fragment>
    <Introduction />
    <div :class="$style.download">
      <p :class="$style.title"> 资料样本和认证 </p>
      <div :class="$style.list">
        <a :class="$style.item" href="https://share.weiyun.com/bD2loSlV">
          <img src="@/assets/download/d1.jpeg" alt="download">
          <p :class="$style.description"> 工厂认证和产品认证 </p>
        </a>
        <a :class="$style.item" href="https://share.weiyun.com/89IF7jiL">
          <img src="@/assets/download/d2.jpeg" alt="download">
          <p :class="$style.description"> 防爆连接器 </p>
        </a>
        <a :class="$style.item" href="https://share.weiyun.com/89IF7jiL">
          <img src="@/assets/download/d3.jpeg" alt="download">
          <p :class="$style.description"> 防爆接头和机箱 </p>
        </a>
      </div>
    </div>
  </fragment>
</template>

<script>
import Introduction from '@/components/Main/Introduction'

export default {
  name: 'Header',
  components: {
    Introduction
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
  .download{
    padding: 64px 80px;
    font-size: 16px;
    background: #e1eaee;
    justify-content: center;
    font-family: "Futura LT W01 Book", "Helvetica Neue", Helvetica, Arial, sans-serif;
  }

  .title {
    font-size: 30px;
  }

  .item:not(:first-child) {
    margin-left: 36px;
  }

  .item {
    text-decoration: none;
  }

  .item img {
    width: 148px;
  }

  .list {
    margin-top: 36px;
    display: flex;
    text-decoration: none;
  }

  .description {
    margin-top:  12px;
  }
</style>
