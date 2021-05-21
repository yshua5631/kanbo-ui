<template>
  <div class="product-detail">
    <div class="search-result"> 搜索结果: </div>
    <Collapse>
        <Panel v-for="item in searchResult" :key='item.productName'>
            {{item.productName}}
            <p test="content">{{item.productName}}</p>
        </Panel>
    </Collapse>
  </div>
</template>

<script>
import axios from 'axios'
import Fuse from 'fuse.js'
export default {
  name: 'product',
  data () {
    return {
      searchResult: []
    }
  },
  updated () {
    console.log('updated')
  },
  beforeupdate () {
    console.log('beforeupdate')
    axios.get('static/resource/product.json').then((data) => {
      const options = {keys: ['productName']}
      const fuse = new Fuse(data.data, options)
      const result = fuse.search(this.$route.params.key)
      this.searchResult = result
      console.log(fuse.search(this.$route.params.key))
      console.log(data)
    })
  },
  mounted () {
    console.log('mounted')
    axios.get('static/resource/product.json').then((data) => {
      const options = {keys: ['productName']}
      const fuse = new Fuse(data.data, options)
      const result = fuse.search(this.$route.params.key)
      this.searchResult = result
    })
  },
  watch: {
    $route: function () {
      axios.get('static/resource/product.json').then((data) => {
        const options = {keys: ['productName']}
        const fuse = new Fuse(data.data, options)
        const result = fuse.search(this.$route.params.key)
        this.searchResult = result
        console.log(fuse.search(this.$route.params.key))
        console.log(data)
      })
      console.log('watch1')
    }
  }
}
</script>

<style scoped>
  .product{
    position: relative;
    width: 234px;
    height: 234px;
    margin: 8px;
    border: 1px solid gray;
  }

  .search-result{
    font-size: 20px;
    margin-bottom: 20px;
  }

  .product-detail{
     padding: 40px;
  }

  .product:hover .title{
    color: red;
  }

  .product:hover .overlay{
    display: block;
  }

  .overlay{
    position: absolute;
    width: 100%;
    height: 168px;
    bottom: 0px;
    right: 0px;
    opacity: 0.4;
    display: none;
  }

  .title{
    font-size: 24px;
    min-height: 64px;
    background: #7394AD;
  }
  .content{
    font-size: 14px;
  }
</style>
