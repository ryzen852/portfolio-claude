<template>
    <main class="home">
      <section class="hero">
        <div class="container">
          <h1 class="title" ref="titleRef">
            Hi, I'm <span class="highlight">Karl Chan👋</span>
            <br />Full Stack Developer
          </h1>
          <p class="subtitle">
            Building beautiful web experiences with modern technologies
          </p>
          <div class="cta-buttons">
            <router-link to="/projects" class="btn primary">View Projects</router-link>
            <router-link to="/contact" class="btn secondary">Contact Me</router-link>
          </div>
          <div class="tech-stack">
            <h3>Tech Stack</h3>
            <div class="tech-icons">
              <i class="devicon-vuejs-plain"></i>
              <i class="devicon-typescript-plain"></i>
              <i class="devicon-nodejs-plain"></i>
              <i class="devicon-postgresql-plain"></i>
              <i class="devicon-docker-plain"></i>
            </div>
          </div>
        </div>
      </section>
    </main>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  import { gsap } from 'gsap'
  
  const titleRef = ref(null)
  
  onMounted(() => {
    gsap.from(titleRef.value, {
      duration: 3,
      y: 50,
      opacity: 0,
      ease: 'power3.out'
    })
  })
  </script>
  
  <style lang="scss" scoped>
  .hero {
    min-height: 100vh;
    display: flex;
    align-items: center;
    padding: 6rem 0;
    
    .title {
      font-size: 3rem;
      margin-bottom: 1.5rem;
      line-height: 1.2;
      
      @include responsive('md') {
        font-size: 4rem;
      }
      
      .highlight {
        color: $primary-color;
      }
    }
    
    .subtitle {
      font-size: 1.25rem;
      margin-bottom: 2rem;
      opacity: 0.9;
    }
  }
  
  .cta-buttons {
    display: flex;
    gap: 1rem;
    margin-bottom: 3rem;
  }
  
  .btn {
    padding: 0.75rem 1.5rem;
    border-radius: 0.5rem;
    text-decoration: none;
    font-weight: 500;
    transition: all $transition-speed;
    
    &.primary {
      background: $primary-color;
      color: $light-text;
      
      &:hover {
        background: darken($primary-color, 10%);
      }
    }
    
    &.secondary {
      border: 2px solid $primary-color;
      color: $primary-color;
      
      &:hover {
        background: $primary-color;
        color: $light-text;
      }
    }
  }
  
  .tech-stack {
    h3 {
      margin-bottom: 1rem;
      font-size: 1.25rem;
    }
    
    .tech-icons {
      display: flex;
      gap: 2rem;
      font-size: 2.5rem;
      
      i {
        transition: all $transition-speed;
        
        &:hover {
          color: $primary-color;
          transform: translateY(-5px);
        }
      }
    }
  }
  </style>