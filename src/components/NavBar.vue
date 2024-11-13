<template>
  <nav :class="{ 'nav-scrolled': isScrolled }">
    <div class="container nav-content">
      <router-link to="/" class="logo">
        <span>Karl</span>Dev
      </router-link>
      <div class="nav-links" :class="{ 'nav-active': isMenuOpen }">
        <router-link to="/" active-class="active">Home</router-link>
        <router-link to="/about" active-class="active">About</router-link>
        <router-link to="/projects" active-class="active">Projects</router-link>
        <router-link to="/contact" active-class="active">Contact</router-link>
      </div>
      <button class="menu-toggle" @click="toggleMenu">
        <span>a</span>
        <span>b</span>
        <span>c</span>
      </button>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useWindowScroll } from '@vueuse/core'

const { y } = useWindowScroll()
const isScrolled = ref(false)
const isMenuOpen = ref(false)

const checkScroll = () => {
  isScrolled.value = y.value > 50
}

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

onMounted(() => {
  window.addEventListener('scroll', checkScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', checkScroll)
})
</script>

<style lang="scss" scoped>
nav {
  position: fixed;
  width: 100%;
  z-index: 100;
  transition: all $transition-speed;
  padding: 1rem 0;
  
  &.nav-scrolled {
    background: rgba($dark-bg, 0.95);
    backdrop-filter: blur(10px);
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }
}

.nav-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-size: 1.5rem;
  font-weight: 700;
  color: $light-text;
  text-decoration: none;
  
  span {
    color: $primary-color;
  }
}

.nav-links {
  display: flex;
  gap: 2rem;
  
  @include responsive('md') {
    display: flex;
  }
  
  a {
    color: $light-text;
    text-decoration: none;
    transition: color $transition-speed;
    
    &:hover, &.active {
      color: $primary-color;
    }
  }
}
</style>