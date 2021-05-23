<template>
  <fragment>
    <Introduction />
    <div :class="$style.download">
      <p :class="$style.title"> 资料样本和认证 </p>
      <div :class="$style.list">
        <a :class="$style.item" href="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/7f4886b8-f9e0-4342-b832-51ddc1af25fc/ISO.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210523T110219Z&X-Amz-Expires=86400&X-Amz-Signature=2d5098ea3fe9ffdfb2155aa3c1258ef789987a32958902207f5e189a43739100&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22ISO%25E8%25AE%25A4%25E8%25AF%2581%25E5%2592%258C%25E9%2598%25B2%25E7%2588%2586%25E5%2590%2588%25E6%25A0%25BC%25E8%25AF%2581.pdf%22">
          <img src="@/assets/download/d1.jpeg" alt="download">
          <p :class="$style.description"> 工厂认证和产品认证 </p>
        </a>
        <a :class="$style.item" href="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/75358b7d-0b37-4721-8b1d-bdb6aa731ed8/--2021.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210523T110120Z&X-Amz-Expires=86400&X-Amz-Signature=b6c789845d62c63709e2f4f4f369fa3fb0c987eb21bf26c6d09e6d5036b884d5&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22%25E4%25BE%2583%25E5%258D%259A%25E7%2594%25B5%25E6%25B0%2594-%25E9%2598%25B2%25E7%2588%2586%25E8%25BF%259E%25E6%258E%25A5%25E5%2599%25A8-%25E9%2580%2589%25E5%259E%258B%25E6%2589%258B%25E5%2586%258C2021.pdf%22">
          <img src="@/assets/download/d2.jpeg" alt="download">
          <p :class="$style.description"> 防爆连接器 </p>
        </a>
        <a :class="$style.item" href="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/75358b7d-0b37-4721-8b1d-bdb6aa731ed8/--2021.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210523T110120Z&X-Amz-Expires=86400&X-Amz-Signature=b6c789845d62c63709e2f4f4f369fa3fb0c987eb21bf26c6d09e6d5036b884d5&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22%25E4%25BE%2583%25E5%258D%259A%25E7%2594%25B5%25E6%25B0%2594-%25E9%2598%25B2%25E7%2588%2586%25E8%25BF%259E%25E6%258E%25A5%25E5%2599%25A8-%25E9%2580%2589%25E5%259E%258B%25E6%2589%258B%25E5%2586%258C2021.pdf%22">
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
