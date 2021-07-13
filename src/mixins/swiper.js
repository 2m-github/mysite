// import Swiper JS
import { Swiper, SwiperSlide } from 'swiper';
// import Swiper styles
import 'swiper/swiper.min.css';

export default {
    data(){
        return {
            defaultSwiper: null
        }
    },
    mounted(){
        console.log("mixin")
        this.defaultSwiper = new Swiper('.swiper-container',{
            effect: 'fade',
            autoplay:true,
            loop:true,
            autoHeight:true
        })
        console.log("mixin",this.defaultSwiper)
    },
    destroyed(){
        this.defaultSwiper.destroy()
    }
}