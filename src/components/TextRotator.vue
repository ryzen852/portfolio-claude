<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const props = defineProps({
  texts: {
    type: Array,
    required: true,
  },
  interval: {
    type: Number,
    default: 3000,
  },
  animationSpeed: {
    type: Number,
    default: 0.5
  }
});

const currentIndex = ref(0);
let intervalId;
const isInitialized = ref(false);

const rotateText = () => {
  currentIndex.value = (currentIndex.value + 1) % props.texts.length;
};

onMounted(() => {
  setTimeout(() => {
    isInitialized.value = true;
    intervalId = setInterval(rotateText, props.interval);
  }, 1500);
});

onUnmounted(() => {
  if (intervalId) clearInterval(intervalId);
});
</script>

<template>
  <div class="text-rotator">
    <div 
      v-if="!isInitialized" 
      class="initial-text"
    >
      {{ texts[0] }}
    </div>
    <div 
      v-else
      class="text" 
      :key="currentIndex"
      :style="{ 
        animationDuration: `${interval}ms`,
        '--animation-speed': `${animationSpeed}s`
      }"
    >
      {{ props.texts[currentIndex] }}
    </div>
  </div>
</template>

<style lang="scss" scoped>
.text-rotator {
  display: inline-block;
  position: relative;
  overflow: hidden;
  height: 1.5em;
  vertical-align: middle;
  min-width: 200px;
}

.initial-text {
  position: relative;
  width: 100%;
  opacity: 1;
  white-space: nowrap;
}

.text {
  position: relative;
  width: 100%;
  transition: all var(--animation-speed) ease-in-out;
  animation: fadeSlideDown infinite;
  white-space: nowrap;
}

@keyframes fadeSlideDown {
  0% {
    opacity: 0;
    transform: translateY(-30px);
  }
  10%, 90% {
    opacity: 1;
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    transform: translateY(30px);
  }
}
</style> 