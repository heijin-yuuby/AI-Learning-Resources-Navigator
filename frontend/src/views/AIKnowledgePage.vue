<template>
  <div class="knowledge-container">
    <div class="page-header">
      <n-button quaternary @click="$router.push('/about-ai')">
        <template #icon>
          <n-icon>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path fill="currentColor" d="M19 11H7.14l3.63-4.36a1 1 0 1 0-1.54-1.28l-5 6a1.19 1.19 0 0 0-.09.15c0 .05 0 .08-.07.13A1 1 0 0 0 4 12a1 1 0 0 0 .07.36c0 .05 0 .08.07.13a1.19 1.19 0 0 0 .09.15l5 6A1 1 0 0 0 10 19a1 1 0 0 0 .77-1.64L7.14 13H19a1 1 0 0 0 0-2z"/>
            </svg>
          </n-icon>
        </template>
        返回
      </n-button>
      <h1 class="page-title">AI核心关键词</h1>
      <p class="page-subtitle">了解人工智能的基本概念和技术原理</p>
    </div>
    
    <div class="content">
      <KeywordsBubble ref="bubbleRef" />
      
      <div class="intro-section card-ready" ref="introSectionRef">
        <h2>什么是人工智能？</h2>
        <p>人工智能（Artificial Intelligence）是指由人类创造的计算机系统</p>
        <br>
        <p>它们能够执行通常需要人类智能才能完成的任务</p>
        <br>
        <p>这些任务包括视觉感知、语音识别、决策制定、语言翻译以及从数据中学习等。</p>
      </div>
      
      <div class="branch-section card-ready" ref="branchSectionRef">
        <h2>人工智能的主要分支</h2>
        <div class="ai-branches">
          <div class="branch-item">
            <h3>机器学习</h3>
            <p>机器学习是AI的一个核心分支，专注于开发能够从数据中学习并做出预测的算法和模型，而无需被明确编程。</p>
          </div>
          
          <div class="branch-item">
            <h3>深度学习</h3>
            <p>深度学习是机器学习的一个子集，使用多层神经网络处理复杂数据，在图像识别、自然语言处理等领域取得了突破性进展。</p>
          </div>
          
          <div class="branch-item">
            <h3>自然语言处理</h3>
            <p>自然语言处理（NLP）专注于使计算机能够理解、解释和生成人类语言，是聊天机器人、翻译和文本分析的基础。</p>
          </div>
          
          <div class="branch-item">
            <h3>计算机视觉</h3>
            <p>计算机视觉使计算机能够识别和处理图像和视频，广泛应用于自动驾驶、医疗诊断和安防系统等领域。</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { NIcon, NButton } from 'naive-ui';
import KeywordsBubble from '../components/cards/KeywordsBubble.vue';
import { ref, onMounted } from 'vue';

// 引用气泡组件和卡片组件
const bubbleRef = ref(null);
const introSectionRef = ref(null);
const branchSectionRef = ref(null);

onMounted(() => {
  // 确保页面加载后立即隐藏所有气泡和卡片
  document.querySelectorAll('.keyword-bubble, .card-ready').forEach(el => {
    el.style.opacity = '0';
  });
  
  // 给页面充分时间加载所有元素
  setTimeout(() => {
    setupBubbles();
    setupCards();
  }, 300);
});

// 设置卡片的动画
function setupCards() {
  const cards = document.querySelectorAll('.card-ready');
  
  // 添加初始状态
  cards.forEach(card => {
    card.style.opacity = '';
  });
  
  // 创建 Intersection Observer
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // 为卡片添加动画
        setTimeout(() => {
          entry.target.classList.add('card-active');
        }, 200);
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.2,
    rootMargin: '0px 0px -50px 0px'
  });

  // 观察卡片
  if (introSectionRef.value) observer.observe(introSectionRef.value);
  if (branchSectionRef.value) observer.observe(branchSectionRef.value);
}

// 设置气泡的初始状态和动画
function setupBubbles() {
  // 选择所有气泡
  const bubbles = document.querySelectorAll('.keyword-bubble');
  
  // 添加初始状态类
  bubbles.forEach(bubble => {
    // 移除可能的内联样式
    bubble.style.opacity = '';
    bubble.classList.add('bubble-ready');
  });
  
  // 为初始视图中已经可见的气泡手动触发动画
  const triggerInitialAnimation = () => {
    bubbles.forEach((bubble, index) => {
      setTimeout(() => {
        bubble.classList.remove('bubble-ready');
        bubble.classList.add('bubble-active');
      }, 120 * index); // 间隔时间
    });
  };
  
  // 立即为可视区域内的气泡触发动画
  triggerInitialAnimation();
  
  // 创建 Intersection Observer 用于处理滚动时进入视图的元素
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      // 仅处理进入视图的元素
      if (entry.isIntersecting) {
        // 停止观察，避免重复触发
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.2,
    rootMargin: '0px 0px -50px 0px'
  });

  // 观察气泡组件
  if (bubbleRef.value && bubbleRef.value.$el) {
    observer.observe(bubbleRef.value.$el);
  }
}
</script>

<style scoped>
.knowledge-container {
  padding: 40px 20px;
  max-width: 1200px;
  margin: 0 auto;
}

.page-header {
  margin-bottom: 40px;
  animation: fadeIn 1s ease-in-out;
}

.page-title {
  font-size: 2.5rem;
  color: var(--accent-yellow);
  margin-top: 20px;
  text-align: center;
  margin-bottom: 16px;
}

.page-subtitle {
  text-align: center;
  color: var(--accent-yellow);
  font-size: 1.2rem;
  max-width: 700px;
  margin: 0 auto;
}

.content {
  margin-top: 40px;
  padding: 20px;
  background-color: var(--card-bg);
  border-radius: 8px;
  box-shadow: var(--shadow-md);
  animation: fadeIn 1.2s ease-in-out;
  transform-origin: center top;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.intro-section,
.branch-section {
  background: var(--card-bg);
  border-radius: 12px;
  padding: 30px;
  box-shadow: var(--shadow-md);
  transition: all 0.6s ease-out;
  margin-top: 30px;
}

.card-ready {
  opacity: 0;
  transform: translateY(30px);
}

.card-active {
  opacity: 1;
  transform: translateY(0);
}

.branch-item {
  background: var(--bg-secondary);
  border-radius: 8px;
  padding: 20px;
  border-left: 4px solid var(--accent-blue);
  margin-bottom: 20px;
  transition: all 0.3s ease;
}

.branch-item:last-child {
  margin-bottom: 0;
}

.ai-branches {
  display: grid;
  gap: 20px;
}

@media (min-width: 768px) {
  .ai-branches {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style> 