<script setup>

</script>


<template>
    <div class="hero grid grid-cols-2 grid-flow-row 2xl:grid-rows-2 2xl:grid-cols-3 gap-4 center p-3">
        
           
        <div class="row-start-1 col-span-2 max-w-full rounded-lg bg-[url('../assets/mountains-5.jpg')] 
        bg-cover bg-center">
            <img class="invisible" src="../assets/mountains-5.jpg" alt="">

        </div>

       <div class="max-w-full rounded-lg bg-[url('../assets/mountains-4.jpg')] bg-cover  bg-center">
          
       </div>
        
        <div class="max-w-full rounded-lg bg-[url('../assets/mountains-3.jpg')] bg-cover bg-center">
          <img class="invisible" src="../assets/mountains-3.jpg" alt="">
        </div>
        
        <div class="max-w-full rounded-lg bg-[url('../assets/mountains-2.jpg')] bg-cover bg-center">
        </div>
        
        <div class="max-w-full rounded-lg bg-[url('../assets/mountains-1.jpg')] bg-cover bg-center">
          <img class="invisible" src="../assets/mountains-1.jpg" alt="">
        </div>
    </div>
  
   </template>

<style scoped>
.hero {
  @apply bg-coral;
  @apply transition-all duration-1000 ease-in-out;
  

}

 
.hero div {
 @apply h-auto 2xl:h-full;
  @apply content-center;
  @apply rounded;  
  @apply border-2 border-silver md:border-4 border-silver;
  @apply transition-all duration-1000 ease-in-out;

}


</style>
