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
import '../assets/styles/platforms.css';

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
      'card-small',
      'card-small',
      'card-small',
      'card-small',
  ];
  return patterns[index % patterns.length];
};

const getTagType = (feature) => {
  const typeMap = {
    '开源模型': 'success',
    'API服务': 'info',
    '企业支持': 'warning',
    '安全可靠': 'error',
    '云训练': 'success',
    'AI开发': 'info',
    'AI数据集': 'warning',
    'AI工具': 'success',
    '本地训练': 'error'
  };
  return typeMap[feature] || 'default';
};

const navigateTo = async (url) => {
  const platform = platforms.value.find(p => p.url === url || p.docsUrl === url);
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
/* 样式已移至 assets/styles/platforms.css */
</style> 