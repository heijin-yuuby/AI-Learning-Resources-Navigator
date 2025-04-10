/* 
  这个组件用于展示LLM集成平台，
  它使用Naive UI的组件库来实现。
*/

<template>
  <div class="llm-platforms">
    <div class="platforms-grid">
      <div v-for="(platform, index) in platforms" 
           :key="platform.name" 
           class="platform-card" 
           :class="getCardClass(index)">
        <div class="card-content">
          <div class="platform-header">
            <div class="logo-container">
              <img :src="platform.image" :alt="platform.name" class="platform-logo">
            </div>
            <h3 class="platform-name">{{ platform.name }}</h3>
          </div>
          <p class="platform-description">{{ platform.description }}</p>
          <div class="platform-features">
            <n-tag v-for="feature in platform.features" 
                   :key="feature" 
                   size="small" 
                   :type="getTagType(feature)" 
                   class="feature-tag">
              {{ feature }}
            </n-tag>
          </div>
          <div class="platform-actions">
            <n-button type="primary" 
                      @click="navigateTo(platform.url)" 
                      class="visit-button"
                      :loading="platform.loading">
              访问平台
            </n-button>
            <n-button v-if="platform.docsUrl" 
                      text 
                      @click="navigateTo(platform.docsUrl)" 
                      class="docs-button">
              官方文档
            </n-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { NButton, NTag } from 'naive-ui';

const platforms = ref([
  {
    name: 'Hugging Face',
    url: 'https://huggingface.co',
    docsUrl: 'https://huggingface.co/docs',
    image: '/src/assets/images/huggingface.png',
    description: '领先的开源 AI 模型平台，提供数千个预训练模型和数据集。支持模型训练、部署和分享，是 AI 开发者的重要社区。',
    features: ['开源模型', '模型训练', '社区分享', 'API 部署'],
    loading: false
  },
  {
    name: '阿里云百炼',
    url: 'https://bailian.console.aliyun.com/?spm=5176.29619931.J__Z58Z6CX7MY__Ll8p1ZOR.1.74cd521cvLI7CW#/home',
    docsUrl: 'https://bailian.console.aliyun.com/?spm=5176.29619931.J__Z58Z6CX7MY__Ll8p1ZOR.1.74cd521cvLI7CW&tab=doc#/doc',
    image: '/src/assets/images/alicloud.png',
    description: '领先的开源 AI 模型平台，提供数千个预训练模型和数据集。支持模型训练、部署和分享，是 AI 开发者的重要社区。',
    features: ['开源模型', '模型训练', '社区分享', 'API 部署'],
    loading: false
  },
  {
    name:'lambda',
    url:'https://lambda.com',
    docsUrl:'https://lambda.com/docs',
    image:'/src/assets/images/lambda.png',
    description:'lambda是一个AI开发平台，提供了一系列的AI开发工具和资源。',
    features:['云训练','AI开发','AI数据集','AI工具'],
    loading:false
  },
  {
    name:'ollama',
    url:'https://ollama.com',
    docsUrl:'https://ollama.com/docs',
    image:'/src/assets/images/ollama.png',
    description:'ollama是一个AI开发平台，提供了一系列的AI开发工具和资源。',
    features:['AI开发','本地训练','AI数据集','AI工具'],
    loading:false
  }
  


]);

const getCardClass = (index) => {
  const patterns = [
    'card-large',
    'card-medium',
    'card-medium-tall',
    'card-small'
  ];
  return patterns[index % patterns.length];
};

const getTagType = (feature) => {
  const typeMap = {
    '开源模型': 'success',
    'API服务': 'info',
    '企业支持': 'warning',
    '安全可靠': 'error'
  };
  return typeMap[feature] || 'default';
};

const navigateTo = async (url) => {
  const platform = platforms.value.find(p => p.url === url);
  if (platform) {
    platform.loading = true;
    try {
      await window.open(url, '_blank');
    } finally {
      platform.loading = false;
    }
  }
};
</script>

<style scoped>
.llm-platforms {
  padding: 20px 0;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
}

.platforms-grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 24px;
  margin: 0 auto;
}

.platform-card {
  background: white;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
  position: relative;
  border: 1px solid rgba(0, 0, 0, 0.05);
}

.platform-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1);
}

.card-content {
  padding: 24px;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.card-large {
  grid-column: span 6;
  grid-row: span 2;
}

.card-medium {
  grid-column: span 4;
  grid-row: span 2;
}

.card-medium-tall {
  grid-column: span 4;
  grid-row: span 2;
}

.card-small {
  grid-column: span 3;
  grid-row: span 1;
}

.platform-header {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 20px;
}

.logo-container {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  border-radius: 12px;
  padding: 8px;
  flex-shrink: 0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.platform-logo {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.platform-name {
  margin: 0;
  font-size: 1.25rem;
  color: var(--primary-color);
  font-weight: 700;
}

.platform-description {
  margin: 0 0 20px 0;
  color: #4a5568;
  font-size: 0.95rem;
  line-height: 1.6;
  flex-grow: 1;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.card-large .platform-description,
.card-medium-tall .platform-description {
  -webkit-line-clamp: 5;
}

.platform-features {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 20px;
}

.feature-tag {
  margin-right: 0;
  white-space: nowrap;
  border-radius: 6px;
}

.platform-actions {
  display: flex;
  gap: 12px;
  margin-top: auto;
}

.visit-button {
  background: linear-gradient(135deg, #2a3883 0%, #2e6cab 100%);
  border: none;
  border-radius: 8px;
  flex: 1;
  height: 40px;
  font-weight: 600;
  transition: all 0.3s ease;
}

.visit-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(42, 56, 131, 0.2);
}

.docs-button {
  color: var(--primary-color);
  height: 40px;
}

@media (max-width: 1200px) {
  .platforms-grid {
    grid-gap: 20px;
  }
  
  .card-large {
    grid-column: span 6;
  }
  
  .card-medium, 
  .card-medium-tall,
  .card-small {
    grid-column: span 4;
  }
}

@media (max-width: 900px) {
  .platforms-grid {
    grid-gap: 16px;
  }
  
  .card-large,
  .card-medium, 
  .card-medium-tall,
  .card-small {
    grid-column: span 6;
    grid-row: span 1;
  }
}

@media (max-width: 600px) {
  .llm-platforms {
    padding: 16px;
  }
  
  .platforms-grid {
    grid-template-columns: 1fr;
    grid-gap: 16px;
  }
  
  .platform-card {
    grid-column: span 1 !important;
    grid-row: span 1 !important;
  }
  
  .platform-actions {
    flex-direction: column;
    gap: 8px;
  }
  
  .visit-button, 
  .docs-button {
    width: 100%;
  }
  
  .card-content {
    padding: 16px;
  }
}
</style> 