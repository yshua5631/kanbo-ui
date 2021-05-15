<template>
  <div class="product-detail">
    <p class="name">电缆</p>
    <div class="product-view">
      <div class="product-slide">
          <swiper :options="swiperOption" ref="mySwiper" class="swiper">
          <!-- slides -->
          <swiper-slide>
            <img src="@/assets/imgs/main1.jpg" />
          </swiper-slide>
          <swiper-slide>
            <img src="@/assets/imgs/main1.jpg" />
          </swiper-slide>
          <swiper-slide><img src="@/assets/imgs/main1.jpg" /></swiper-slide>
          <swiper-slide><img src="@/assets/imgs/main1.jpg" /></swiper-slide>
          <swiper-slide><img src="@/assets/imgs/main1.jpg" /></swiper-slide>
          <swiper-slide><img src="@/assets/imgs/main1.jpg" /></swiper-slide>
          <swiper-slide><img src="@/assets/imgs/main1.jpg" /></swiper-slide>
          <swiper-slide><img src="@/assets/imgs/main1.jpg" /></swiper-slide>
          <!-- Optional controls -->
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
      </div>
      <div class="product-feature">
        <Table :columns="columns2" :data="data2"></Table>
      </div>
    </div>
    <div class="product-package">
      <Table :columns="columns1" :data="data1"></Table>
    </div>
  </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'product',
  components: {
    swiper,
    'swiper-slide': swiperSlide
  },
  data () {
    return {
      value2: '1',
      columns1: [
        {
          title: 'No',
          key: 'no'
        },
        {
          title: 'Type',
          key: 'type'
        },
        {
          title: 'Size',
          key: 'size'
        }
      ],
      data1: [
        {
          no: '100000',
          type: 'NMSKV1/4',
          size: '3mm-7mm'
        }
      ],
      columns2: [
        {
          title: 'feature',
          key: 'feature'
        },
        {
          title: 'param',
          key: 'param'
        }
      ],
      data2: [
        {
          feature: '防护等级',
          param: 'IP68 / IP69'
        }, {
          feature: '温度范围',
          param: '40-100'
        }
      ],
      swiperOption: {
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      }
    }
  },
  computed: {
    swiper () {
      return this.$refs.mySwiper.swiper
    }
  }
}
</script>

<style scoped>
.name{
  font-size: 25px;
  font-weight: 500;
}

.product-detail{
  padding: 100px;
}

.product-view{
  display: flex;
  height: 300px;
}

.product-slide{
  width: 400px;
}

.product-feature{
  flex: 1 0 50px;
}

.product-package{
  height: 100px;
}

.swiper{
  height: 400px;
}

.swiper img{
  height: 300px;
  width: 170px;
}

.swiper-slide{
  text-align: center;
}
</style>
