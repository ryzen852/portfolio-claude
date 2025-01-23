<template>
  <!-- start of about section -->
  <section id="about" class="about-section section">
    <div class="container mx-auto px-4">
      <div class="section-content grid grid-cols-12">
        <!-- about image -->
        <div class="about-img col-span-12 lg:col-span-6">
          <div class="layer">
            <img src="@/assets/about-img.png" />
          </div>
          <div class="layer">
            <img src="@/assets/about-img.png" />
          </div>
        </div>

        <!-- text box -->
        <div class="about-text col-span-12 lg:col-span-6">
          <div class="text-box-inline">
            <span class="subtitle">about me</span>

            <h2>Introduction</h2>

            <p>
              Hi, my name is Karl. I enjoy creating elegant front-end interfaces and robust back-end
              systems. I’m passionate about clean, maintainable code, optimizing performance, and
              delivering solutions that balance functionality and design. Whether it's developing
              full-stack architectures, integrating APIs, or enhancing UX, I thrive on solving
              complex challenges. Let’s connect and build something great together!
            </p>

            <div class="btns-container">
              <router-link to="#contact" class="btn btn-primary"> Hire Me </router-link>

              <router-link download to="#" class="btn btn-outline-light"> Download CV </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- end of about section -->
</template>

<script setup></script>

<style lang="scss" scoped></style>
