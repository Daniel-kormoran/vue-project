<script setup>
import FooterComponent from "./components/FooterComponent.vue";
import Right from "./components/Right.vue";
import HeaderComponent from "./components/HeaderComponent.vue";
import Left from "./components/Left.vue";
import './css/dark.css';
import './css/light.css';

</script>

<template>
 
    <HeaderComponent  class=" bg-flame dark:bg- lg:bg-silver_lake content-center transition-all duration-1000 ease-in-out " /> 
  

    



  <div class="  flex-1 grid grid-cols-1 lg:grid-cols-2">
      
      <Left/>
      <Right/>
    

  

    
  </div>

  <footer class="w-full bg-indigo50 transition-all duration-1000 ease-in-out text-sm">

    <FooterComponent/>

  </footer>

</template>

<style scoped>

</style>
