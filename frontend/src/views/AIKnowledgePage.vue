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
      <h1 class="page-title">核心AI知识</h1>
      <p class="page-subtitle">了解人工智能的基本概念和技术原理</p>
    </div>
    
    <div class="content">
      <KeywordsBubble ref="bubbleRef" />
    </div>
  </div>
</template>

<script setup>
import { NIcon, NButton } from 'naive-ui';
import KeywordsBubble from '../components/cards/KeywordsBubble.vue';
import { ref, onMounted } from 'vue';

// 引用气泡组件
const bubbleRef = ref(null);

onMounted(() => {
  // 在组件挂载时为气泡添加初始状态类
  setTimeout(() => {
    const bubbles = document.querySelectorAll('.keyword-bubble');
    bubbles.forEach(bubble => {
      bubble.classList.add('bubble-ready');
    });
    
    // 创建 Intersection Observer
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        // 当元素进入视图时
        if (entry.isIntersecting) {
          // 获取所有气泡
          const bubbles = document.querySelectorAll('.keyword-bubble');
          
          // 为每个气泡添加动画，错开执行
          bubbles.forEach((bubble, index) => {
            setTimeout(() => {
              bubble.classList.remove('bubble-ready');
              bubble.classList.add('bubble-active');
            }, 120 * index);
          });
          
          // 动画触发后停止观察
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.2,
      rootMargin: '0px 0px -50px 0px'
    });

    // 观察气泡组件
    if (bubbleRef.value) {
      observer.observe(bubbleRef.value.$el);
    }
  }, 0); // 使用setTimeout确保DOM已完全渲染
});
</script>

<style scoped>
.knowledge-container {
  padding: 40px 20px;
  max-width: 1200px;
  margin: 0 auto;
}

.page-header {
  margin-bottom: 40px;
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
}
</style> 