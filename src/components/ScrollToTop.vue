<template>
  <button
    v-if="isVisible"
    @click="scrollToTop"
    class="scrollToTop-btn fixed text-xl rounded-md bottom-3 right-3 text-white"
    aria-label="Scroll to top"
  >
    <i class="fas fa-angle-up" aria-hidden="true" />
  </button>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const isVisible = ref(false);
const homeSectionHeight = ref(0); // To store the height of the Home section

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const handleScroll = () => {
  const scrollY = window.scrollY;
  isVisible.value = scrollY > homeSectionHeight.value / 2; // Show button after scrolling past the Home section
};

const setHomeSectionHeight = () => {
  const homeSection = document.getElementById('home'); // Assuming the Home section has an id of 'home'
  if (homeSection) {
    homeSectionHeight.value = homeSection.offsetHeight; // Get the height of the Home section
  }
};

onMounted(() => {
  setHomeSectionHeight(); // Set the height on mount
  window.addEventListener('scroll', handleScroll);
  window.addEventListener('resize', setHomeSectionHeight); // Update height on resize
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
  window.removeEventListener('resize', setHomeSectionHeight);
});
</script>

<style lang="scss" scoped></style>
