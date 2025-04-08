<template>
  <div class="llm-platforms">
    <n-grid :cols="3" :x-gap="12" :y-gap="8" responsive="screen">
      <n-grid-item v-for="platform in platforms" :key="platform.name">
        <n-card class="platform-card">
          <template #header>
            <div class="platform-header">
              <div class="logo-container">
                <img :src="platform.image" :alt="platform.name" class="platform-logo">
              </div>
              <h3 class="platform-name">{{ platform.name }}</h3>
            </div>
          </template>
          <div class="platform-content">
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
        </n-card>
      </n-grid-item>
    </n-grid>
  </div>
</template>

<script setup>
import { NCard, NGrid, NGridItem, NButton, NTag } from 'naive-ui';

const platforms = [
  {
    name: 'ChatGPT',
    url: 'https://chat.openai.com',
    docsUrl: 'https://platform.openai.com/docs',
    image: '/src/assets/images/images.png',
    description: 'OpenAI 开发的强大语言模型，能够进行自然对话、回答问题、协助写作和编程等任务。支持 GPT-4 和 GPT-3.5 两个版本，提供不同的能力水平。',
    features: ['自然语言对话', '代码生成', '文本创作', '多语言支持']
  },
  {
    name: 'Google Gemini',
    url: 'https://gemini.google.com',
    docsUrl: 'https://ai.google.dev/docs',
    image: '/src/assets/images/images (1).png',
    description: 'Google 最新推出的多模态 AI 模型，支持文本、图像、音频等多种输入方式。具有强大的推理能力和知识理解能力，可用于各种复杂任务。',
    features: ['多模态交互', '实时信息', '代码生成', '图像理解']
  },
  {
    name: 'Claude',
    url: 'https://claude.ai',
    docsUrl: 'https://docs.anthropic.com/claude',
    image: '/src/assets/images/Claude_AI_logo.svg',
    description: 'Anthropic 开发的 AI 助手，以其准确性和安全性著称。擅长长文本处理、学术写作和复杂分析，提供详细且可靠的回答。',
    features: ['长文本处理', '学术写作', '代码分析', '安全可靠']
  },
  {
    name: 'Hugging Face',
    url: 'https://huggingface.co',
    docsUrl: 'https://huggingface.co/docs',
    image: '/src/assets/images/截屏2025-04-08 12.09.53.png',
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
    image: '/src/assets/images/Grok-feb-2025-logo.svg.png',
    description: 'X公司（前Twitter）开发的AI助手，以其幽默、直率和广泛的知识库著称。擅长回答各类问题，并能访问实时信息。',
    features: ['实时信息', '幽默对话', '创意生成', '网络搜索']
  }
];

const navigateTo = (url) => {
  window.open(url, '_blank');
};
</script>

<style scoped>
.llm-platforms {
  padding: 20px;
}

.platform-card {
  height: 100%;
  transition: transform 0.2s;
}

.platform-card:hover {
  transform: translateY(-5px);
}

.platform-header {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px;
}

.logo-container {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  border-radius: 8px;
  padding: 4px;
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
  flex: 1;
}

.platform-content {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.platform-description {
  margin: 0;
  color: #666;
  font-size: 0.9rem;
  line-height: 1.5;
}

.platform-features {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.feature-tag {
  margin-right: 4px;
}

.platform-actions {
  display: flex;
  gap: 12px;
  margin-top: auto;
}

.visit-button {
  flex: 1;
}

.docs-button {
  color: var(--primary-color);
}

@media (max-width: 768px) {
  .n-grid {
    --cols: 1 !important;
  }
}
</style> 