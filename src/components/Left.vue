<script setup>

</script>


<template>
    <div class="hero grid grid-cols-2 grid-flow-row 2xl:grid-rows-2 2xl:grid-cols-3 gap-4 center p-3">
        
           
        <div class=" gallery  group row-start-1 col-span-2 max-w-full rounded-lg bg-[url('../assets/mountains-5.jpg')] 
        bg-cover bg-center">
          <div class="h-full w-full bg-black/10 flex items-center justify-center  group-hover:bottom-0 opacity-0 
          group-hover:opacity-100  transition-all duration-300">
          <button class="bg-black text-white py-2 px-5 items-center justify-center">Add to cart</button>
          </div>
          <img class="invisible" src="../assets/mountains-5.jpg" alt="">
        </div>

       <div class=" gallery max-w-full group rounded-lg bg-[url('../assets/mountains-4.jpg')] bg-cover  bg-center">
          <div class=" h-full w-full bg-black/20 flex items-center justify-center  group-hover:bottom-0 opacity-0 
          group-hover:opacity-100 transition-all duration-300">
          <button class="bg-black text-white py-2 px-5">Add to cart</button>
          </div>
       </div>
        
        <div class="gallery group max-w-full rounded-lg bg-[url('../assets/mountains-3.jpg')] bg-cover bg-center">
          <div class=" h-full w-full bg-black/20 flex items-center justify-center  group-hover:bottom-0 opacity-0 
          group-hover:opacity-100 transition-all duration-300">
          <button class="bg-black text-white py-2 px-5">Add to cart</button>
          </div>
          <img class="invisible" src="../assets/mountains-3.jpg" alt="">
        </div>
        
        <div class="gallery group max-w-full rounded-lg bg-[url('../assets/mountains-2.jpg')] bg-cover bg-center">
            <div class=" h-full w-full bg-black/20 flex items-center justify-center  group-hover:bottom-0 opacity-0 
            group-hover:opacity-100 transition-all duration-300">
            <button class="bg-black text-white py-2 px-5">Add to cart</button>
            </div>
        </div>
        
        <div class="gallery group max-w-full rounded-lg  bg-cover bg-[url('../assets/mountains-1.jpg')] bg-center ">
          <div class=" h-full w-full bg-black/20 flex items-center justify-center  group-hover:bottom-0 opacity-0 
          group-hover:opacity-100 transition-all duration-300 hover:backdrop-blur-sm">
          <button class="bg-black text-white py-2 px-5">Add to cart</button>
          </div>
          <img class="invisible" src="../assets/mountains-1.jpg" alt="">
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
