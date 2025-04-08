<template>
  <div class="experience-container">
    <div class="page-header">
      <n-button quaternary @click="$router.push('/')">
        <template #icon>
          <n-icon>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path fill="currentColor" d="M19 11H7.14l3.63-4.36a1 1 0 1 0-1.54-1.28l-5 6a1.19 1.19 0 0 0-.09.15c0 .05 0 .08-.07.13A1 1 0 0 0 4 12a1 1 0 0 0 .07.36c0 .05 0 .08.07.13a1.19 1.19 0 0 0 .09.15l5 6A1 1 0 0 0 10 19a1 1 0 0 0 .77-1.64L7.14 13H19a1 1 0 0 0 0-2z"/>
            </svg>
          </n-icon>
        </template>
        返回首页
      </n-button>
      <h1 class="page-title">体验人工智能</h1>
      <p class="page-subtitle">亲自体验AI的强大能力</p>
    </div>
    
    <div class="content">
      <n-alert title="功能开发中" type="info">
        AI体验功能正在开发中，敬请期待...
      </n-alert>
    </div>
  </div>
</template>

<script setup>
import { NIcon, NButton, NAlert } from 'naive-ui';
</script>

<style scoped>
.experience-container {
  padding: 40px 20px;
  max-width: 1200px;
  margin: 0 auto;
}

.page-header {
  margin-bottom: 40px;
}

.page-title {
  font-size: 2.5rem;
  color: var(--primary-color);
  margin-top: 20px;
  text-align: center;
  margin-bottom: 16px;
}

.page-subtitle {
  text-align: center;
  color: #666;
  font-size: 1.2rem;
  max-width: 700px;
  margin: 0 auto;
}

.content {
  margin-top: 40px;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
}
</style> 