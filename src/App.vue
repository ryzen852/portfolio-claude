<template>
  <div class="app">
    <NavBar />
    <main class="main-content">
      <section class="hero" data-aos="fade-up">
        <Home />
      </section>
    </main>
    <AppFooter />
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import NavBar from "./components/NavBar.vue";
import Home from "./views/Home.vue"
import AppFooter from "./components/AppFooter.vue";
import AOS from "aos";
import "aos/dist/aos.css";

// Initialize AOS
onMounted(() => {
  AOS.init({
    duration: 8000,
    easing: "ease-in-out",
    once: true,
  });
});
</script>

<style lang="scss">
// Import main styles
@use "./styles/main.scss";

.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main-content {
  flex: 1;
  padding-top: 80px; // Height of the fixed navbar
  width: 100%;
}

// Page transition animations
.page-enter-active,
.page-leave-active {
  transition: opacity 0.3s ease;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
}

// Global styles
::-webkit-scrollbar {
  width: 5px;
}

::-webkit-scrollbar-track {
  background: $dark-bg;
}

::-webkit-scrollbar-thumb {
  background: $primary-color;
  border-radius: 4px;

  &:hover {
    background: color.adjust($primary-color, $lightness: -10%);
  }
}

// Focus styles for accessibility
:focus {
  outline: 2px solid $primary-color;
  outline-offset: 2px;
}

// Selection styles
::selection {
  background: $primary-color;
  color: $light-text;
}
</style>
