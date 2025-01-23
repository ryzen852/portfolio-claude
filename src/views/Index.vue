<template>
  <HomeSection />
  <AboutSection />
  <ExperienceSection />
  <ProjectsSection />

  <ContactSection />
</template>

<script setup>
import { defineAsyncComponent } from 'vue';
import HomeSection from '@/views/HomeSection.vue';

const AboutSection = defineAsyncComponent(() => import('@/views/AboutSection.vue'));
const ExperienceSection = defineAsyncComponent(() => import('@/views/ExperienceSection.vue'));
const ProjectsSection = defineAsyncComponent(() => import('@/views/ProjectsSection.vue'));
const ContactSection = defineAsyncComponent(() => import('@/views/ContactSection.vue'));
</script>
