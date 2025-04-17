<template>
  <div class="home-page">
    <Navigation />
    
    <div class="hero-section">
      <div class="hero-content">
        <h1 class="hero-title">AI Navigator</h1>
        <p class="hero-subtitle">让你深度了解ai的导航站</p>
        <div class="hero-buttons">
          <n-button type="primary" size="large" class="primary-button" @click="$router.push('/about-ai')" color="#1F466B">
            了解 AI
          </n-button>
          <n-button text size="large" class="secondary-button" @click="$router.push('/llm-platforms')">
            浏览平台
          </n-button>
        </div>
      </div>
    </div>
    
    <div class="features-section">
      <div class="section-header">
        <h2 class="section-title">探索 AI 世界</h2>
        <p class="section-subtitle">从历史了解过去，从知识把握现在，从平台预见未来</p>
      </div>
      
      <div class="mosaic-layout">
        <div class="feature-block secondary-feature" @click="$router.push('/ai-history')" ref="historyCard">
          <div class="feature-content">
            <div class="feature-icon">
              <n-icon size="48" color="var(--primary-color)">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10s10-4.5 10-10S17.5 2 12 2zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8s8 3.6 8 8s-3.6 8-8 8zm.5-13H11v6l5.2 3.2l.8-1.3l-4.5-2.7V7z"/>
                </svg>
              </n-icon>
            </div>
            <h3 class="feature-title">AI 发展历史</h3>
            <p class="feature-description">探索人工智能从理论萌芽到现代应用的发展历程，了解AI技术的关键里程碑和突破性时刻。</p>
          </div>
        </div>
        
        <div class="feature-block secondary-feature" @click="$router.push('/ai-knowledge')" ref="knowledgeCard">
          <div class="feature-content">
            <div class="feature-icon">
              <n-icon size="48" color="var(--primary-color)">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M12 2L2 7l10 5l10-5l-10-5zm0 10L2 7v10l10 5l10-5V7l-10 5zm0 10l-9-4.5v-5l9 4.5l9-4.5v5l-9 4.5z"/>
                </svg>
              </n-icon>
            </div>
            <h3 class="feature-title">核心 AI 知识</h3>
            <p class="feature-description">了解人工智能的基本概念和技术原理</p>
          </div>
        </div>
        
        <div class="feature-block secondary-feature" @click="$router.push('/llm-platforms')" ref="platformsCard">
          <div class="feature-content">
            <div class="feature-icon">
              <n-icon size="48" color="var(--primary-color)">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M20 3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-9 14H4v-5h7v5zm0-7H4V7h7v3zm9 7h-7v-8h7v8z"/>
                </svg>
              </n-icon>
            </div>
            <h3 class="feature-title">AI 平台导航</h3>
            <p class="feature-description">探索和访问各种强大的 AI 语言模型平台</p>
          </div>
        </div>
        
        <div class="feature-block tertiary-feature" @click="$router.push('/about-ai')" ref="aboutCard">
          <div class="feature-content">
            <div class="feature-icon">
              <n-icon size="48" color="var(--primary-color)">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2zm0 18c4.42 0 8-3.58 8-8s-3.58-8-8-8-8 3.58-8 8 3.58 8 8 8zm1-13h-2v6h2V7zm0 8h-2v2h2v-2z"/>
                </svg>
              </n-icon>
            </div>
            <h3 class="feature-title">关于 AI</h3>
            <p class="feature-description">全面了解人工智能领域</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { NIcon, NButton } from 'naive-ui';
import Navigation from '../components/layout/Navigation.vue';
import { ref, onMounted } from 'vue';

// References to the feature cards
const historyCard = ref(null);
const knowledgeCard = ref(null);
const platformsCard = ref(null);
const aboutCard = ref(null);

onMounted(() => {
  // Create an Intersection Observer
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      // When the element is in view
      if (entry.isIntersecting) {
        // Add the animation class
        entry.target.classList.add('animate-float-up');
        // Unobserve after animation is triggered
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.2, // Trigger when 20% of the element is visible
    rootMargin: '0px 0px -50px 0px' // Adjust when the animation triggers
  });

  // Observe each card with a slight delay between them
  setTimeout(() => observer.observe(historyCard.value), 100);
  setTimeout(() => observer.observe(knowledgeCard.value), 300);
  setTimeout(() => observer.observe(platformsCard.value), 500);
  setTimeout(() => observer.observe(aboutCard.value), 700);
});
</script>

