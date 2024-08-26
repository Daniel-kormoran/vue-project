
<template>
 
    <!-- Image Container -->

      <figcaption
        class="relative h-96 w-64 cursor-pointer left-0 top-0 flex  flex-col items-center justify-center gap-3 rounded-3xl bg-slate-950 p-4 text-slate-100 transition-all duration-1000 ease-in-out"
      >
        <h2 class="mb-2 text-2xl font-bold">Bald Eagle</h2>

        <img
          src="https://images.unsplash.com/photo-1611689342806-0863700ce1e4?q=80&w=600"
          alt="Bald Eagle Portrait"
          class="size-24 rounded-full object-cover"
        />

        <h3 class="font-semibold">National Symbol of the USA</h3>

        <div class="grid grid-cols-1 grid-rows-3 gap-2 text-nowrap text-sm">
          <div
            class="rounded-full bg-amber-500 px-4 py-2 text-center font-semibold text-slate-900"
          >
            White & Brown
          </div>

          <div
            class="rounded-full bg-amber-500 px-4 py-2 text-center font-semibold text-slate-900"
          >
            Fish Expert
          </div>

          <div
            class="rounded-full bg-amber-500 px-4 py-2 text-center font-semibold text-slate-900"
          >
            Found Near Water
          </div>
        </div>
      </figcaption>

 
</template>

<script setup>
</script>

<style scoped>
.flip-card-front {
  box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.2);
  transform-style: preserve-3d;
}

</style>  
