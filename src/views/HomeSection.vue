<template>
  <section id="home" class="hero">
    <!--<Vue3Lottie
      :animationData="lottieOptions.animationData"
      :autoplay="lottieOptions.autoplay"
      :loop="lottieOptions.loop"
      class="lottie-background"
    />-->
    <div class="container">
      <h1 class="title" ref="titleRef">
        <div class="text-2xl mb-4">Hi, My name is</div>
        <TypeWriter
          class="highlight turret-road-extrabold"
          :texts="['Karl Chan']"
          :typeSpeed="150"
          :deleteSpeed="100"
          :delayBetween="4000"
          :initialDelay="1000"
        />
        <!-- <span
          class="waving-emoji"
          :class="{ waving: isWaving }"
          @click.self.prevent="handleWaveClick"
          ref="emojiRef"
        >
          👋
        </span> -->
        <br />
      </h1>
      <h2 class="intro-description">
        I'm a
        <TextRotator :texts="roles" :interval="3000" :animationSpeed="1" />
      </h2>
      <p class="subtitle">
        Building beautiful web experiences with modern technologies
      </p>
      <div class="cta-buttons">
        <a href="/#projects" class="btn primary">View Projects</a>
        <a href="/#contact" class="btn secondary">Get in touch</a>
      </div>
      <div class="tech-stack">
        <h3>Tech Stack</h3>
        <div class="tech-icons">
          <i
            v-for="icon in techIcons"
            :key="icon.name"
            :class="icon.class"
            :title="icon.name"
          ></i>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { gsap } from "gsap";
import { Vue3Lottie } from "vue3-lottie";
import homeBackground from "@/assets/animations/Animation - 1731482932424.json"; // Path to your JSON file
import TypeWriter from "@/components/TypeWriter.vue";
import TextRotator from "@/components/TextRotator.vue";

const lottieOptions = {
  animationData: homeBackground,
  autoplay: true,
  loop: true,
};
const titleRef = ref(null);

const techIcons = ref([
  { name: "JavaScript", class: "devicon-javascript-plain" },
  { name: "Vue.js", class: "devicon-vuejs-plain" },
  { name: "Node.js", class: "devicon-nodejs-plain" },
  { name: "Vite", class: "devicon-vite-original-wordmark" },
  { name: "SQL Server", class: "devicon-microsoftsqlserver-plain-wordmark" },
  { name: "Docker", class: "devicon-docker-plain" },
  { name: "Git", class: "devicon-git-plain" },
]);
const roles = ref([
  "Full Stack Developer",
  "Frontend Developer",
  "Backend Developer",
]);

// Control the emoji wave animation with a cooldown to prevent multiple activations
const handleWaveClick = () => {
  if (!isWaving.value) {
    isWaving.value = true;
    setTimeout(() => (isWaving.value = false), 2000); // Set cooldown to match animation duration
  }
};

onMounted(() => {
  gsap.from(titleRef.value, {
    duration: 2,
    y: 50,
    opacity: 0,
    ease: "power3.out",
  });
  // .then(() => {
  //   handleWaveClick(); // Trigger the wave once after mounting
  // });
});
</script>

<style lang="scss" scoped>
.hero {
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  align-items: center;
  padding: 6rem 0;

  .turret-road-extrabold {
    font-family: "Turret Road", sans-serif;
    font-weight: 800;
    font-style: normal;
  }

  .intro-description {
    font-size: $font-size-lg;
  }

  .title {
    margin-bottom: 1.5rem;
    line-height: 1.2;

    .highlight {
      color: $primary-color;
      white-space: nowrap;
    }
  }

  .subtitle {
    font-size: $font-size-lg;
    margin-bottom: 2rem;
    opacity: 0.5;
  }

  // .waving-emoji {
  //   font-size: 50px;
  //   display: inline-block;
  //   cursor: pointer;
  //   transform-origin: bottom center;
  //   transition: transform 0.2s ease;
  // }

  // .waving {
  //   animation: wave 2s ease-in-out;
  // }

  // @keyframes wave {
  //   0% {
  //     transform: rotate(0deg);
  //   }
  //   10% {
  //     transform: rotate(14deg);
  //   }
  //   20% {
  //     transform: rotate(-8deg);
  //   }
  //   30% {
  //     transform: rotate(14deg);
  //   }
  //   40% {
  //     transform: rotate(-4deg);
  //   }
  //   50% {
  //     transform: rotate(10deg);
  //   }
  //   60% {
  //     transform: rotate(0deg);
  //   }
  //   100% {
  //     transform: rotate(0deg);
  //   }
  // }
}

.lottie-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: -1;
}

.cta-buttons {
  display: flex;
  gap: 1rem;
  margin-bottom: 3rem;

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
}

.tech-stack {
  h3 {
    margin-bottom: 1rem;
    font-size: 1.25rem;
  }

  .tech-icons {
    display: flex;
    gap: 2rem;
    font-size: $font-size-xl;

    i {
      transition: all 0.3s ease;

      &:hover {
        color: $primary-color;
        transform: translateY(-5px);
      }
    }
  }
}
</style>
