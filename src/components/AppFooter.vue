<template>
  <footer class="footer">
    <div class="container">
      <!-- <div class="footer-content">
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
      </div> -->

      <div class="footer-bottom">
        <p>
          &copy; {{ currentYear }} Made with
          <img
            src="https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/72x72/2764.png"
            alt="heart emoji"
            class="inline-block"
            draggable="false"
            style="width: 1em"
          />
          by Karl Chan
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue';

const currentYear = computed(() => new Date().getFullYear());
</script>

<style lang="scss" scoped></style>
