<template>
  <section id="contact" class="section">
    <div class="contact-page">
      <div class="container py-8">
        <h1 class="text-4xl font-bold mb-8">Contact Me</h1>
        <div class="grid md:grid-cols-2 gap-8">
          <div class="contact-form">
            <form @submit.prevent="handleSubmit" class="space-y-6">
              <div class="form-group">
                <label for="name" class="block mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  v-model="form.name"
                  class="w-full bg-opacity-10 bg-white rounded p-2"
                  required
                />
              </div>
              <div class="form-group">
                <label for="email" class="block mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  v-model="form.email"
                  class="w-full bg-opacity-10 bg-white rounded p-2"
                  required
                />
              </div>
              <div class="form-group">
                <label for="message" class="block mb-2">Message</label>
                <textarea
                  id="message"
                  v-model="form.message"
                  rows="5"
                  class="w-full bg-opacity-10 bg-white rounded p-2"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                class="bg-primary hover:bg-blue-600 text-white px-6 py-2 rounded transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
          <div class="contact-info">
            <div class="space-y-6">
              <div class="contact-item">
                <h3 class="text-xl font-semibold mb-2">Email</h3>
                <a href="mailto:your.email@example.com" class="text-primary hover:text-blue-400">
                  your.email@example.com
                </a>
              </div>
              <div class="contact-item">
                <h3 class="text-xl font-semibold mb-2">Social</h3>
                <div class="flex gap-4">
                  <a href="#" class="text-2xl text-primary hover:text-blue-400">
                    <i class="fab fa-github"></i>
                  </a>
                  <a href="#" class="text-2xl text-primary hover:text-blue-400">
                    <i class="fab fa-linkedin"></i>
                  </a>
                  <a href="#" class="text-2xl text-primary hover:text-blue-400">
                    <i class="fab fa-twitter"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive } from 'vue';

const form = reactive({
  name: '',
  email: '',
  message: '',
});

const handleSubmit = () => {
  // Handle form submission
  console.log('Form submitted:', form);
};
</script>

<style lang="scss" scoped>
.contact-page {
  min-height: 100vh;
}

.form-group {
  input,
  textarea {
    background: color.adjust($dark-bg, $lightness: 5%);
    border: 1px solid color.adjust($dark-bg, $lightness: 10%);
    color: $light-text;

    &:focus {
      border-color: $primary-color;
      outline: none;
    }
  }
}

.contact-item {
  a {
    transition: color 0.3s ease;
  }
}
</style>