<style scoped>
.home-page {
  min-height: 100vh;
  background: var(--bg-primary);
  padding-top: 70px; /* Add padding for fixed navigation */
}

.hero-section {
  min-height: 500px;
  height: calc(100vh - 70px);
  max-height: 800px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--primary-gradient);
  padding: 0 20px;
  position: relative;
  overflow: hidden;
}

.hero-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at 30% 40%, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0) 70%);
  pointer-events: none;
}

.hero-content {
  max-width: 800px;
  text-align: center;
  color: rgb(247, 241, 241);
  z-index: 1;
  padding: 0 20px;
}

.hero-title {
  font-size: clamp(2.5rem, 8vw, 4rem);
  color: var(--bg-primary);
  font-weight: 700;
  margin-bottom: 1rem;
  text-shadow: 0 2px 4px rgba(22, 19, 19, 0.2);
  animation: fadeInUp 1s ease;
}

.hero-subtitle {
  font-size: clamp(1rem, 4vw, 1.5rem);
  margin-bottom: 2rem;
  color: var(--bg-primary);
  animation: fadeInUp 1s ease 0.2s both;
}

.hero-buttons {
  display: flex;
  gap: 16px;
  justify-content: center;
  animation: fadeInUp 1s ease 0.4s both;
}

.primary-button {
  background: var(--primary-gradient);
  border: none;
  border-radius: 30px;
  padding: 0 32px;
  height: 50px;
  font-size: 1rem;
  transition: all 0.3s ease;
}

.primary-button:hover {
  background:rgb(91, 78, 78);
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
}

.secondary-button {
  color: var(--text-light);
  border: 2px solid var(--border-color);
  border-radius: 30px;
  padding: 0 32px;
  height: 50px;
  font-size: 1rem;
  transition: all 0.3s ease;
}

.secondary-button:hover {
  background: rgba(251, 242, 242, 0.971);
  transform: translateY(-2px);
}

.features-section {
  padding: 60px 20px;
  max-width: 1200px;
  margin: 0 auto;
}

.section-header {
  text-align: center;
  margin-bottom: 40px;
}

.section-title {
  font-size: clamp(1.8rem, 5vw, 2.5rem);
  color: var(--text-primary);
  margin-bottom: 1rem;
}

.section-subtitle {
  font-size: clamp(1rem, 3vw, 1.2rem);
  color: var(--text-secondary);
  max-width: 700px;
  margin: 0 auto;
  padding: 0 20px;
}

/* Mosaic Layout */
.mosaic-layout {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: auto auto;
  grid-gap: 20px;
}

.feature-block {
  background: var(--card-bg);
  border-radius: 12px;
  box-shadow: var(--shadow-md);
  transition: all 0.3s ease;
  cursor: pointer;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.feature-block:hover {
  transform: translateY(-10px);
  box-shadow: var(--shadow-lg);
}

.main-feature {
  grid-column: span 6;
  grid-row: span 2;
}

.secondary-feature {
  grid-column: span 6;
  grid-row: span 1;
}

.tertiary-feature {
  grid-column: span 6;
  grid-row: span 1;
}

.feature-content {
  padding: 30px;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.feature-icon {
  margin-bottom: 20px;
  color: var(--primary-color);
}

.feature-title {
  font-size: 1.5rem;
  margin-bottom: 12px;
  color: var(--text-primary);
}

.feature-description {
  color: var(--text-secondary);
  line-height: 1.6;
  flex-grow: 1;
}

/* Responsive Adjustments */
@media (max-width: 1024px) {
  .main-feature {
    grid-column: span 12;
  }
  
  .secondary-feature {
    grid-column: span 6;
  }
  
  .tertiary-feature {
    grid-column: span 6;
  }
}

@media (max-width: 768px) {
  .hero-section {
    min-height: 400px;
    padding: 80px 0;
  }
  
  .hero-buttons {
    flex-direction: column;
    width: 100%;
    max-width: 280px;
    margin: 0 auto;
  }
  
  .secondary-button,
  .primary-button {
    width: 100%;
  }
  
  .features-section {
    padding: 40px 20px;
  }
  
  .mosaic-layout {
    grid-template-columns: 1fr;
  }
  
  .main-feature,
  .secondary-feature,
  .tertiary-feature {
    grid-column: span 1;
    grid-row: span 1;
  }
  
  .feature-content {
    padding: 20px;
  }
}
</style> 