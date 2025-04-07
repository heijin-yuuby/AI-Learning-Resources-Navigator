<template>
  <div class="keywords-container">
    <div class="keywords-header">
      <h2>AI 发展关键词</h2>
      <p>了解人工智能发展中的关键概念和技术术语</p>
    </div>
    
    <div class="keywords-bubbles">
      <div 
        v-for="(keyword, index) in keywords" 
        :key="index"
        class="keyword-bubble"
        :class="{ 'active': activeKeyword === keyword.id }"
        :style="{ 
          left: `${keyword.position.x}%`, 
          top: `${keyword.position.y}%`,
          transform: `scale(${activeKeyword === keyword.id ? 1.1 : 1})`
        }"
        @click="toggleKeyword(keyword.id)"
      >
        <span>{{ keyword.title }}</span>
      </div>
    </div>
    
    <div class="keyword-details" v-if="activeKeyword">
      <div class="keyword-card">
        <div class="keyword-card-header">
          <h3>{{ getKeywordById(activeKeyword).title }}</h3>
          <button class="close-btn" @click="activeKeyword = null">×</button>
        </div>
        <div class="keyword-card-content">
          <div v-html="getKeywordById(activeKeyword).content"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const activeKeyword = ref(null);

// 关键词数据
const keywords = [
  {
    id: 'llm',
    title: 'LLM',
    position: { x: 15, y: 20 },
    content: `
      <p>LLM（大语言模型，Large Language Model）是一类基于深度学习的人工智能模型，如广为人知的 GPT（Generative Pretrained Transformer）系列、LLaMA（Large Language Model Meta AI）等。</p>
      <p>这些模型通过在海量文本数据上进行无监督预训练，学习到语言的结构、语义和语法等知识。它们具备强大的语言理解与生成能力，能完成诸如文本创作、问答系统、机器翻译等多种自然语言处理任务。</p>
      <p>以 GPT-4 为例，它可以理解复杂的问题指令，生成逻辑连贯、内容丰富的文本回答，甚至在创意写作、代码生成等方面表现出色，为智能交互和内容生产带来了革命性的变化。</p>
    `
  },
  {
    id: 'distillation',
    title: '蒸馏',
    position: { x: 75, y: 30 },
    content: `
      <p>蒸馏（Distillation）是一种模型压缩技术，旨在将一个复杂、庞大的教师模型（通常性能强大但计算成本高）的知识迁移到一个较小、更高效的学生模型中。</p>
      <p>其核心思想是让学生模型学习教师模型的输出（软标签）而非仅仅学习真实标签。比如，在图像分类任务中，教师模型对一张图片的预测可能是对各类别的概率分布，学生模型通过学习这种概率分布，能更好地捕捉到数据中的细微特征和关系。</p>
      <p>通过蒸馏，学生模型在保持较高性能的同时，减少了模型参数和计算量，使得在资源受限的设备（如移动设备、边缘计算设备）上也能快速运行 AI 应用，并且降低了部署成本。</p>
    `
  },
  {
    id: 'parameters',
    title: '参数',
    position: { x: 30, y: 60 },
    content: `
      <p>参数（Parameters）是深度学习模型中的重要组成部分，是模型在训练过程中学习和调整的变量。在神经网络中，参数通常指神经元之间连接的权重（weights）和偏置（biases）。</p>
      <p>以一个简单的全连接神经网络为例，每个神经元接收来自上一层神经元的输入，这些输入通过权重进行加权求和，再加上偏置后经过激活函数得到输出。模型的参数数量越多，其理论上能够学习到的模式和表达能力就越强。</p>
      <p>例如，GPT-3 拥有 1750 亿个参数，如此庞大的参数规模使得它能够处理极其复杂的自然语言任务。但参数过多也会带来训练成本高、计算资源需求大以及过拟合等问题。</p>
    `
  },
  {
    id: 'fine-tuning',
    title: '微调',
    position: { x: 70, y: 70 },
    content: `
      <p>微调（Fine-tuning）是在已经预训练好的模型基础上，针对特定任务或数据集进行进一步训练的过程。由于预训练模型在大规模通用数据上学习到了丰富的知识，但在具体应用场景中可能需要更专业的表现。</p>
      <p>比如，一个在通用文本上预训练的语言模型，在用于医疗领域的问答任务时，通过在医疗相关文本数据集上进行微调，模型能够更好地理解和回答医疗问题。</p>
      <p>微调通常只需要少量的特定领域数据和较少的训练时间，就能显著提升模型在该领域的性能，是将通用 AI 模型应用于实际场景的重要手段。</p>
    `
  },
  {
    id: 'reinforcement-learning',
    title: '强化学习',
    position: { x: 20, y: 80 },
    content: `
      <p>强化学习（Reinforcement Learning）是一种机器学习范式，智能体（agent）通过与环境进行交互，根据环境反馈的奖励信号来学习最优行为策略。</p>
      <p>智能体在环境中采取行动，环境根据其行动给出奖励或惩罚反馈，智能体的目标是通过不断尝试，找到能使长期累积奖励最大化的策略。</p>
      <p>在 AI 领域，强化学习在机器人控制、自动驾驶、游戏等领域有广泛应用。例如，OpenAI 的 Dota 2 机器人通过强化学习，经过大量的自我对战训练，能够在复杂的游戏环境中击败人类职业选手，展示了强化学习在解决复杂决策问题上的巨大潜力。</p>
    `
  },
  {
    id: 'transfer-learning',
    title: '迁移学习',
    position: { x: 60, y: 85 },
    content: `
      <p>迁移学习（Transfer Learning）旨在将在一个或多个源任务上学习到的知识迁移到一个目标任务上。当目标任务的数据量有限时，迁移学习尤为重要。</p>
      <p>例如，在图像识别领域，一个在大规模图像数据集（如 ImageNet）上预训练好的模型，已经学习到了丰富的图像特征（如边缘、纹理等）。当要进行特定类型图像（如医学影像）的识别任务时，可以将预训练模型的参数迁移过来，并在医学影像数据集上进行微调。</p>
      <p>这样可以避免在目标任务上从头开始训练模型，大大减少训练时间和数据需求，同时提高模型在目标任务上的性能。</p>
    `
  }
];

