<template>
  <div class="platforms-page">
    <Navigation />
    
    <div class="page-header">   
      <div class="container">
        <h1 class="page-title">LLM平台导航</h1>
        <p class="page-subtitle">探索和访问各种强大的 AI 语言模型平台</p>
      </div>
    </div>
    
    <div class="container main-content">
      <div class="intro-section">
        <div class="intro-content">
          <h2>LLM平台导航</h2>
          <p>大型语言模型（LLM）已经成为人工智能领域的关键技术，为自然语言理解和生成提供了强大能力。这里我们汇集了当前最先进的AI平台，帮助您探索和体验不同的AI能力。</p>
        </div>
      </div>
      
      <LLMPlatforms />
    </div>
  </div>
</template>

<script setup>
import Navigation from '../components/layout/Navigation.vue';
import LLMPlatforms from '../components/LLMPlatforms.vue';
</script>

<style scoped>
.platforms-page {
  min-height: 100vh;
  background: var(--bg-primary);
  padding-top: 70px; /* Add padding for fixed navigation */
}

.page-header {
  background: var(--primary-gradient);
  padding: 40px 0;
  color: var(--text-light);
  text-align: center;
}

.page-title {
  font-size: clamp(2rem, 6vw, 3rem);
  margin-bottom: 1rem;
  color: var(--text-light);
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.page-subtitle {
  font-size: clamp(0.9rem, 3vw, 1.2rem);
  max-width: 600px;
  margin: 0 auto;
  color: var(--text-light);
  padding: 0 20px;
}

.main-content {
  padding: 40px 20px 60px;
  max-width: 1400px;
  margin: 0 auto;
}

.intro-section {
  margin-bottom: 40px;
}

.intro-content {
  background: var(--card-bg);
  border-radius: 12px;
  padding: 25px 20px;
  box-shadow: var(--shadow-md);
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
}

.intro-content h2 {
  font-size: clamp(1.5rem, 4vw, 1.8rem);
  color: var(--text-primary);
  margin-bottom: 15px;
}

.intro-content p {
  color: var(--text-secondary);
  line-height: 1.7;
  font-size: clamp(0.9rem, 2vw, 1rem);
}

@media (max-width: 768px) {
  .page-header {
    padding: 30px 0;
  }
  
  .intro-content {
    padding: 20px 15px;
  }
  
  .main-content {
    padding: 30px 15px 50px;
  }
}

@media (min-width: 769px) and (max-width: 1024px) {
  .main-content {
    padding: 40px 30px 60px;
  }
}
</style> 