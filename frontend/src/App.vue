<script setup>
import { NConfigProvider, NMessageProvider, darkTheme } from 'naive-ui';
import { provide, ref } from 'vue';
import './assets/main.css';

// Set theme based on system preference (null for light, darkTheme for dark)
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
const theme = ref(prefersDark ? darkTheme : null);

// Global theme variables for Naive UI
provide('themeVars', {
  primaryColor: '#1F466B',
  primaryColorHover: '#2A5880',
  borderRadius: '8px',
  textColorBase: '#1F466B'
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
/* All styles moved to assets/main.css */
</style>
