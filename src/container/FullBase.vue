<template>
    <div>
        <div class="wrap">
            <!-- <header-area /> -->
            <router-view />
        </div>
    </div>
</template>
<script>

import HeaderArea from '../components/common/Header.vue'
export default {
    components:{
        HeaderArea
    }
}
</script>
