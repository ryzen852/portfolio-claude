<script setup>
import { ref, onMounted } from 'vue';

const props = defineProps({
  texts: {
    type: Array,
    required: true,
  },
  typeSpeed: {
    type: Number,
    default: 150,
  },
  deleteSpeed: {
    type: Number,
    default: 75,
  },
  delayBetween: {
    type: Number,
    default: 4000,
  },
  initialDelay: {
    type: Number,
    default: 1000,
  },
});

const displayText = ref('');

const typeText = async () => {
  // Initial delay before starting
  await new Promise(resolve => setTimeout(resolve, props.initialDelay));

  while (true) {
    const text = props.texts[0]; // Since we're only using one text: 'Karl Chan'
    
    // Type the text
    for (let i = 0; i <= text.length; i++) {
      displayText.value = text.substring(0, i);
      await new Promise(resolve => setTimeout(resolve, props.typeSpeed));
    }
    
    // Pause at full text
    await new Promise(resolve => setTimeout(resolve, props.delayBetween));
    
    // Delete the text
    for (let i = text.length; i >= 0; i--) {
      displayText.value = text.substring(0, i);
      await new Promise(resolve => setTimeout(resolve, props.deleteSpeed));
    }
    
    // Small pause before restarting
    await new Promise(resolve => setTimeout(resolve, props.deleteSpeed * 2));
  }
};

onMounted(() => {
  typeText();
});
</script>

<template>
  <span>{{ displayText }}</span>
</template> 