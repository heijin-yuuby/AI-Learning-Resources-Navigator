<template>
  <div class="page-container">
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
    
    <div class="content-section">
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
  // 获取分类数据
  if (bubbleRef.value) {
    categories.value = bubbleRef.value.categories;
  }
  
  // 直接设置气泡动画，无需延迟
  setTimeout(() => {
    setupKeywordsBubble();
  }, 100);
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
  
  // 优化动画处理
  bubbles.forEach((bubble, index) => {
    // 添加初始状态类
    bubble.classList.add('bubble-ready');
    
    // 使用较小的延迟值，错开执行动画
    setTimeout(() => {
      bubble.classList.remove('bubble-ready');
      bubble.classList.add('bubble-active');
    }, 80 * index); // 减少延迟时间提高性能
  });
  
  // 创建 Intersection Observer 仅用于处理视口外的气泡
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      // 当元素进入视图时且未激活
      if (entry.isIntersecting && !entry.target.classList.contains('bubble-active')) {
        entry.target.classList.remove('bubble-ready');
        entry.target.classList.add('bubble-active');
        
        // 动画触发后停止观察
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.2,
    rootMargin: '0px 0px -50px 0px'
  });

  // 观察气泡组件，但只观察视口外的元素
  if (bubbleRef.value && bubbleRef.value.$el) {
    if (!isElementInViewport(bubbleRef.value.$el)) {
      observer.observe(bubbleRef.value.$el);
    }
  }
}

// 检查元素是否在视口中的辅助函数
function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}
</script>

<style scoped>
.n-button {
  color: var(--text-light);
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

.content-section {
  margin-top: 20px;
  padding: 20px;
  background-color: var(--card-bg);
  border-radius: 8px;
  box-shadow: var(--shadow-md);
}
</style> 