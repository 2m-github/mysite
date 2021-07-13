<template>
    <div>
        <h1>Parallax Main</h1>
        
        <parallax :msg="`Welcome to Your Vue.js App ===`"/>
    </div>
</template>
<script>
import Parallax from '@/components/Parallax.vue'

export default {
  components: {
    Parallax
  }
}
</script>

<style scoped>

</style>
