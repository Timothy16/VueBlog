<template>
  <div id="app">
      <div class="wrapper">
        <app-Navbar/>
    
    <router-view/>
      </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import home from '@/components/home.vue'
// import Blog from '@/components/Blog.vue'
export default { 
  components : {
    'app-Navbar' : Navbar,
    'app-home': home,

    // 'app-blog' : Blog,  
  }
}
</script>

<style>
</style>
