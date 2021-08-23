<template>
  <div class="home">
    <!-- visual banner -->
    <div class="visual">
      <div class="swiper-container swiper-no-swiping">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(item, key) in visual" :key="key">
            <router-link :to="item.url">
              <img :src="item.img" :alt="item.title" class="full_size" />
            </router-link>
          </div>
        </div>
      </div>
      <div class="swiper_control">
        <button class="sw_prev" @click="slidePrev()">
          <span class="sr_only">이전</span>
          <fa icon="chevron-circle-left" />
        </button>
        <button class="sw_prev" @click="slideAutoPlay()">
          <template v-if="!slideAuto">
            <span class="sr_only">자동</span>
            <fa icon="play-circle" />
          </template>
          <template v-else>
            <span class="sr_only">정지</span>
          <fa icon="pause-circle" />
          </template>
        </button>
        <button class="sw_next" @click="slideNext()">
          <span class="sr_only">다음</span>
          <fa icon="chevron-circle-right" />
        </button>
      </div>
    </div>
    <!-- // visual banner -->
    <div id="main">
      <div class="container">
        <!-- tab -->
        <ul class="tab">
          <li class="on">
            <a href="#">공지사항</a>
            <div class="tab_cont">
              <ul>
                <li><a href="#">공지사항1 제목입니다.</a></li>
                <li><a href="#">공지사항 2 제목입니다.</a></li>
                <li><a href="#">공지사항 제목입니다.</a></li>
                <li><a href="#">공지사항 제목입니다.</a></li>
              </ul>
            </div>
          </li>
          <li>
            <a href="#">뉴스</a>
            <div class="tab_cont">
              <ul>
                <li><a href="#">뉴스 제목입니다.</a></li>
                <li><a href="#">뉴스 제목입니다.</a></li>
                <li><a href="#">뉴스 제목입니다.</a></li>
                <li><a href="#">뉴스 제목입니다.</a></li>
              </ul>
            </div>
          </li>
          <li>
            <a href="#">FAQ</a>
            <div class="tab_cont">
              <ul>
                <li><a href="#">FAQ 제목입니다.</a></li>
                <li><a href="#">FAQ 제목입니다.</a></li>
                <li><a href="#">FAQ 제목입니다.</a></li>
                <li><a href="#">FAQ 제목입니다.</a></li>
              </ul>
            </div>
          </li>
        </ul>
        <!-- // tab -->

        <!-- 최신영화 -->
        <div class="list">
          
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import * as api from '@/store/api';

export default {
  name: 'Home',
  data(){
    return {
      visual:[
        { title: '1111', img: '/cdn/main/parallax-1.jpg', url: '/parallax'},
        { title: '2222', img: '/cdn/main/parallax-2.jpg', url: '/'},
        { title: '3333', img: '/cdn/main/parallax-3.jpg', url: '/'},
        { title: '4444', img: '/cdn/main/parallax-4.jpg', url: '/'}
      ],
      defaultSwiper: null,
      slideAuto:true,
      topRated:null
    }
  },
  created(){
    api.movies('/top_rated').then( res => {
      this.topRated = res.data.resualt
    }).catch( err => {
      console.log('top rated',err)
    })
  },
  methods: {
    slideAutoPlay(){
      if(!this.slideAuto){
        this.defaultSwiper.autoplay.start()
        this.slideAuto = true;
      }
      else{
        this.defaultSwiper.autoplay.stop()
        this.slideAuto = false
      }
    },
    
    slidePrev(){
      this.defaultSwiper.slidePrev();
      this.slideAuto = false
    },
    slideNext(){
      this.defaultSwiper.slideNext();
      this.slideAuto = false
    }
  },
  mounted(){
    this.defaultSwiper = new Swiper('.swiper-container',{
        autoplay:{
          //disableOnInteraction: false,
          delay: 3000
        },
        noSwiping : true,
        loop:true,
        autoHeight:true
    });
    $(".tab > li > a").on("click focusin",function(){
        $(this).parent("li").addClass("on").siblings("li").removeClass("on");
    })
  },
 
}

</script>
<style lang="scss">

$red:yellow;

.home {
  background-color: $red;
}
</style>