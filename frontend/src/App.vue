<script setup>
import { NConfigProvider, NMessageProvider, darkTheme } from 'naive-ui';
import { provide, ref } from 'vue';

const theme = ref(null); // Use null for light theme or darkTheme for dark mode

// Global theme variables
provide('themeVars', {
  primaryColor: '#7C4DFF',
  secondaryColor: '#43A0FF'
});
</script>

<template>
  <n-config-provider :theme="theme">
    <n-message-provider>
      <router-view />
    </n-message-provider>
  </n-config-provider>
</template>

<style>
:root {
  --primary-color: #7C4DFF;
  --secondary-color: #43A0FF;
  --dark-color: #1A0B33;
  --light-color: #f5f7fa;
  --gradient-primary: linear-gradient(90deg, var(--primary-color) 0%, var(--secondary-color) 100%);
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body {
  font-family: 'Inter', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #333;
  font-size: 16px;
  scroll-behavior: smooth;
}

h1, h2, h3, h4, h5, h6 {
  font-weight: 700;
}

a {
  text-decoration: none;
  color: var(--primary-color);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.gradient-text {
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.page-transition-enter-active,
.page-transition-leave-active {
  transition: opacity 0.3s ease;
}

.page-transition-enter-from,
.page-transition-leave-to {
  opacity: 0;
}
</style>
