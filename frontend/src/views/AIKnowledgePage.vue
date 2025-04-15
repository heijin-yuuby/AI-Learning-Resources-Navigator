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
    
    <div class="filter-section">
      <button class="filter-toggle" @click="isFilterExpanded = !isFilterExpanded">
        {{ isFilterExpanded ? '收起分类 ▲' : '展开分类 ▼' }}
      </button>
      
      <div class="category-filter" :class="{ 'expanded': isFilterExpanded }">
        <div class="custom-tabs">
          <button 
            v-for="category in categories" 
            :key="category.id" 
            class="custom-tab" 
            :class="{ 'active': selectedCategory === category.id }"
            @click="selectedCategory = category.id"
          >
            {{ category.name }}
          </button>
        </div>
      </div>
    </div>
    
    <div class="content">
      <KeywordsBubble ref="bubbleRef" />
    </div>
  </div>
</template>

<script setup>
import { NIcon, NButton, NRadioGroup, NRadioButton } from 'naive-ui';
import KeywordsBubble from '../components/cards/KeywordsBubble.vue';
import { ref, onMounted, computed, watch } from 'vue';

// 引用气泡组件
const bubbleRef = ref(null);
const selectedCategory = ref('all');
const categories = ref([]);
const isFilterExpanded = ref(false);

// 获取所有关键词和分类
onMounted(() => {
  // 确保页面加载后立即隐藏所有气泡
  document.querySelectorAll('.keyword-bubble').forEach(bubble => {
    bubble.style.opacity = '0';
  });
  
  // 获取分类数据
  if (bubbleRef.value) {
    categories.value = bubbleRef.value.categories;
  }
  
  // 给页面充分时间加载所有元素
  setTimeout(() => {
    setupKeywordsBubble();
  }, 300); // 增加延迟确保页面完全加载
});

// 监听分类变化
watch(selectedCategory, (newCategory) => {
  filterKeywordsByCategory(newCategory);
  // 选择分类后自动收起分类栏
  if (isFilterExpanded.value) {
    setTimeout(() => {
      isFilterExpanded.value = false;
    }, 300);
  }
});

// 根据分类筛选关键词
function filterKeywordsByCategory(category) {
  // 获取所有气泡
  const bubbles = document.querySelectorAll('.keyword-bubble');
  
  if (category === 'all') {
    // 显示所有气泡
    bubbles.forEach(bubble => {
      bubble.style.display = '';
    });
  } else {
    // 根据分类显示对应气泡
    bubbles.forEach((bubble, index) => {
      // 通过索引获取关键词数据
      const keyword = bubbleRef.value.keywords[index];
      if (keyword && keyword.category === category) {
        bubble.style.display = '';
      } else {
        bubble.style.display = 'none';
      }
    });
  }
  
  // 重新应用气泡动画
  setupKeywordsBubble();
}

// 设置关键词气泡的初始状态和动画
function setupKeywordsBubble() {
  // 获取所有可见的气泡
  const bubbles = document.querySelectorAll('.keyword-bubble:not([style*="display: none"])');
  
  // 添加初始状态类
  bubbles.forEach(bubble => {
    // 移除可能的内联样式，防止气泡被一直隐藏
    bubble.style.opacity = '';
    bubble.classList.add('bubble-ready');
  });
  
  // 创建 Intersection Observer
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      // 当元素进入视图时
      if (entry.isIntersecting) {
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
.n-button {
  color:aliceblue;
}

.filter-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
}

.filter-toggle {
  background-color: var(--accent-blue);
  color: var(--accent-yellow);
  border: none;
  padding: 8px 16px;
  border-radius: var(--border-radius-md);
  cursor: pointer;
  font-weight: 600;
  margin-bottom: 10px;
  transition: all 0.3s ease;
}

.filter-toggle:hover {
  background-color: rgba(31, 70, 107, 0.9);
}

.category-filter {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease, padding 0.3s ease, opacity 0.3s ease;
  opacity: 0;
  padding: 0;
  width: 100%;
  color: var(--accent-yellow);
  background-color: var(--accent-blue);
  border-radius: var(--border-radius-md);
  box-shadow: var(--shadow-sm);
}

.category-filter.expanded {
  max-height: 200px;
  opacity: 1;
  padding: 12px;
}

.custom-tabs {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 8px;
}

.custom-tab {
  background-color: transparent;
  border: 1px solid var(--accent-yellow);
  color: var(--accent-yellow);
  padding: 6px 14px;
  border-radius: var(--border-radius-sm);
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s ease;
}

.custom-tab:hover {
  background-color: rgba(245, 230, 191, 0.2);
}

.custom-tab.active {
  background-color: rgba(245, 230, 191, 0.3);
  font-weight: 700;
}

.content {
  margin-top: 20px;
  padding: 20px;
  background-color: var(--card-bg);
  border-radius: 8px;
  box-shadow: var(--shadow-md);
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
</style> 