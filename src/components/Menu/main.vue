<template>
    <fragment>
      <div class="menu-search">
        <Menu class="menu" mode="horizontal" :theme="theme1" active-name="1">
            <Submenu name="1">
                <template slot="title">
                    产品
                </template>
                <MenuItem name="1-1"><router-link to="/ProductDetail">产品1</router-link></MenuItem>
                <MenuItem name="1-2">产品2</MenuItem>
            </Submenu>
            <Submenu name="2">
                <template slot="title">
                    公司
                </template>
                <MenuItem name="2-1">创新</MenuItem>
                <MenuItem name="2-2">历史</MenuItem>
            </Submenu>
            <Submenu name="3">
                <template slot="title">
                    联系我们
                </template>
                <MenuItem name="3-1">地址</MenuItem>
                <MenuItem name="3-2">如何发现我们</MenuItem>
            </Submenu>
        </Menu>
        <Input class="search"  @click.native="search" v-model="searchValue" @on-click="search" search enter-button placeholder="请输入搜索内容1" />
      </div>
    </fragment>
</template>

<script>
// import
// define model
import axios from 'axios'
import Fuse from 'fuse.js'

export default {
  name: 'Menu1',
  components: {
  },
  data () {
    return {
      current: ['mail'],
      searchValue: "",
      theme1: 'light'
    }
  },
  methods: {
    search: function(value){
      if(!this.searchValue){
        return;
      }
      this.$router.push({path: `/searchresult/${this.searchValue}`})
      console.log("search11")
    },
  }
}
</script>

<style scoped>
  .arrowfont{
    font-size: 12px;
  }

  .menu-search{
    display: flex;
    border-bottom: 1px solid #dcdee2;
    align-items: center;
    padding-right: 20px;
  }

  .menu{
    flex: auto;
  }

  .search{
    flex: 0 0 200px;
  }

  .ivu-menu-horizontal.ivu-menu-light:after {
    display: none;
  }
</style>
