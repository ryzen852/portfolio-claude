<template>
  <section id="home" class="hero">
    <!--<Vue3Lottie
      :animationData="lottieOptions.animationData"
      :autoplay="lottieOptions.autoplay"
      :loop="lottieOptions.loop"
      class="lottie-background"
    />-->
    <div class="container mx-auto px-4">
      <h1 ref="titleRef" class="title text-primary">
        <div class="text-2xl mb-4">Hi, My name is</div>
        <TypeWriter
          class="highlight turret-road-extrabold text-4xl"
          :texts="['Karl Chan']"
          :type-speed="150"
          :delete-speed="100"
          :delay-between="4000"
          :initial-delay="1000"
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
        <GlitchedWriter
          class="roboto-mono-roles"
          :text="roles"
          preset="neo"
          :options="writerOptions"
          :queue="queueOptions"
        />
      </h2>
      <p class="subtitle">Building beautiful web experiences with modern technologies</p>
      <div class="cta-buttons">
        <a href="/#projects" class="btn primary">View Projects</a>
        <a href="/#contact" class="btn secondary">Get in touch</a>
      </div>
      <div class="tech-stack">
        <h3>Tech Stack</h3>
        <div class="tech-icons">
          <i v-for="icon in techIcons" :key="icon.name" :class="icon.class" :title="icon.name"></i>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { gsap } from 'gsap';
import { Vue3Lottie } from 'vue3-lottie';
import homeBackground from '@/assets/animations/Animation - 1731482932424.json'; // Path to your JSON file
import TypeWriter from '@/components/TypeWriter.vue';
import TextRotator from '@/components/TextRotator.vue';
import GlitchedWriter, { presets } from 'vue-glitched-writer';

const roles = ref(['Full Stack Developer', 'Frontend Developer', 'Backend Developer']);
const writerOptions = {
  letterize: false,
  //glyphs: 'QWERTYUIOPASDFGHJKLZXCVBNM!@#$%^&*()1234567890',
};
const queueOptions = {
  interval: 1000,
  loop: true,
};
const lottieOptions = {
  animationData: homeBackground,
  autoplay: true,
  loop: true,
};
const titleRef = ref(null);

const techIcons = ref([
  { name: 'JavaScript', class: 'devicon-javascript-plain' },
  { name: 'Vue.js', class: 'devicon-vuejs-plain' },
  { name: 'Node.js', class: 'devicon-nodejs-plain' },
  { name: 'Vite', class: 'devicon-vite-original-wordmark' },
  { name: 'SQL Server', class: 'devicon-microsoftsqlserver-plain-wordmark' },
  { name: 'Docker', class: 'devicon-docker-plain' },
  { name: 'Git', class: 'devicon-git-plain' },
]);

// // Control the emoji wave animation with a cooldown to prevent multiple activations
// const handleWaveClick = () => {
//   if (!isWaving.value) {
//     isWaving.value = true;
//     setTimeout(() => (isWaving.value = false), 2000); // Set cooldown to match animation duration
//   }
// };

onMounted(() => {
  gsap.from(titleRef.value, {
    duration: 2,
    y: 50,
    opacity: 0,
    ease: 'power3.out',
  });
  // .then(() => {
  //   handleWaveClick(); // Trigger the wave once after mounting
  // });
});
</script>

<style lang="scss" scoped></style>
