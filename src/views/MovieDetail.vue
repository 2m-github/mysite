<template>
  <div class="detail">
    <h1>This is movie detail page</h1>
    <div class="detail_visual" :style="{backgroundImage:`url(http://image.tmdb.org/t/p/w1920_and_h800_multi_faces${info.backdrop_path})`}">
      <div class="dim"></div>
      <div class="container">
        <div class="detail_info">
          <div class="movie_img">
            <img :src="`http://image.tmdb.org/t/p/w300${info.poster_path}`" alt="">
          </div>
          <div class="cont">
            <h1>{{info.title}}</h1>
            <span class="release_date">({{releaseDate}})</span>
          </div>
        </div>
      </div>
    </div>
    ===================================<br>
    {{info}}
  </div>
</template>



<script>
import * as api from '@/store/api';
import rgbaster from 'rgbaster';
export default {
  name:'MovieDetail',
  data(){
    return {
      info: null,
      imgSrc: null,
      releaseDate: null
    }
  },
  created(){
    console.log("query=",this.$route.params.movieID)
    api.moviesDetail(this.$route.params.movieID).then( res => {
      console.log("res=", res.data);
      this.info = res.data; 
      this.releaseDate = res.data.release_date.substring(0,4);
      //이미지 주요색상
      this.imgSrc = `http://image.tmdb.org/t/p/w400${res.data.backdrop_path}`;
      let result = rgbaster(
        this.imgSrc, 
        {
          ignore: ['rgb(255,255,255)', 'rgb(0,0,0)']
        }
      )
      result.then((res)=>{
        console.log(res[0].color);
        // document.getElementsByTagName('body')[0].style.background = res[0].color;
        document.querySelector('.dim').style.backgroundColor = res[0].color;
      })
      console.log("imgSrc=", this.imgSrc);
    }).catch(err => {
      console.log("error", err);
    })

    
  },
  mounted(){
    
    
    

  
  }
}
</script>
