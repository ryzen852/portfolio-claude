<template>
  <main class="home">
    <section class="hero">
      <div class="container">
        <h1 class="title" ref="titleRef">
          Hi, My name is
          <span class="highlight">Karl Chan</span>
          <span
            class="waving-emoji"
            :class="{ waving: isWaving }"
            @click="wave"
          >
            👋
          </span>
          <br />Full Stack Developer
        </h1>
        <p class="subtitle">
          Building beautiful web experiences with modern technologies
        </p>
        <div class="cta-buttons">
          <a href="/#projects" class="btn primary">View Projects</a>
          <a href="/#contact" class="btn secondary">Contact Me</a>
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
import { ref, onMounted } from "vue";
import { gsap } from "gsap";

const titleRef = ref(null);
const isWaving = ref(false);

const wave = () => {
  isWaving.value = true;
  // Reset the waving state after animation ends
  setTimeout(() => {
    isWaving.value = false;
  }, 2500); // Match this with the CSS animation duration
};

onMounted(() => {
  gsap
    .from(titleRef.value, {
      duration: 2,
      y: 50,
      opacity: 0,
      ease: "power3.out",
    })
    .then(() => {
      wave();
    });
});
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

    @include responsive("md") {
      font-size: 4rem;
    }

    .highlight {
      color: $primary-color;
      white-space: nowrap;
    }
  }

  .subtitle {
    font-size: 1.25rem;
    margin-bottom: 2rem;
    opacity: 0.9;
  }

  .waving-emoji {
    font-size: 50px;
    display: inline-block;
    cursor: pointer;
    transform-origin: bottom center;
  }

  .waving {
    animation: wave 2.5s ease-in-out;
  }

  @keyframes wave {
    0% {
      transform: rotate(0deg);
    }
    10% {
      transform: rotate(14deg);
    } /* The following five values can be played with to make the waving more or less extreme */
    20% {
      transform: rotate(-8deg);
    }
    30% {
      transform: rotate(14deg);
    }
    40% {
      transform: rotate(-4deg);
    }
    50% {
      transform: rotate(10deg);
    }
    60% {
      transform: rotate(0deg);
    } /* Reset for the last half to pause */
    100% {
      transform: rotate(0deg);
    }
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
      background: color.adjust($primary-color, $lightness: -10%);
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
