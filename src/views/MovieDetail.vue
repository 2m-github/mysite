<template>
  <div class="detail">
    <h1>This is movie detail page</h1>
    <div class="detail_visual" :style="bg ? {backgroundImage:`url(http://image.tmdb.org/t/p/w1920_and_h800_multi_faces${bg})`}:''">
      <div class="dim"></div>
      <div class="container">
        <div class="detail_info">
          <div class="movie_img">
            <img :src="poster ? `http://image.tmdb.org/t/p/w300${poster}` : ''" alt="">
          </div>
          <div class="cont">
            <h1>{{title}}</h1>
            <span class="release_date">({{releaseYear}})</span>
            <div class="facts">
              <span class="release">{{releaseDate}}</span>
              <i>·</i>
              <span class="genres">{{genres}}</span>
              <i>·</i>
              <span class="runtime">{{runtime}}</span>분
            </div>
            <ul class="movie_actions">
              <li>
                <div class="chart">
                  <div>
                    <span>
                      <strong>{{voteAverage}}</strong>%
                    </span>
                  </div>
                  <canvas id="myChart" ></canvas>
                </div>
              </li>
            </ul>
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
      bg: null,
      poster:null,
      title: null,
      imgSrc: 'http://image.tmdb.org/t/p/w400/rSPw7tgCH9c6NqICZef4kZjFOQ5.jpg',
      releaseYear: null,
      releaseDate: null,
      runtime:null,
      genres:null,
      voteAverage:0
    }
  },
  created(){
    console.log("query=",this.$route.params.movieID)
    
    api.moviesDetail(this.$route.params.movieID).then( res => {
      
      this.info = res.data; 
      this.bg = res.data.backdrop_path;
      this.poster = res.data.poster_path;
      this.title = res.data.title;
      this.releaseYear = res.data.release_date.substring(0,4);
      this.releaseDate = res.data.release_date;
      this.runtime = res.data.runtime;
      this.genres = res.data.genres[0].name;
      this.voteAverage = res.data.vote_average * 10;
      if(res.data.backdrop_path) {
        console.log("backdrop_path=", res.data.backdrop_path);
      }
      else{
        console.log("backdrop_path=", "空值");
      }
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
        //document.getElementsByTagName('body')[0].style.background = res[0].color;
        document.querySelector('.dim').style.backgroundColor = res[0].color;
      })
      console.log("imgSrc=", this.imgSrc);

      //chart 
      var ctx = document.getElementById('myChart').getContext('2d');
      


      var data = {
        datasets: [{
        //label: 'My First Dataset',
        labels: ['Red', 'Blue'],
        data: [this.voteAverage,(100-this.voteAverage)],
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)'
        ],
        hoverOffset: 0,
        spacing: 0,
        borderWidth: 0,
        cutout: "70%",
        //radius: "100%",
        animation: false,
        //circumference: 180
        borderAlign: 'inner'
        
        }]
      };

      // For a pie chart
      var myBarChart = new Chart(ctx, {
        type: '',
        data: data
      });
      
    }).catch(err => {
      console.log("error", err);
    });

    
    
    
  },
  mounted(){
    
    
    

  
  }
}
</script>
