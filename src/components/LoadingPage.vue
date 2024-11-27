<template>
  <div class="terminal-container">
    <div class="terminal-wrapper">
      <div class="terminal-output" ref="terminalRef">
        <div v-html="output"></div>
        <div class="command-line">
          <span>{{ currentLine }}</span>
          <span v-if="!isLoading" class="cursor" :class="{ typing: isTyping }">▮</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick, onUnmounted } from 'vue';

const output = ref('');
const currentLine = ref('');
const isTyping = ref(false);
const isLoading = ref(false);
const terminalRef = ref(null);
const commandPrefix = "visitor@localhost:~/project % ";

const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));
const random = (min, max) => Math.round(Math.random() * (max - min) + min);

const typeCommand = async (command) => {
  isTyping.value = true;
  for (const char of command) {
    currentLine.value += char;
    await wait(random(50, 100));
  }
  isTyping.value = false;
};

const addToOutput = async (text) => {
  output.value += text;
  await nextTick();
  // Scroll to bottom
  if (terminalRef.value) {
    terminalRef.value.scrollTop = terminalRef.value.scrollHeight;
  }
};

const loadingChars = ['|', '/', '-', '\\'];
//const loadingChars = ['⠋', '⠙', '⠹', '⠸', '⠼', '⠴', '⠦', '⠧', '⠇', '⠏']; // Braille spinner
// const loadingChars = ['▁', '▂', '▃', '▄', '▅', '▆', '▇', '█']; // Progress bar
// const loadingChars = ['Installing dependencies   ', 
//                      'Installing dependencies.  ',
//                      'Installing dependencies.. ',
//                      'Installing dependencies...'];

let loadingInterval;

const startLoading = async (baseText) => {
  let i = 0;
  isLoading.value = true;
  currentLine.value = baseText + " " + loadingChars[0];
  
  loadingInterval = setInterval(() => {
    currentLine.value = baseText + " " + loadingChars[i];
    i = (i + 1) % loadingChars.length;
  }, 200);
};

const stopLoading = () => {
  if (loadingInterval) {
    clearInterval(loadingInterval);
    loadingInterval = null;
  }
  isLoading.value = false;
};

const randomIp = () => {
  return `192.168.${random(1, 255)}.${random(1, 255)}`;
};

const randomPort = () => {
  return random(3000, 5000);
};

// ANSI color codes
const green = (text) => `<span style="color: #00ff00">${text}</span>`;
const dim = (text) => `<span style="opacity: 0.6">${text}</span>`;
const cyan = (text) => `<span style="color: #00ffff">${text}</span>`;
const yellow = (text) => `<span style="color: #ffff00">${text}</span>`;

const updateTerminal = async () => {
  // Initial prompt
  currentLine.value = commandPrefix;
  await wait(500);

  // Type npm install
  await typeCommand("npm install");
  await wait(800);

  // Add command to output and start loading animation
  await addToOutput(`${commandPrefix}npm install\n`);
  currentLine.value = "";
  await startLoading("📦 Installing dependencies");
  await wait(1000);
  stopLoading();

  // Show installation progress with emojis
  await addToOutput(`📦 Installing dependencies...
✨ Dependencies found
🔨 Building fresh packages...

⚡️ added ${green('vue@3.4.0')}
⚡️ added ${green('vue-router@4.2.5')}
⚡️ added ${green('vite@5.0.10')}

✅ Done in ${yellow(`${random(2, 4)}.${random(10, 99)}s`)}
✨ ${yellow(`${random(3, 8)} packages installed`)}

`);

  // Show new prompt and type next command
  currentLine.value = commandPrefix;
  await wait(500);
  await typeCommand("npm run dev");
  await wait(800);

  // Add command and start dev server loading
  await addToOutput(`${commandPrefix}npm run dev\n`);
  currentLine.value = "";
  await startLoading("🚀 Starting dev server");
  await wait(1500);
  stopLoading();

  const port = randomPort();
  const ip = randomIp();

  // Show dev server output
  await addToOutput(`🚀 ${green(`VITE v5.0.10`)} ${dim(`ready in ${random(150, 300)}ms`)}

  ${dim('➜')}  Local:   ${green(`http://localhost:${port}/`)}    🏠
  ${dim('➜')}  Network: ${cyan(`http://${ip}:${port}/`)}  🌍

  ${dim(`⭐️ ready in ${random(150, 300)}ms.`)}

`);

  // Show final prompt
  currentLine.value = commandPrefix;
};

onMounted(async () => {
  const startTime = performance.now();
  await updateTerminal();
  const endTime = performance.now();
  console.log(`Terminal startup took ${(endTime - startTime).toFixed(2)}ms`);
});

// Make sure to clean up the interval when component is unmounted
onUnmounted(() => {
  stopLoading();
});
</script>

<style lang="scss" scoped>
$black: #000000;
$dark: #33202a;
$lighter: #5f5566;
$white: #f5f4f6;
$red: #f05d5e;
$yellow: #fcab10;

body {
  overflow: hidden;
}

.terminal-container {
  background-color: $black;
  background: radial-gradient(
    ellipse at right 34% bottom 5%,
    $dark,
    $black 80%,
    $black
  );
  background-position: left;
  height: 100vh;
  margin: 0;
  overflow: hidden;
  color: $white;
  font: 1.3rem Inconsolata, monospace;
  text-shadow: 0 0 5px $white;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    opacity: 0.3;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: repeating-linear-gradient(
      0deg,
      rgba($black, 1),
      rgba($black, 1) 2px,
      transparent,
      transparent 4px
    );
    pointer-events: none;
  }
  &::before {
    content: "";
    position: absolute;
    z-index: 1000;
    opacity: 0.4;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: radial-gradient(
      ellipse at right 34% bottom 5%,
      transparent 60%,
      $black
    );
    pointer-events: none;
  }
}

.terminal-wrapper {
  padding: 2rem;
  overflow: hidden;
  height: 100%;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
}

.terminal-output {
  white-space: pre-wrap;
  height: 100%;
  overflow-y: auto;
  padding-bottom: 2rem;
  font: 1.3rem Inconsolata, monospace;
  color: $white;
  text-shadow: 0 0 5px $white;
  
  // Hide scrollbar for Chrome, Safari and Opera
  &::-webkit-scrollbar {
    display: none;
  }
  
  // Hide scrollbar for IE, Edge and Firefox
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;     /* Firefox */
}

.command-line {
  display: inline-block;
  width: 100%;
}

.cursor {
  display: inline-block;
  margin-left: 2px;
  animation: blink 1s steps(1) infinite;
  
  &.typing {
    animation: none;
    opacity: 1;
  }
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}
</style>
