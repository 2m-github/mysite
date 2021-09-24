<template>
  <div class="detail">
    <h1>This is movie detail page</h1>
    <div class="img">
      <img :src="`http://image.tmdb.org/t/p/w200${info.production_companies[0].logo_path}`" alt="">
      <img :src="`http://image.tmdb.org/t/p/w400${info.backdrop_path}`" alt="">
      <img :src="`http://image.tmdb.org/t/p/w400${info.poster_path}`" alt="">
    </div>
    ===================================
    {{info}}
  </div>
</template>

<script>
import * as api from '@/store/api';

export default {
  name:'MovieDetail',
  data(){
    return {
      info:null
    }
  },
  created(){
    console.log("query=",this.$route.params.movieID)
    api.moviesDetail(this.$route.params.movieID).then( res => {
      console.log("res=", res.data);
      this.info = res.data;
    }).catch(err => {
      console.log("error", err);
    })
  }
}
</script>
