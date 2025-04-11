<script setup>
import { NConfigProvider, NMessageProvider, darkTheme } from 'naive-ui';
import { provide, ref } from 'vue';
// 样式已在 main.js 中导入

// Set theme based on system preference (null for light, darkTheme for dark)
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
const theme = ref(prefersDark ? darkTheme : null);

// Global theme variables for Naive UI
provide('themeVars', {
  primaryColor: '#1F466B',
  primaryColorHover: '#2A5880',
  borderRadius: '8px',
  textColorBase: '#1F466B',
  // 为Naive UI组件添加字体
  fontFamily: 'var(--font-styrene-b)'
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
/* 全局样式补充 */
.n-button {
  font-family: var(--font-styrene-b) !important;
}

.n-input, .n-select, .n-dropdown {
  font-family: var(--font-styrene-b) !important;
}
</style>
