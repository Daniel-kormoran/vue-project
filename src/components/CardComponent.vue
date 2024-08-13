
<template>
  <figure
    ref="flipContainer"
    @mousemove="handleMouseMove"
    @mouseleave="resetRotation"
    @keydown="handleKeyDown"
    tabindex="1"
    class="flip-container flew relative cursor-pointer rounded-3xl md:max-w-md lg:max-w-lg xl:max-w-xl"
  >
    <div
      class="flip-card-front absolute left-0 top-0 flex h-full w-full items-center justify-center rounded-3xl bg-[url('https://tailwindcss.com/_next/static/media/1.4985e539.jpg')] bg-cover bg-center transition-all duration-1000 ease-in-out"
    ></div>

    <figcaption
      class="flip-card-back absolute left-0 top-0 flex h-full w-full flex-col items-center justify-center gap-2 rounded-3xl bg-delft_blue p-2 md:p-4 lg:p-6 my--1 text-background transition-all duration-1000 ease-in-out"
    >
      <h1 class="text-base md:text-md lg:text-lg font-bold">Bald Eagle</h1>

      <img
        src="../assets/mountains-4.jpg"
        alt="Bald Eagle Portrait"
        class="w-16 h-16 md:w-24 md:h-24 lg:w-20 lg:h-20 rounded-full object-cover"
      />

      <h2 class="font-semibold text-center">National Symbol of the USA</h2>

      <div class="grid grid-cols-1 grid-rows-2 gap-2 text-nowrap text-sm">
        <div
          class="rounded-full bg-amber500 px-4 py-2 text-center font-semibold text-slate-900"
        >
          White & Brown
        </div>

        <div
          class="rounded-full bg-amber500 px-4 py-2 text-center font-semibold text-slate-900"
        >
          Fish Expert
        </div>
      </div>
    </figcaption>
  </figure>
</template>


<script setup>
import { ref } from "vue";

const flipContainer = ref(null);
const isFlipped = ref(false);

// Rotating The Card Based On The Mouse Movement

const handleMouseMove = (event) => {
  const rect = flipContainer.value.getBoundingClientRect();
  const mouseX = event.clientX - rect.left;
  const mouseY = event.clientY - rect.top;
  const rotateX = (mouseY / rect.height - 0.5) * 50;
  const rotateY = -(mouseX / rect.width - 0.5) * 50;
  flipContainer.value.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
};

// Resetting The Rotation Back To Original State

const resetRotation = () => {
  flipContainer.value.style.transform = "";
};

// Checking The Value Of isFlipped & Changing its Value

const handleFlip = () => {
  if (isFlipped.value) {
    flipContainer.value.classList.remove("is-flipped");
    isFlipped.value = false;
  } else {
    flipContainer.value.classList.add("is-flipped");
    isFlipped.value = true;
  }
};

// Triggering handleFlip Function on pressing 'Enter' Key

const handleKeyDown = (event) => {
  if (event.key === "Enter") {
    handleFlip();
  }
};
</script>

<style scoped>

/* Adding Perspective To Parent Container */

.flip-container {
  perspective: 1000px;
  transform-style: preserve-3d;
  transition: transform 0.5s ease;
}

/* Hiding The Back Of Card */

.flip-card-front,
.flip-card-back {
  backface-visibility: hidden;
  box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.2);
  transform-style: preserve-3d;
}

/* Setting The Default Postion Of The Back Of The Card */

.flip-card-back {
  transform: rotateY(180deg);
}

/* Flipping The Card On Hover */

.flip-container:hover .flip-card-front {
  transform: rotateY(180deg);
}

.flip-container:hover .flip-card-back {
  transform: rotateY(360deg);
}

/* Flipping The Card On 'Enter' Key Event */

.flip-container.is-flipped .flip-card-front {
  transform: rotateY(180deg);
}

.flip-container.is-flipped .flip-card-back {
  transform: rotateY(360deg);
}

/* Adding Depth To Elements On The Back */

.flip-container .flip-card-back h2 {
  transform: translateZ(40px);
}
.flip-container .flip-card-back img {
  transform: translateZ(50px);
}
.flip-container .flip-card-back h3 {
  transform: translateZ(40px);
}
.flip-container .flip-card-back div {
  transform: translateZ(30px);
}
</style>  

