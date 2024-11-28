// src/components/AppFooter.vue
<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-section">
          <h3 class="footer-title">Karl Chan</h3>
          <p class="footer-description">
            Full Stack Developer passionate about creating beautiful web experiences
          </p>
        </div>

        <div class="footer-section">
          <h4>Quick Links</h4>
          <nav class="footer-links">
            <router-link to="/">Home</router-link>
            <router-link to="/projects">Projects</router-link>
            <router-link to="/about">About</router-link>
            <router-link to="/contact">Contact</router-link>
          </nav>
        </div>

        <div class="footer-section">
          <h4>Connect</h4>
          <div class="social-links">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <i class="fab fa-github"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <i class="fab fa-linkedin"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <i class="fab fa-twitter"></i>
            </a>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <p>&copy; {{ currentYear }} Built by Karl Chan.</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue';

const currentYear = computed(() => new Date().getFullYear());
</script>

<style lang="scss" scoped>
.footer {
  background: color.adjust($dark-bg, $lightness: 5%);
  padding: 4rem 0 2rem;
  margin-top: 4rem;
}

.footer-content {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  margin-bottom: 2rem;

  @include responsive('md') {
    grid-template-columns: 2fr 1fr 1fr;
  }
}

.footer-section {
  h3,
  h4 {
    color: $light-text;
    margin-bottom: 1rem;
  }

  .footer-description {
    color: color.adjust($light-text, $lightness: -20%);
    max-width: 300px;
  }
}

.footer-links {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  a {
    color: color.adjust($light-text, $lightness: -20%);
    text-decoration: none;
    transition: color $transition-speed;

    &:hover {
      color: $primary-color;
    }
  }
}

.social-links {
  display: flex;
  gap: 1rem;

  a {
    color: color.adjust($light-text, $lightness: -20%);
    font-size: 1.5rem;
    transition: all $transition-speed;

    &:hover {
      color: $primary-color;
      transform: translateY(-2px);
    }
  }
}

.footer-bottom {
  padding-top: 2rem;
  border-top: 1px solid color.adjust($dark-bg, $lightness: 10%);
  text-align: center;
  color: color.adjust($light-text, $lightness: -30%);
}
</style>
