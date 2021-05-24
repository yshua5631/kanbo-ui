<template>
  <fragment>
    <Introduction />
    <div :class="$style.download">
      <p :class="$style.title"> 资料样本和认证 </p>
      <div :class="$style.list">
        <a :class="$style.item" href="https://kanbo.oss-cn-shanghai.aliyuncs.com/ISO%E8%AE%A4%E8%AF%81%E5%92%8C%E9%98%B2%E7%88%86%E5%90%88%E6%A0%BC%E8%AF%81.pdf">
          <img src="@/assets/download/d1.jpeg" alt="download">
          <p :class="$style.description"> 工厂认证和产品认证 </p>
        </a>
        <a :class="$style.item" href="https://kanbo.oss-cn-shanghai.aliyuncs.com/%E4%BE%83%E5%8D%9A%E7%94%B5%E6%B0%94-%E9%98%B2%E7%88%86%E8%BF%9E%E6%8E%A5%E5%99%A8-%E9%80%89%E5%9E%8B%E6%89%8B%E5%86%8C2021.pdf">
          <img src="@/assets/download/d2.jpeg" alt="download">
          <p :class="$style.description"> 防爆连接器 </p>
        </a>
        <a :class="$style.item">
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
