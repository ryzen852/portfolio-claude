<template>
  <div class="about-page">
    <div class="container py-8">
      <h1 class="text-4xl font-bold mb-8 aos-fade">About Me</h1>
      <div class="grid md:grid-cols-2 gap-8">
        <div class="about-content aos-fade">
          <p class="mb-4 text-lg">
            I'm a full-stack developer passionate about creating beautiful and functional web applications.
          </p>
          <p class="mb-6 text-lg">
            With experience in Vue.js, Node.js, and modern web technologies, I focus on building scalable and user-friendly solutions.
          </p>
          <div class="skills-section">
            <h2 class="text-2xl font-semibold mb-4">Skills</h2>
            <div class="grid grid-cols-2 gap-4">
              <div class="skill-category">
                <h3 class="text-xl mb-2 text-primary">Frontend</h3>
                <ul class="space-y-2">
                  <li v-for="skill in frontendSkills" :key="skill">{{ skill }}</li>
                </ul>
              </div>
              <div class="skill-category">
                <h3 class="text-xl mb-2 text-primary">Backend</h3>
                <ul class="space-y-2">
                  <li v-for="skill in backendSkills" :key="skill">{{ skill }}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="about-image aos-zoom">
          <!-- Profile Image Placeholder -->
          <div class="profile-placeholder">
            <i class="fas fa-user-circle text-6xl text-white"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { AOS } from "aos";
import "aos/dist/aos.css";

const frontendSkills = ["Vue.js", "React", "HTML/CSS", "JavaScript/TypeScript"];
const backendSkills = ["Node.js", "Express", "MongoDB", "PostgreSQL"];

onMounted(() => {
  AOS.init({
    duration: 800,
    easing: "ease-in-out",
    once: true,
  });
});
</script>

<style lang="scss" scoped>
.about-page {
  min-height: 100vh;
}

.about-content {
  p {
    animation: fade-in 0.8s ease-in-out;
  }
}

@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.profile-placeholder {
  background: linear-gradient(135deg, $primary-color, $secondary-color);
  border-radius: 0.5rem;
  height: 16rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.05);
  }
}

.skill-category {
  ul {
    li {
      color: color.adjust($light-text, $lightness: -20%);
      transition: color 0.3s ease;
      &:hover {
        color: $primary-color;
      }
    }
  }
}
</style>
