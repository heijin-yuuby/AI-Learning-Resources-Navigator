<script setup>
import { NConfigProvider, NMessageProvider, darkTheme } from 'naive-ui';
import { provide, ref, onMounted, onBeforeUnmount } from 'vue';
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

// 管理全局语言状态
const appLanguage = ref(localStorage.getItem('language') || 'zh');

// 监听语言变更事件
const handleLanguageChange = (event) => {
  appLanguage.value = event.detail.language;
  document.documentElement.setAttribute('lang', appLanguage.value);
};

onMounted(() => {
  // 初始化设置HTML的lang属性
  document.documentElement.setAttribute('lang', appLanguage.value);
  window.addEventListener('language-changed', handleLanguageChange);
});

onBeforeUnmount(() => {
  window.removeEventListener('language-changed', handleLanguageChange);
});
</script>

<template>
  <div class="app" :class="{'lang-en': appLanguage === 'en'}">
    <n-config-provider :theme="theme">
      <n-message-provider>
        <router-view />
      </n-message-provider>
    </n-config-provider>
  </div>
</template>

<style>
/* 全局样式补充 */
.n-button {
  font-family: var(--font-styrene-b) !important;
}

.n-input, .n-select, .n-dropdown {
  font-family: var(--font-styrene-b) !important;
}

html, body {
  margin: 0;
  padding: 0;
  height: 100%;
  background-color: var(--bg-primary);
}

.app {
  height: 100%;
}

/* 英文版的一些特定样式调整 */
.lang-en .feature-title,
.lang-en .section-title {
  letter-spacing: normal;
}
</style>
