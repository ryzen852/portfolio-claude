<template>
  <nav :class="{ 'nav-scrolled': isScrolled }">
    <div class="container px-4 nav-content">
      <a href="#home" class="logo" @click.prevent="scrollToSection('home')">
        <span style="color: #ff6b1a">Karl</span>Dev
      </a>
      <button class="menu-toggle" :class="{ 'is-active': isMenuOpen }" @click="toggleMenu">
        <span></span>
        <span></span>
        <span></span>
      </button>
      <div class="nav-links" :class="{ 'nav-active': isMenuOpen }">
        <ul>
          <li>
            <a
              href="#home"
              :class="{ active: activeSection === 'home' }"
              @click.prevent="scrollToSection('home')"
              >Home</a
            >
          </li>
          <li>
            <a
              href="#about"
              :class="{ active: activeSection === 'about' }"
              @click.prevent="scrollToSection('about')"
              >About</a
            >
          </li>
          <li>
            <a
              href="#projects"
              :class="{ active: activeSection === 'projects' }"
              @click.prevent="scrollToSection('projects')"
              >Projects</a
            >
          </li>
          <li>
            <a
              href="#contact"
              :class="{ active: activeSection === 'contact' }"
              @click.prevent="scrollToSection('contact')"
              >Contact</a
            >
          </li>
          <li>
            <button class="text-text" @click="toggleTheme">
              <MoonIcon v-if="theme === 'light'" class="icon" />
              <SunIcon v-else class="icon" />
            </button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import MoonIcon from '@/components/icons/MoonIcon.vue';
import SunIcon from '@/components/icons/SunIcon.vue';

const isMenuOpen = ref(false);
const isScrolled = ref(false);
const activeSection = ref('home');

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
    isMenuOpen.value = false;
  }
};

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const checkScroll = () => {
  isScrolled.value = window.scrollY > 50;

  // Check which section is currently in view
  const sections = ['home', 'about', 'projects', 'contact'];
  for (const section of sections) {
    const element = document.getElementById(section);
    if (element) {
      const rect = element.getBoundingClientRect();
      const offset = 100; // Adjust this value based on your navbar height
      if (rect.top <= offset && rect.bottom > offset) {
        activeSection.value = section;
        break;
      }
    }
  }
};

const theme = ref('light_theme');

const toggleTheme = () => {
  //theme.value = theme.value === 'light_theme' ? 'dark_theme' : 'light_theme';
  let isDark = document.querySelector('.light_theme') === null ? true : false;
  let element = document.querySelector('.app');
  isDark
    ? element.classList.replace('dark_theme', 'light_theme')
    : element.classList.replace('light_theme', 'dark_theme');
};

onMounted(() => {
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  //theme.value = prefersDark ? 'dark_theme' : 'light_theme';
  let element = document.querySelector('.app');
  prefersDark ? element.classList.add('dark_theme') : element.classList;

  window.addEventListener('scroll', checkScroll);
  checkScroll(); // Initial check
});

onUnmounted(() => {
  window.removeEventListener('scroll', checkScroll);
});
</script>

<style lang="scss" scoped></style>
