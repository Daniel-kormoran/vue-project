<template>
  <div>
    <button @click="toggleTheme">
      <img src="../assets/sun.svg" alt="Sun Icon" v-if="!isDark" class="w-6 h-6">
      <img src="../assets/moon.svg" alt="Moon Icon" v-if="isDark" class="w-6 h-6">
    </button>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const isDark = ref(false);

// Function to apply the theme based on isDark value
function applyTheme() {
  const bodyClass = document.documentElement.classList;
  if (isDark.value) {
    bodyClass.add('dark'); // Add 'dark' class if isDark is true
  } else {
    bodyClass.remove('dark'); // Remove 'dark' class otherwise
  }
  localStorage.setItem('theme', JSON.stringify(isDark.value)); // Store theme preference in local storage
}

// Toggle theme function
function toggleTheme() {
  isDark.value = !isDark.value;
  applyTheme(); // Apply the new theme after toggling
}

// Function to check the browser's preferred color scheme and stored theme preference
function initializeThemePreference() {
  const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
  const storedTheme = localStorage.getItem('theme');
  
  // Check if there's a stored theme preference; otherwise, default to the user's system preference
  isDark.value = storedTheme ? JSON.parse(storedTheme) : prefersDarkScheme.matches;
  applyTheme();
}

onMounted(() => {
  initializeThemePreference(); // Initialize theme based on stored preference or system preference
  
  // Listen for changes in prefers-color-scheme
  window.matchMedia("(prefers-color-scheme: dark)").addEventListener('change', event => {
    isDark.value = event.matches;
    applyTheme();
  });
});
</script>

<style scoped>
/* Scoped styles */
</style>