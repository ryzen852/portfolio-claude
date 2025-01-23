<template>
  <section id="proejct" class="contact-section section" tabindex="-1">
    <div class="container mx-auto px-4">
      <!-- <h1 class="text-4xl font-bold mb-8">My Projects</h1> -->
      <div class="text-box-inline">
        <span class="subtitle">My Projects</span>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div v-for="p in projects" :key="p" class="project-card">
            <div class="bg-opacity-10 bg-white rounded-lg p-6">
              <h3 class="text-xl font-semibold mb-2">{{ p.name }}</h3>
              <p class="text-gray-400 mb-4">
                {{ p.description }}
              </p>
              <div class="flex gap-2 mb-4">
                <template v-for="t in p.techstack" :key="t">
                  <span class="tech-tag">{{ t }}</span>
                </template>
              </div>
              <div class="flex gap-4">
                <template v-if="p.src !== ''">
                  <a href="#" class="text-primary hover:text-blue-400">
                    <i class="fab fa-github"></i> Code
                  </a>
                </template>
                <template v-if="p.url !== ''">
                  <a :href="p.url" class="text-primary hover:text-blue-400" target="_blank">
                    <i class="fas fa-external-link-alt"></i> Link
                  </a>
                </template>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const projects = [
  {
    name: 'Sports Subventn Management System',
    techstack: ['XML', 'JavaScript', 'MSSQL'],
    image: '',
    description:
      'A internal system for any sports association under the Leisure and Cultural Services Department to manage funding.',
    url: '',
    src: '',
  },
  {
    name: 'Credit Card Reconciliation System',
    techstack: ['HTML', 'JavaScript', 'MSSQL'],
    image: '',
    description:
      'A internal system built for Maxims Hong Kong to find out the outstanding record. ',
    url: '',
    src: '',
  },
  {
    name: 'K11 transaction Engine',
    techstack: ['.NET', 'Vue', 'MSSQL'],
    image: '',
    description:
      'An internal API for calculating customer shopping points to redeem free parking hours at K11 shopping mall',
    url: '',
    src: '',
  },
  {
    name: 'Travel Smart',
    techstack: ['ASP.NET', 'Bootstrap', 'MSSQL'],
    image: '',
    description: 'A travel insurance product',
    url: 'https://www.bluecross.com.hk/en/Travel-Smart/Application',
    src: '',
  },
  {
    name: 'EatSmart',
    techstack: ['ASP.NET', 'Bootstrap', 'JQuery'],
    image: '',
    description: "Hong Kong Department of Health's Healthy Eating Information Website.",
    url: 'https://restaurant.eatsmart.gov.hk/',
    src: '',
  },
  {
    name: 'StartSmart',
    techstack: ['ASP.NET', 'Bootstrap', 'JQuery'],
    image: '',
    description: 'Hong Kong Department of Health Child Health Information website.',
    url: 'https://www.startsmart.gov.hk/',
    src: '',
  },
];
</script>

<style lang="scss" scoped></style>
