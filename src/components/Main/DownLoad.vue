<template>
  <fragment>
    <Introduction />
    <div :class="$style.download">
      <p :class="$style.title"> 资料样本和认证 </p>
      <div :class="$style.list">
        <a :class="$style.item" href="http://www.gov.cn/zhengce/pdfFile/1992muLu.pdf">
          <img src="@/assets/download/d1.jpeg" alt="download">
          <p :class="$style.description"> VariaPro电缆接头 </p>
        </a>
        <a :class="$style.item">
          <img src="@/assets/download/d1.jpeg" alt="download">
          <p :class="$style.description"> JAEGER样本 </p>
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
