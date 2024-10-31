<template>
    <div class="about-page">
      <div class="container py-8">
        <h1 class="text-4xl font-bold mb-8">About Me</h1>
        <div class="grid md:grid-cols-2 gap-8">
          <div class="about-content">
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
                    <li>Vue.js</li>
                    <li>React</li>
                    <li>HTML/CSS</li>
                    <li>JavaScript/TypeScript</li>
                  </ul>
                </div>
                <div class="skill-category">
                  <h3 class="text-xl mb-2 text-primary">Backend</h3>
                  <ul class="space-y-2">
                    <li>Node.js</li>
                    <li>Express</li>
                    <li>MongoDB</li>
                    <li>PostgreSQL</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="about-image">
            <!-- Placeholder for profile image -->
            <div class="bg-gradient-to-r from-primary to-blue-600 rounded-lg h-64 flex items-center justify-center">
              <i class="fas fa-user-circle text-6xl text-white"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <style lang="scss" scoped>
  .about-page {
    min-height: 100vh;
  }
  
  .skill-category {
    li {
      color: darken($light-text, 20%);
      transition: color 0.3s ease;
      
      &:hover {
        color: $primary-color;
      }
    }
  }
  </style>