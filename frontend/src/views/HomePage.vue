<template>
  <div class="home-container">
    <div class="hero-section">
      <h1 class="hero-title">AI 知识导览</h1>
      <p class="hero-subtitle">探索人工智能，了解前沿技术</p>
    </div>
    
    <div class="cards-container">
      <div class="card-wrapper">
        <InfoCard 
          title="关于人工智能" 
          description="了解人工智能的发展历史和核心知识点"
          :to="{ name: 'about-ai' }"
        >
          <div class="card-icon">
            <n-icon size="48">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path fill="currentColor" d="M21.928 11.607c-.202-.488-.635-.605-.928-.633V8c0-1.103-.897-2-2-2h-6V4.61c.305-.274.5-.668.5-1.11a1.5 1.5 0 0 0-3 0c0 .442.195.836.5 1.11V6H5c-1.103 0-2 .897-2 2v2.997l-.082.006A1 1 0 0 0 1.99 12v2a1 1 0 0 0 1 1H3v5c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2v-5a1 1 0 0 0 1-1v-1.938a1.006 1.006 0 0 0-.072-.455zM5 20V8h14l.001 3.996L19 12v2l.001.005l.001 5.995H5z"/>
                <ellipse fill="currentColor" cx="8.5" cy="12" rx="1.5" ry="2"/>
                <ellipse fill="currentColor" cx="15.5" cy="12" rx="1.5" ry="2"/>
                <path fill="currentColor" d="M8 16h8v2H8z"/>
              </svg>
            </n-icon>
          </div>
        </InfoCard>
      </div>
      
      <div class="card-wrapper">
        <InfoCard 
          title="体验人工智能" 
          description="亲自尝试最新AI模型，感受智能技术的魅力"
          :to="{ name: 'experience-ai' }"
        >
          <div class="card-icon">
            <n-icon size="48">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path fill="currentColor" d="M20 7h-4V4c0-1.103-.897-2-2-2h-4c-1.103 0-2 .897-2 2v3H4c-1.103 0-2 .897-2 2v6c0 1.103.897 2 2 2h4v3c0 1.103.897 2 2 2h4c1.103 0 2-.897 2-2v-3h4c1.103 0 2-.897 2-2V9c0-1.103-.897-2-2-2zM10 4h4v3h-4V4zM4 9h16l.002 6H4V9zm10 11h-4v-3h4v3z"/>
                <path fill="currentColor" d="m15.707 12.707l-3 3a.999.999 0 1 1-1.414-1.414l3-3a.999.999 0 1 1 1.414 1.414z"/>
              </svg>
            </n-icon>
          </div>
        </InfoCard>
      </div>
    </div>
  </div>
</template>

<script setup>
import { NIcon } from 'naive-ui';
import InfoCard from '../components/cards/InfoCard.vue';
</script>

<style scoped>
.home-container {
  padding: 60px 20px;
  max-width: 1200px;
  margin: 0 auto;
}

.hero-section {
  text-align: center;
  margin-bottom: 60px;
}

.hero-title {
  font-size: 3rem;
  margin-bottom: 16px;
  color: var(--primary-color);
}

.hero-subtitle {
  font-size: 1.3rem;
  color: #666;
}

.cards-container {
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