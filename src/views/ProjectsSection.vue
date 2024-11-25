<template>
  <section id="projects" class="section">
    <div class="projects-page">
      <div class="container py-8">
        <h1 class="text-4xl font-bold mb-8">My Projects</h1>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <!-- Project cards will go here -->
          <div class="project-card" v-for="i in 6" :key="i">
            <div class="bg-opacity-10 bg-white rounded-lg p-6">
              <h3 class="text-xl font-semibold mb-2">Project {{ i }}</h3>
              <p class="text-gray-400 mb-4">
                A brief description of project {{ i }} and its key features.
              </p>
              <div class="flex gap-2 mb-4">
                <span class="tech-tag">Vue</span>
                <span class="tech-tag">Node.js</span>
                <span class="tech-tag">MongoDB</span>
              </div>
              <div class="flex gap-4">
                <a href="#" class="text-primary hover:text-blue-400">
                  <i class="fab fa-github"></i> Code
                </a>
                <a href="#" class="text-primary hover:text-blue-400">
                  <i class="fas fa-external-link-alt"></i> Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.projects-page {
  min-height: 100vh;
}

.project-card {
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
}

.tech-tag {
  background: rgba($primary-color, 0.2);
  color: $primary-color;
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.875rem;
}
</style>