// 根据ID获取关键词
const getKeywordById = (id) => {
  return keywords.find(keyword => keyword.id === id);
};

// 切换关键词的激活状态
const toggleKeyword = (id) => {
  activeKeyword.value = activeKeyword.value === id ? null : id;
};
</script>

<style scoped>
.keywords-container {
  position: relative;
  width: 100%;
  min-height: 600px;
  padding: 20px;
}

.keywords-header {
  text-align: center;
  margin-bottom: 40px;
}

.keywords-header h2 {
  font-size: 2rem;
  color: var(--primary-color);
  margin-bottom: 10px;
}

.keywords-header p {
  color: #666;
  font-size: 1.1rem;
}

.keywords-bubbles {
  position: relative;
  width: 100%;
  height: 500px;
  background-color: rgba(240, 245, 255, 0.5);
  border-radius: 12px;
  overflow: hidden;
}

.keyword-bubble {
  position: absolute;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--primary-color), #69c0ff);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  z-index: 10;
}

.keyword-bubble:hover {
  transform: scale(1.1) !important;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
}

.keyword-bubble.active {
  z-index: 20;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.25);
}

.keyword-bubble span {
  padding: 10px;
  font-size: 1.1rem;
}

.keyword-details {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  max-width: 800px;
  max-height: 80vh;
  z-index: 100;
  animation: fadeIn 0.3s ease;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.keyword-card {
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  overflow: hidden;
}

.keyword-card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: var(--primary-color);
  color: white;
}

.keyword-card-header h3 {
  margin: 0;
  font-size: 1.5rem;
}

.close-btn {
  background: none;
  border: none;
  color: white;
  font-size: 1.8rem;
  cursor: pointer;
  padding: 0;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: background-color 0.2s;
}

.close-btn:hover {
  background-color: rgba(255, 255, 255, 0.2);
}

.keyword-card-content {
  padding: 20px;
  max-height: 60vh;
  overflow-y: auto;
  line-height: 1.7;
}

.keyword-card-content p {
  margin-bottom: 15px;
}

.keyword-card-content p:last-child {
  margin-bottom: 0;
}

@media (max-width: 768px) {
  .keyword-bubble {
    width: 100px;
    height: 100px;
  }
  
  .keyword-bubble span {
    font-size: 1rem;
  }
  
  .keyword-details {
    width: 95%;
  }
}
</style> 