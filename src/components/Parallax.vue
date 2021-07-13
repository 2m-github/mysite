<template>
 
  
  <div class="parallax-area">
    <div class="animation01" data-0="background:rgba(0,0,0,1)" data-500="background:rgba(255,0,0,1)">1</div>
    <div class="animation02" data-500="font-size:16px; background:rgba(255,0,0,1);" data-750="font-size:100px; background:rgba(255,255,0,1);" data-1000="font-size:16px;">2</div>
    <div class="abc" data-smooth-scrolling="on" data-500="background:rgba(255,0,0,1)">3</div>
    <h1 id="title" data-image-src="image url">{{ msg }}</h1>
    <div id="scene" class="parallax_1">
      <div data-depth="0.2"></div>
      <div data-depth="0.4"></div>
      <div data-depth="0.6"></div>
      <div data-depth="0.8"></div>
    </div>


    <div class="thumbnail"  data-bottom-center="opacity:0.2;" data-top-top="opacity:1;">
        <div class="bg" style="background:url(/cdn/main/parallax-1.jpg) no-repeat center / cover"></div>
        <h1 class="tit" data-bottom-center="color:rgba(0,0,0,1); font-size:20px; top:50%; opacity:1;" data-top-top="color:rgba(255,0,0,1);  font-size:200px; top:0; opacity:0;">제목 1</h1>
      </div>
    <div class="thumbnail">
      <div class="bg" style="background:url(/cdn/main/parallax-2.jpg) no-repeat center / cover"></div>
      <h1 class="tit">제목제목 1제목 1제목 1제목 1 1</h1>
    </div>
    <div class="thumbnail"><div class="bg" style="background:url(/cdn/main/parallax-3.jpg) no-repeat center / cover"></div></div>
    <div class="thumbnail"><div class="bg" style="background:url(/cdn/main/parallax-4.jpg) no-repeat center / cover"></div></div>

    

</div>
</template>

<script>

import Parallax from 'parallax-js'
import simpleParallax from 'simple-parallax-js';

export default {
  name: 'Parallax',
  props: {
    msg: String
  },
  created(){
    
  },
  mounted(){
    skrollr.init();
    var scene = document.getElementById('scene');
    
    var parallaxInstance = new Parallax(scene,{
      relativeInput:true,
      invertX:false,
      invertY:false,
      limitX:100,
      limitY:100,
      frictionX:1,
      originX:0
    });
    
    
    const image = document.getElementsByClassName('bg');
    const bg = new simpleParallax(image, {
      delay: 0,
      orientation: 'down',
      scale: 1.3,
      overflow: false,
    });

    const tit = document.getElementsByClassName("tit");
    window.addEventListener("scroll",titParallax)
    var titParallax = function(e){

    } 

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div[class^="animation"] {height:500px; background:#42b983}
.animation02 {display: flex; justify-content: center; align-items: center;}
.parallax-window {height: 100vh;}
h1 {position: absolute; left: 0; top:50%; width: 100%; text-align: center;  margin:0;   transform: translateY(-50%);}

.thumbnail {position: relative;}
.bg {
  height: 100vh;
  width: 100%;
}
.parallax_1 div {
  position: absolute;
  width:100px;
  height: 100px;
  border-radius: 50%;
}
.parallax_1 div:nth-of-type(1) { margin-left:80px; margin-top:80px; background: blueviolet;}
.parallax_1 div:nth-of-type(2) { margin-left:180px; margin-top:180px; background: black;}
.parallax_1 div:nth-of-type(3) { margin-left:30px; margin-top:30px; background: blue;}
.parallax_1 div:nth-of-type(4) { margin-left:280px; margin-top:280px; background: red;}
.parallax_bg {
  width: 100%;
  height: 100vh;
  background-color: blueviolet;
  background-position: center;
  background-size: cover;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
