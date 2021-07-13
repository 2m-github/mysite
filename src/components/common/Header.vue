<template>
    <div id="header">
        <div class="container">
            <h1 class="logo"><a href="/"><img src="@/assets/logo.png" class="full_size" alt="logo"></a></h1>
            <ul class="gnb">
                <li>
                    <a href="#">회사소개</a>
                        <ul class="sub_menu">
                            <li><a href="#">인사말</a></li>
                            <li><a href="#">오시는길</a></li>
                        </ul>
                </li>
                <li>
                    <a href="#">미디어 센터</a>
                        <ul class="sub_menu">
                            <li><a href="#">영화</a></li>
                            <li><a href="#">시리즈</a></li>
                            <li><a href="#">다큐멘터리</a></li>
                            <li><a href="#">키즈</a></li>
                        </ul>
                </li>
                <li>
                    <a href="#">고객센터</a>
                        <ul class="sub_menu">
                            <li><a href="#">FAQ</a></li>
                            <li><a href="#">공지사항</a></li>
                        </ul>
                </li>
            </ul>
            <div class="util">
                <router-link to="/" id="login">로그인</router-link>
                <router-link to="/">회원가입</router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    mounted(){
        var $menu = $(".gnb > li");
        $menu.on("mouseenter focusin",function(){
            $(".sub_menu").show();
        }).on("mouseleave",function(){
            $(".sub_menu").hide();
        })
        $("#login").focusin(function(){
            $(".sub_menu").hide();
        })
    }
}
</script>