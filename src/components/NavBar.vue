<template>
  <nav :class="{ 'nav-scrolled': isScrolled }">
    <div class="container nav-content">
      <a href="#home" class="logo" @click.prevent="scrollToSection('home')">
        <span>Karl</span>Dev
      </a>
      <div class="nav-links" :class="{ 'nav-active': isMenuOpen }">
        <a
          href="#home"
          @click.prevent="scrollToSection('home')"
          :class="{ active: activeSection === 'home' }"
        >
          Home
        </a>
        <a
          href="#about"
          @click.prevent="scrollToSection('about')"
          :class="{ active: activeSection === 'about' }"
        >
          About
        </a>
        <a
          href="#projects"
          @click.prevent="scrollToSection('projects')"
          :class="{ active: activeSection === 'projects' }"
        >
          Projects
        </a>
        <a
          href="#contact"
          @click.prevent="scrollToSection('contact')"
          :class="{ active: activeSection === 'contact' }"
        >
          Contact
        </a>
      </div>
      <button
        class="menu-toggle"
        @click="toggleMenu"
        :class="{ 'is-active': isMenuOpen }"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const isMenuOpen = ref(false);
const isScrolled = ref(false);
const activeSection = ref("home");

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
    isMenuOpen.value = false;
  }
};

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const checkScroll = () => {
  isScrolled.value = window.scrollY > 50;

  // Check which section is currently in view
  const sections = ["home", "about", "projects", "contact"];
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

onMounted(() => {
  window.addEventListener("scroll", checkScroll);
  checkScroll(); // Initial check
});

onUnmounted(() => {
  window.removeEventListener("scroll", checkScroll);
});
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
  z-index: 101;

  span {
    color: $primary-color;
  }
}

.nav-links {
  display: flex;
  gap: 2rem;

  @include responsive("md-down") {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba($dark-bg, 0.98);
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transform: translateX(100%);
    transition: transform $transition-speed;

    &.nav-active {
      transform: translateX(0);
    }
  }

  a {
    color: $light-text;
    text-decoration: none;
    transition: color $transition-speed;
    font-size: 1rem;

    @include responsive("md-down") {
      font-size: 1.5rem;
    }

    &:hover,
    &.active {
      color: $primary-color;
    }
  }
}

.menu-toggle {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  z-index: 101;

  @include responsive("md-down") {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }

  span {
    display: block;
    width: 25px;
    height: 2px;
    background-color: $light-text;
    transition: all $transition-speed;
  }

  &.is-active {
    span {
      &:first-child {
        transform: translateY(8px) rotate(45deg);
      }

      &:nth-child(2) {
        opacity: 0;
      }

      &:last-child {
        transform: translateY(-8px) rotate(-45deg);
      }
    }
  }
}
</style>
