<script setup>
import InfoComponent from './InfoComponent.vue';
</script>


<template>
    <div class="hero relative grid grid-cols-2 grid-flow-row 2xl:grid-rows-2 2xl:grid-cols-3 gap-4 center p-3">
        
        
        <div class=" gallery row-start-1 col-span-2 max-w-full group rounded-lg bg-[url('https://vue-app-b5141.web.app/assets/mountains-5-BIiI1UfO.jpg')] 
        bg-cover bg-center">
        <InfoComponent/>
       
        
      
      </div>

       <div class=" gallery max-w-full group rounded-lg bg-[url('https://vue-app-b5141.web.app/assets/mountains-4-CGrYAn2s.jpg')] bg-cover  bg-center">
        <InfoComponent/>
       </div>
        
        <div class="gallery group max-w-full rounded-lg bg-[url('https://vue-app-b5141.web.app/assets/mountains-3-DCiH7l3p.jpg')] bg-cover bg-center">
          <InfoComponent/>
          
        </div>
        
        <div class="gallery group max-w-full rounded-lg bg-[url('https://vue-app-b5141.web.app/assets/mountains-2-40TgjWap.jpg')] bg-cover bg-center">
          <InfoComponent/>
        </div>
        
        <div class="gallery group max-w-full rounded-lg  bg-cover bg-[url('https://vue-app-b5141.web.app/assets/mountains-1-DaV-MFR4.jpg')] bg-center ">
          <InfoComponent/>
          
        </div>
    </div>
  
   </template>

<style scoped>
.hero {
  @apply bg-coral;
  @apply transition-all duration-1000 ease-in-out;
  

}

 
.gallery {
 @apply 2xl:h-full;
  @apply content-center;
  @apply rounded;  
  @apply border-2 border-silver md:border-4 border-silver;
  @apply transition-all duration-1000 ease-in-out;
  

}


</style>
