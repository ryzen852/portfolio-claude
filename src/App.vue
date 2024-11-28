<template>
  <TerminalIntro
    v-if="!isTerminalAnimationComplete"
    @loading-complete="onTerminalAnimationComplete"
  />
  <Suspense v-else>
    <template #default>
      <div class="app">
        <NavBar />
        <main class="main-content">
          <HomeSection />
          <AboutSection />
          <ProjectsSection />
          <ContactSection />
        </main>
        <AppFooter />
      </div>
    </template>
    <template #fallback>
      <div class="loading-screen">
        <LoadingSpinner />
      </div>
    </template>
  </Suspense>
</template>

<script setup>
import { ref, defineAsyncComponent } from 'vue';
import TerminalIntro from '@/components/TerminalIntro.vue';
import LoadingSpinner from '@/components/LoadingSpinner.vue';

const isTerminalAnimationComplete = ref(false);

const onTerminalAnimationComplete = () => {
  console.log('Terminal animation complete!');
  isTerminalAnimationComplete.value = true;
};

const HomeSection = defineAsyncComponent(() => import('@/views/HomeSection.vue'));

const AboutSection = defineAsyncComponent(() => import('@/views/AboutSection.vue'));
const ProjectsSection = defineAsyncComponent(() => import('@/views/ProjectsSection.vue'));
const ContactSection = defineAsyncComponent(() => import('@/views/ContactSection.vue'));
const NavBar = defineAsyncComponent(() => import('@/components/NavBar.vue'));
const AppFooter = defineAsyncComponent(() => import('@/components/AppFooter.vue'));
</script>

<style lang="scss">
@use '@/styles/_main.scss';

.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main-content {
  flex: 1;
  padding-top: 80px;
  width: 100%;
}

.loading-screen {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: $dark-bg;
}
</style>
