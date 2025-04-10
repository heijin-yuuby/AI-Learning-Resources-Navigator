<template>
  <div class="llm-platforms">
    <div class="platforms-grid">
      <div v-for="(platform, index) in platforms" :key="platform.name" 
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
            <n-tag v-for="feature in platform.features" :key="feature" size="small" type="info" class="feature-tag">
              {{ feature }}
            </n-tag>
          </div>
          <div class="platform-actions">
            <n-button type="primary" @click="navigateTo(platform.url)" class="visit-button">
              访问平台
            </n-button>
            <n-button v-if="platform.docsUrl" text @click="navigateTo(platform.docsUrl)" class="docs-button">
              查看文档
            </n-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { NButton, NTag } from 'naive-ui';

const platforms = [
  {
    name: 'ChatGPT',
    url: 'https://chat.openai.com',
    docsUrl: 'https://platform.openai.com/docs',
    image: '/src/assets/images/ChatGPT-Logo.svg.png',
    description: 'OpenAI 开发的强大语言模型，能够进行自然对话、回答问题、协助写作和编程等任务。支持 GPT-4 和 GPT-3.5 两个版本，提供不同的能力水平。',
    features: ['自然语言对话', '代码生成', '文本创作', '多语言支持']
  },
  {
    name: 'Google Gemini',
    url: 'https://gemini.google.com',
    docsUrl: 'https://ai.google.dev/docs',
    image: '/src/assets/images/gemini.png',
    description: 'Google 最新推出的多模态 AI 模型，支持文本、图像、音频等多种输入方式。具有强大的推理能力和知识理解能力，可用于各种复杂任务。',
    features: ['多模态交互', '实时信息', '代码生成', '图像理解']
  },
  {
    name: 'Claude',
    url: 'https://claude.ai',
    docsUrl: 'https://docs.anthropic.com/claude',
    image: '/src/assets/images/claude.jpeg',
    description: 'Anthropic 开发的 AI 助手，以其准确性和安全性著称。擅长长文本处理、学术写作和复杂分析，提供详细且可靠的回答。',
    features: ['长文本处理', '学术写作', '代码分析', '安全可靠']
  },
  {
    name: 'Hugging Face',
    url: 'https://huggingface.co',
    docsUrl: 'https://huggingface.co/docs',
    image: '/src/assets/images/huggingface.png',
    description: '领先的开源 AI 模型平台，提供数千个预训练模型和数据集。支持模型训练、部署和分享，是 AI 开发者的重要社区。',
    features: ['开源模型', '模型训练', '社区分享', 'API 部署']
  },
  {
    name: 'Perplexity AI',
    url: 'https://www.perplexity.ai',
    image: '/src/assets/images/5bbeb59b-6362-4a56-b836-4c1a59f24b86.gif',
    description: '基于实时网络搜索的 AI 问答平台，能够提供最新、最准确的信息。结合了搜索引擎和 AI 对话的优势，适合需要最新信息的查询。',
    features: ['实时搜索', '信息溯源', '多源整合', '快速响应']
  },
  {
    name: 'Grok',
    url: 'https://grok.x.ai',
    docsUrl: 'https://grok.x.ai/faq',
    image: '/src/assets/images/grok.png',
    description: 'X开发的AI助手，以其幽默、直率和广泛的知识库著称。擅长回答各类问题，并能访问实时信息。',
    features: ['实时信息', '幽默对话', '创意生成', '网络搜索']
  },
  {
    name:'Deepseek R1',
    url:'https://chat.deepseek.com',
    docsUrl:'https://api-docs.deepseek.com/zh-cn/news/news250120',
    image:'/src/assets/images/deepseek.png',
    description:'深度求索推出的拥有强大的内容推理能力，在数学、代码、自然语言推理等任务上性能与 OpenAI o1 正式版相当',
    features:['内容推理','理解能力','代码能力','写作辅助','开源']
  }
];

const getCardClass = (index) => {
  // Create a visually interesting grid layout based on index
  const patterns = [
    'card-small', // First card is large
    'card-small', // Second is medium
    'card-small', // Third is medium
    'card-small', // Fourth is medium tall
    'card-small', // Fifth is small
    'card-small', // Sixth is small
  ];
  
  return patterns[index % patterns.length];
};

const navigateTo = (url) => {
  window.open(url, '_blank');
};
</script>

<style scoped>
.llm-platforms {
  padding: 10px 0;
  width: 100%;
}

.platforms-grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: auto;
  grid-gap: 20px;
  margin: 0 auto;
}

.platform-card {
  background: white;
  border-radius: 12px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  overflow: hidden;
  position: relative;
}

.platform-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
}

.card-content {
  padding: 20px;
  height: 100%;
  display: flex;
  flex-direction: column;
}

/* Card sizes for different layouts */
.card-large {
  grid-column: span 6;
  grid-row: span 2;
}


.card-small {
  grid-column: span 3;
  grid-row: span 1;
}

.platform-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 15px;
}

.logo-container {
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  border-radius: 8px;
  padding: 4px;
  flex-shrink: 0;
}

.platform-logo {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.platform-name {
  margin: 0;
  font-size: 1.2rem;
  color: var(--primary-color);
  font-weight: 700;
}

.platform-description {
  margin: 0 0 15px 0;
  color: #666;
  font-size: 0.9rem;
  line-height: 1.5;
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
  margin-bottom: 15px;
}

.feature-tag {
  margin-right: 0;
  white-space: nowrap;
}

.platform-actions {
  display: flex;
  gap: 12px;
  margin-top: auto;
}

.visit-button {
  background: linear-gradient(90deg, #7C4DFF 0%, #43A0FF 100%);
  border: none;
  border-radius: 20px;
  flex: 1;
}

.docs-button {
  color: var(--primary-color);
}

@media (max-width: 1200px) {
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
  .card-large {
    grid-column: span 6;
  }
  
  .card-medium, 
  .card-medium-tall,
  .card-small {
    grid-column: span 6;
    grid-row: span 1;
  }
}

@media (max-width: 600px) {
  .platforms-grid {
    grid-template-columns: 1fr;
    grid-gap: 15px;
  }
  
  .platform-card {
    grid-column: span 1 !important;
    grid-row: span 1 !important;
  }
  
  .platform-actions {
    flex-direction: column;
    gap: 10px;
  }
  
  .visit-button, 
  .docs-button {
    width: 100%;
  }
}
</style> 