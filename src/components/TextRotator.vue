<script setup>
import { ref, onMounted, onUnmounted } from 'vue'; // Add onUnmounted for cleanup

const props = defineProps({
  texts: {
    type: Array,
    required: true,
  },
  interval: {
    type: Number,
    default: 3000,
  },
  animationSpeed: {  // Add animation speed prop
    type: Number,
    default: 0.5
  }
});

const currentIndex = ref(0);
let intervalId; // Store interval ID for cleanup

const rotateText = () => {
  currentIndex.value = (currentIndex.value + 1) % props.texts.length;
};

onMounted(() => {
  intervalId = setInterval(rotateText, props.interval);
});

// Cleanup interval on component unmount
onUnmounted(() => {
  if (intervalId) clearInterval(intervalId);
});
</script>

<template>
  <div class="text-rotator">
    <div 
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
  min-width: 200px; // Add minimum width to prevent layout shifts
}

.text {
  position: relative;
  width: 100%;
  transition: transform var(--animation-speed) ease-in-out;
  transform: translateY(-100%);
  animation: slideDown infinite;
  white-space: nowrap; // Prevent text wrapping
}

@keyframes slideDown {
  0%, 20% {
    transform: translateY(-100%);
  }
  25%, 75% {
    transform: translateY(0);
  }
  80%, 100% {
    transform: translateY(100%);
  }
}
</style> 