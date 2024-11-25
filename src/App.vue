<template>
  <div class="app">
    <Suspense>
      <template #default>
        <div>
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
  </div>
</template>

<script setup>
import { defineAsyncComponent } from "vue";
import LoadingSpinner from "@/components/LoadingSpinner.vue";

const HomeSection = defineAsyncComponent({
  loader: () =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(import("@/views/HomeSection.vue"));
      }, 2000);
    }),
  delay: 200,
});
const AboutSection = defineAsyncComponent(() =>
  import("@/views/AboutSection.vue")
);
const ProjectsSection = defineAsyncComponent(() =>
  import("@/views/ProjectsSection.vue")
);
const ContactSection = defineAsyncComponent(() =>
  import("@/views/ContactSection.vue")
);
const NavBar = defineAsyncComponent(() => import("@/components/NavBar.vue"));
const AppFooter = defineAsyncComponent(() =>
  import("@/components/AppFooter.vue")
);
</script>

<style lang="scss">
// Import main styles
@use "@/styles/_main.scss";

.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main-content {
  flex: 1;
  padding-top: 80px; // Height of the fixed navbar
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
