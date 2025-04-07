<template>
  <div class="about-ai-container">
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
      <h1 class="page-title">关于人工智能</h1>
    </div>
    
    <div class="subpage-cards-container">
      <div class="card-wrapper">
        <InfoCard 
          title="了解发展历史" 
          description="探索人工智能从理论萌芽到深度学习爆发的发展历程"
          :to="{ name: 'ai-history' }"
        >
          <div class="card-icon">
            <n-icon size="48">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path fill="currentColor" d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10s10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8s8 3.589 8 8s-3.589 8-8 8z"/>
                <path fill="currentColor" d="M13 7h-2v5.414l3.293 3.293l1.414-1.414L13 11.586z"/>
              </svg>
            </n-icon>
          </div>
        </InfoCard>
      </div>
      
      <div class="card-wrapper">
        <InfoCard 
          title="你需要知道的AI知识" 
          description="了解人工智能的核心概念和技术原理"
          :to="{ name: 'ai-knowledge' }"
        >
          <div class="card-icon">
            <n-icon size="48">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path fill="currentColor" d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10s10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8s8 3.589 8 8s-3.589 8-8 8z"/>
                <path fill="currentColor" d="M11 11h2v6h-2zm0-4h2v2h-2z"/>
              </svg>
            </n-icon>
          </div>
        </InfoCard>
      </div>
    </div>
  </div>
</template>

<script setup>
import { NIcon, NButton } from 'naive-ui';
import InfoCard from '../components/cards/InfoCard.vue';
</script>

<style scoped>
.about-ai-container {
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
}

.subpage-cards-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 40px;
  margin-top: 40px;
}

.card-wrapper {
  height: 100%;
}

.card-icon {
  display: flex;
  justify-content: center;
  margin-bottom: 24px;
  color: var(--primary-color);
}
</style> 