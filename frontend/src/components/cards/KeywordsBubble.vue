<template>
  <div class="keywords-container">
    <div class="keywords-header">
      <h2>读懂这些，你将对ai有更深入的理解！</h2>
      <p>专业的技术术语</p>
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
    category: 'model',
    position: { x: 10, y: 15 },
    content: `
      <p>LLM（大语言模型，Large Language Model）是一类基于深度学习的人工智能模型，如广为人知的 GPT（Generative Pretrained Transformer）系列、LLaMA（Large Language Model Meta AI）等。</p>
      <p>这些模型通过在海量文本数据上进行无监督预训练，学习到语言的结构、语义和语法等知识。它们具备强大的语言理解与生成能力，能完成诸如文本创作、问答系统、机器翻译等多种自然语言处理任务。</p>
      <p>以 GPT-4 为例，它可以理解复杂的问题指令，生成逻辑连贯、内容丰富的文本回答，甚至在创意写作、代码生成等方面表现出色，为智能交互和内容生产带来了革命性的变化。</p>
    `
  },
  {
    id: 'distillation',
    title: '蒸馏',
    category: 'technique',
    position: { x: 85, y: 20 },
    content: `
      <p>蒸馏（Distillation）是一种模型压缩技术，旨在将一个复杂、庞大的教师模型（通常性能强大但计算成本高）的知识迁移到一个较小、更高效的学生模型中。</p>
      <p>其核心思想是让学生模型学习教师模型的输出（软标签）而非仅仅学习真实标签。比如，在图像分类任务中，教师模型对一张图片的预测可能是对各类别的概率分布，学生模型通过学习这种概率分布，能更好地捕捉到数据中的细微特征和关系。</p>
      <p>通过蒸馏，学生模型在保持较高性能的同时，减少了模型参数和计算量，使得在资源受限的设备（如移动设备、边缘计算设备）上也能快速运行 AI 应用，并且降低了部署成本。</p>
    `
  },
  {
    id: 'parameters',
    title: '参数',
    category: 'concept',
    position: { x: 25, y: 45 },
    content: `
      <p>参数（Parameters）是深度学习模型中的重要组成部分，是模型在训练过程中学习和调整的变量。在神经网络中，参数通常指神经元之间连接的权重（weights）和偏置（biases）。</p>
      <p>以一个简单的全连接神经网络为例，每个神经元接收来自上一层神经元的输入，这些输入通过权重进行加权求和，再加上偏置后经过激活函数得到输出。模型的参数数量越多，其理论上能够学习到的模式和表达能力就越强。</p>
      <p>例如，GPT-3 拥有 1750 亿个参数，如此庞大的参数规模使得它能够处理极其复杂的自然语言任务。但参数过多也会带来训练成本高、计算资源需求大以及过拟合等问题。</p>
    `
  },
  {
    id: 'fine-tuning',
    title: '微调',
    category: 'technique',
    position: { x: 75, y: 50 },
    content: `
      <p>微调（Fine-tuning）是在已经预训练好的模型基础上，针对特定任务或数据集进行进一步训练的过程。由于预训练模型在大规模通用数据上学习到了丰富的知识，但在具体应用场景中可能需要更专业的表现。</p>
      <p>比如，一个在通用文本上预训练的语言模型，在用于医疗领域的问答任务时，通过在医疗相关文本数据集上进行微调，模型能够更好地理解和回答医疗问题。</p>
      <p>微调通常只需要少量的特定领域数据和较少的训练时间，就能显著提升模型在该领域的性能，是将通用 AI 模型应用于实际场景的重要手段。</p>
    `
  },
  {
    id: 'reinforcement-learning',
    title: '强化学习',
    category: 'learning',
    position: { x: 15, y: 75 },
    content: `
      <p>强化学习（Reinforcement Learning）是一种机器学习范式，智能体（agent）通过与环境进行交互，根据环境反馈的奖励信号来学习最优行为策略。</p>
      <p>智能体在环境中采取行动，环境根据其行动给出奖励或惩罚反馈，智能体的目标是通过不断尝试，找到能使长期累积奖励最大化的策略。</p>
      <p>在 AI 领域，强化学习在机器人控制、自动驾驶、游戏等领域有广泛应用。例如，OpenAI 的 Dota 2 机器人通过强化学习，经过大量的自我对战训练，能够在复杂的游戏环境中击败人类职业选手，展示了强化学习在解决复杂决策问题上的巨大潜力。</p>
    `
  },
  {
    id: 'transfer-learning',
    title: '迁移学习',
    category: 'technique',
    position: { x: 60, y: 80 },
    content: `
      <p>迁移学习（Transfer Learning）旨在将在一个或多个源任务上学习到的知识迁移到一个目标任务上。当目标任务的数据量有限时，迁移学习尤为重要。</p>
      <p>例如，在图像识别领域，一个在大规模图像数据集（如 ImageNet）上预训练好的模型，已经学习到了丰富的图像特征（如边缘、纹理等）。当要进行特定类型图像（如医学影像）的识别任务时，可以将预训练模型的参数迁移过来，并在医学影像数据集上进行微调。</p>
      <p>这样可以避免在目标任务上从头开始训练模型，大大减少训练时间和数据需求，同时提高模型在目标任务上的性能。</p>
    `
  },
  {
    id: 'deep-learning',
    title: '深度学习',
    category: 'foundation',
    position: { x: 45, y: 22 },
    content: `
      <p>深度学习（Deep Learning, DL）是机器学习的分支，通过多层神经网络处理复杂数据，如图像、语音和文本。它通过模拟人脑神经网络结构，自动提取高级特征，在处理大规模高维度数据时表现优异。</p>
      <p>深度学习的核心是神经网络，常见的有卷积神经网络（CNN）用于图像识别、循环神经网络（RNN）用于自然语言处理等。</p>
      <p>深度学习技术在视觉识别、语音识别、自然语言处理等领域取得了突破性进展，推动了人工智能的快速发展。</p>
    `
  },
  {
    id: 'neural-network',
    title: '神经网络',
    category: 'foundation',
    position: { x: 30, y: 10 },
    content: `
      <p>神经网络（Neural Network）是一种模仿人脑神经元结构的计算模型，由节点（神经元）和连接（权重）构成，用于处理和分析数据。</p>
      <p>在神经网络中，每个神经元接收输入，经过激活函数处理后产生输出。多层神经元堆叠形成深度神经网络，通过调整权重来优化网络性能，常用反向传播算法和梯度下降法进行训练。</p>
      <p>神经网络是深度学习的基础，已在图像识别、语音处理、自然语言理解等领域展现出强大能力。</p>
    `
  },
  {
    id: 'supervised-learning',
    title: '监督学习',
    category: 'learning',
    position: { x: 55, y: 35 },
    content: `
      <p>监督学习（Supervised Learning）是一种机器学习方法，模型通过标记数据进行训练，学习输入与输出之间的映射关系。</p>
      <p>训练数据包含输入特征和对应的标签，模型的目标是学习一个函数，使其能够正确地将输入映射到输出。常见的监督学习算法有线性回归、逻辑回归、决策树、支持向量机等。</p>
      <p>监督学习广泛应用于分类任务（如垃圾邮件检测）和回归任务（如房价预测）。</p>
    `
  },
  {
    id: 'unsupervised-learning',
    title: '无监督学习',
    category: 'learning',
    position: { x: 80, y: 65 },
    content: `
      <p>无监督学习（Unsupervised Learning）是一种机器学习方法，模型从未标记的数据中学习，发现数据的内在结构和模式。</p>
      <p>常见的无监督学习包括聚类（将相似的数据分组）和降维（减少数据的维度）。K均值聚类、主成分分析（PCA）、自编码器等都是典型的无监督学习算法。</p>
      <p>无监督学习在客户细分、异常检测、特征学习等领域有广泛应用。</p>
    `
  },
  {
    id: 'gan',
    title: 'GAN',
    category: 'model',
    position: { x: 40, y: 65 },
    content: `
      <p>生成式对抗网络（Generative Adversarial Network, GAN）由生成器和判别器两个模型构成，生成器尝试生成真实的数据（如图像），判别器则试图区分真实数据和生成数据。</p>
      <p>两个模型通过对抗训练相互提高：生成器努力创造更逼真的数据以欺骗判别器，判别器则不断提高其辨别能力。这种博弈过程最终能提升生成数据的质量。</p>
      <p>GAN在图像生成、风格迁移、数据增强、伪造数据检测等领域有广泛应用。</p>
    `
  },
  {
    id: 'nlp',
    title: 'NLP',
    category: 'application',
    position: { x: 20, y: 30 },
    content: `
      <p>自然语言处理（Natural Language Processing, NLP）是让计算机理解和处理人类语言的技术。它涵盖了文本分类、机器翻译、问答系统等多种任务。</p>
      <p>NLP技术涉及词法分析、句法分析、语义分析等多个层面，旨在让机器能够像人类一样理解和生成自然语言。</p>
      <p>随着深度学习和大型语言模型的发展，NLP技术取得了显著进步，广泛应用于智能客服、搜索引擎、内容生成等领域。</p>
    `
  },
  {
    id: 'computer-vision',
    title: '计算机视觉',
    category: 'application',
    position: { x: 65, y: 12 },
    content: `
      <p>计算机视觉（Computer Vision, CV）是赋予计算机识别和理解图像及视频中的对象、场景等内容的能力。</p>
      <p>计算机视觉技术包括图像分类、目标检测、图像分割、人脸识别等，广泛应用于安防监控、自动驾驶、医疗诊断等领域。</p>
      <p>随着深度学习特别是卷积神经网络的应用，计算机视觉技术取得了革命性进展，在某些任务上甚至超越了人类的识别能力。</p>
    `
  }
];

// 暴露关键词分类给父组件
const categories = [
  { id: 'all', name: '全部' },
  { id: 'foundation', name: '基础理论' },
  { id: 'learning', name: '学习方法' },
  { id: 'model', name: '模型架构' },
  { id: 'technique', name: '技术方法' },
  { id: 'concept', name: '关键概念' },
  { id: 'application', name: '应用领域' }
];

// 暴露给父组件的方法和数据
defineExpose({
  keywords,
  categories
});

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
  background-color: rgba(229, 234, 243, 0.5);
  border-radius: 12px;
  overflow: hidden;
  margin: 0 auto;
  max-width: 1000px;
}

.keyword-bubble {
  position: absolute;
  width: 90px;
  height: 90px;
  border-radius: 50%;
  background: #78a8c7;
  color: rgb(252, 252, 252);
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
  color: rgb(255, 249, 249);
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
    width: 80px;
    height: 80px;
  }
  
  .keyword-bubble span {
    font-size: 0.9rem;
  }
  
  .keyword-details {
    width: 95%;
  }
}
</style> 