<template>
  <swiper :options="swiperOption" ref="mySwiper" class="swiper">
    <!-- slides -->
    <swiper-slide>
      <img src="@/assets/main1.jpeg" />
    </swiper-slide>
    <swiper-slide>
      <img src="@/assets/main1.jpeg" />
    </swiper-slide>
    <swiper-slide><img src="@/assets/main1.jpeg" /></swiper-slide>
    <swiper-slide><img src="@/assets/main1.jpeg" /></swiper-slide>
    <swiper-slide><img src="@/assets/main1.jpeg" /></swiper-slide>
    <swiper-slide><img src="@/assets/main1.jpeg" /></swiper-slide>
    <swiper-slide><img src="@/assets/main1.jpeg" /></swiper-slide>
    <swiper-slide><img src="@/assets/main1.jpeg" /></swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
  </swiper>
</template>

<script>
  import 'swiper/dist/css/swiper.css'
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  export default {
    name: 'Slider',
    components: {
      swiper,
      'swiper-slide': swiperSlide,
    },
    data () {
      return {
        name: "test",
        swiperOption: {
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
        }
      };
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper;
      }
    },
    mounted() {
      //this.swiper.slideTo(3, 1000, false);
    }
  }
</script>

<style>
  .swiper{
    height: 400px;
  }

  .swiper img{
    height: 400px;
    width: 795px;
  }

  .swiper-slide{
    text-align: center;
  }
</style>
