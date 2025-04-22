/*设置应用的主题和语言*/
<script setup>
import { NConfigProvider, NMessageProvider } from 'naive-ui';
import { provide, ref, onMounted, onBeforeUnmount } from 'vue';
// 样式已在 main.js 中导入

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
    <n-config-provider>
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
