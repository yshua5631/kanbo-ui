<template>
  <div class="product-detail">
    <div> Search Result: </div>
    <Collapse>
        <Panel v-for="item in searchResult" :key='item.productName'>
            {{item.productName}}
            <p slot="content">{{item.productName}}</p>
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
  mounted() {
    console.log(this.$route.params.key)
    axios.get('static/resource/product.json').then((data)=>{
      const options = {keys: ['productName']};
      const fuse = new Fuse(data.data, options);
      const result = fuse.search(this.$route.params.key);
      this.searchResult = result;
      console.log(fuse.search(this.$route.params.key));
      console.log(data);
    })
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
