<template>
  <TerminalSplashScreen
    v-if="!isTerminalAnimationComplete"
    @loading-complete="onTerminalAnimationComplete"
  />
  <Suspense v-else>
    <template #default>
      <div class="app">
        <NavBar />
        <main class="h-full">
          <Index />
        </main>
        <AppFooter />
        <ScrollToTop />
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
import TerminalSplashScreen from '@/components/TerminalSplashScreen.vue';
import LoadingSpinner from '@/components/LoadingSpinner.vue';
import ScrollToTop from '@/components/ScrollToTop.vue';
const Index = defineAsyncComponent(() => import('@/views/Index.vue'));
const NavBar = defineAsyncComponent(() => import('@/components/NavBar.vue'));
const AppFooter = defineAsyncComponent(() => import('@/components/AppFooter.vue'));

const isTerminalAnimationComplete = ref(false);
const onTerminalAnimationComplete = () => {
  console.log('Terminal animation complete!');
  isTerminalAnimationComplete.value = true;
};
</script>

<style lang="scss"></style>
