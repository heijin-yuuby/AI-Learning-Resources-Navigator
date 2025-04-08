<template>
  <div class="about-ai-page">
    <Navigation />
    
    <div class="page-header">
      <div class="container">
        <h1 class="page-title">人工智能</h1>
        <p class="page-subtitle">了解人工智能的基本概念、发展历史和最新应用</p>
      </div>
    </div>
    
    <div class="container main-content">
      <div class="nav-grid">
        <div class="nav-card" @click="$router.push('/ai-history')">
          <n-icon size="48" color="var(--primary-color)">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path fill="currentColor" d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8s8 3.6 8 8s-3.6 8-8 8zm.5-13H11v6l5.2 3.2l.8-1.3l-4.5-2.7V7z"/>
            </svg>
          </n-icon>
          <h3>AI 发展历史</h3>
          <p>从图灵测试到深度学习，探索AI的发展历程</p>
        </div>
        
        <div class="nav-card" @click="$router.push('/ai-knowledge')">
          <n-icon size="48" color="var(--primary-color)">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path fill="currentColor" d="M12 2L2 7l10 5l10-5l-10-5zm0 10L2 7v10l10 5l10-5V7l-10 5zm0 10l-9-4.5v-5l9 4.5l9-4.5v5l-9 4.5z"/>
            </svg>
          </n-icon>
          <h3>核心AI知识</h3>
          <p>了解机器学习、神经网络和自然语言处理等核心概念</p>
        </div>
        
        <div class="nav-card" @click="$router.push('/llm-platforms')">
          <n-icon size="48" color="var(--primary-color)">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path fill="currentColor" d="M20 3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-9 14H4v-5h7v5zm0-7H4V7h7v3zm9 7h-7v-8h7v8z"/>
            </svg>
          </n-icon>
          <h3>AI平台导航</h3>
          <p>探索和访问各种强大的AI语言模型平台</p>
        </div>
      </div>
      
      <div class="content-grid">
        <div class="ai-intro">
          <h2>什么是人工智能？</h2>
          <p>人工智能（Artificial Intelligence，简称AI）是指由人类创造的计算机系统，它们能够执行通常需要人类智能才能完成的任务。这些任务包括视觉感知、语音识别、决策制定、语言翻译以及从数据中学习等。</p>
        </div>
        
        <div class="branch-section">
          <h2>人工智能的主要分支</h2>
          <div class="ai-branches">
            <div class="branch-card">
              <h3>机器学习</h3>
              <p>机器学习是AI的一个核心分支，专注于开发能够从数据中学习并做出预测的算法和模型，而无需被明确编程。</p>
            </div>
            
            <div class="branch-card">
              <h3>深度学习</h3>
              <p>深度学习是机器学习的一个子集，使用多层神经网络处理复杂数据，在图像识别、自然语言处理等领域取得了突破性进展。</p>
            </div>
            
            <div class="branch-card">
              <h3>自然语言处理</h3>
              <p>自然语言处理（NLP）专注于使计算机能够理解、解释和生成人类语言，是聊天机器人、翻译和文本分析的基础。</p>
            </div>
            
            <div class="branch-card">
              <h3>计算机视觉</h3>
              <p>计算机视觉使计算机能够识别和处理图像和视频，广泛应用于自动驾驶、医疗诊断和安防系统等领域。</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { NIcon } from 'naive-ui';
import Navigation from '../components/layout/Navigation.vue';
</script>

<style scoped>
.about-ai-page {
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
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.nav-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.nav-card {
  background: var(--card-bg);
  border-radius: 12px;
  padding: 25px;
  box-shadow: var(--shadow-md);
  transition: all 0.3s ease;
  cursor: pointer;
  text-align: center;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.nav-card:hover {
  transform: translateY(-10px);
  box-shadow: var(--shadow-lg);
}

.nav-card h3 {
  font-size: 1.2rem;
  margin: 15px 0 10px;
  color: var(--text-primary);
}

.nav-card p {
  color: var(--text-secondary);
  font-size: 0.9rem;
  line-height: 1.5;
}

.content-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
}

.ai-intro, .branch-section {
  background: var(--card-bg);
  border-radius: 12px;
  padding: 30px;
  box-shadow: var(--shadow-md);
}

.ai-intro h2, .branch-section h2 {
  color: var(--text-primary);
  font-size: clamp(1.5rem, 4vw, 1.8rem);
  margin-bottom: 20px;
}

.ai-intro p {
  color: var(--text-secondary);
  line-height: 1.7;
  font-size: clamp(0.9rem, 2vw, 1rem);
}

.ai-branches {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}

.branch-card {
  background: var(--bg-secondary);
  border-radius: 8px;
  padding: 20px;
  border-left: 4px solid var(--accent-blue);
  height: 100%;
}

.branch-card h3 {
  font-size: 1.2rem;
  margin-bottom: 10px;
  color: var(--text-primary);
}

.branch-card p {
  font-size: 0.9rem;
  color: var(--text-secondary);
  margin-bottom: 0;
  line-height: 1.6;
}

@media (max-width: 1024px) {
  .content-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }
}

@media (max-width: 768px) {
  .page-header {
    padding: 30px 0;
  }
  
  .nav-grid {
    grid-template-columns: 1fr;
    gap: 15px;
  }
  
  .nav-card {
    padding: 20px 15px;
  }
  
  .ai-branches {
    grid-template-columns: 1fr;
    gap: 15px;
  }
  
  .ai-intro, .branch-section {
    padding: 25px 15px;
  }
  
  .branch-card {
    padding: 15px;
  }
}

@media (min-width: 769px) and (max-width: 1024px) {
  .nav-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style> 