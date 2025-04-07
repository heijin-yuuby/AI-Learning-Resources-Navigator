<script setup>
import { NConfigProvider, NMessageProvider } from 'naive-ui';
import AIAssistantFloat from './components/AIAssistantFloat.vue';
</script>

<template>
  <n-config-provider>
    <n-message-provider>
      <div class="app-container">
        <header class="header">
          <h1>AI 知识导览</h1>
        </header>
        
        <main class="content">
          <section class="introduction">
            <h2>欢迎使用 AI 知识导览平台</h2>
            <p>这个平台旨在帮助你探索和学习人工智能的各个领域。浏览下面的章节，AI 助手将帮助你理解复杂概念。</p>
          </section>
          
          <section class="chapter">
            <h2 data-chapter>机器学习基础</h2>
            <p>机器学习是人工智能的一个子领域，它关注于开发能够从数据中学习并做出预测的系统，而无需明确编程指示。</p>
            <p>机器学习算法通过分析和学习数据模式，做出决策或预测，随着接触更多数据而不断改进其性能。</p>
            <h3>关键概念</h3>
            <ul>
              <li>监督学习</li>
              <li>无监督学习</li>
              <li>强化学习</li>
              <li>深度学习</li>
            </ul>
          </section>
          
          <section class="chapter">
            <h2 data-chapter>深度学习技术</h2>
            <p>深度学习是机器学习的一个分支，它使用神经网络来模拟人脑的工作方式。这些神经网络由多层节点组成，每层都负责不同级别的抽象。</p>
            <p>深度学习已经在图像识别、自然语言处理和游戏等领域取得了突破性进展。</p>
            <h3>常用框架</h3>
            <ul>
              <li>TensorFlow</li>
              <li>PyTorch</li>
              <li>Keras</li>
            </ul>
          </section>
          
          <section class="chapter">
            <h2 data-chapter>自然语言处理</h2>
            <p>自然语言处理（NLP）是AI的一个分支，专注于使计算机能够理解、解释和生成人类语言。它结合了计算语言学、深度学习和大规模数据处理。</p>
            <p>近年来，像GPT和BERT这样的预训练语言模型在NLP任务上取得了显著进展。</p>
            <h3>应用领域</h3>
            <ul>
              <li>文本分类</li>
              <li>情感分析</li>
              <li>机器翻译</li>
              <li>问答系统</li>
            </ul>
          </section>
        </main>
        
        <footer class="footer">
          <p>© 2023 AI Knowledge Navigator</p>
        </footer>
        
        <!-- AI 助手浮窗 -->
        <AIAssistantFloat />
      </div>
    </n-message-provider>
  </n-config-provider>
</template>

<style>
:root {
  --primary-color: #1890ff;
  --background-color: #f5f7fa;
  --text-color: #333;
  --border-color: #eaeaea;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  background-color: var(--background-color);
  color: var(--text-color);
  line-height: 1.6;
}

.app-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.header {
  text-align: center;
  padding: 30px 0;
  margin-bottom: 30px;
}

.header h1 {
  font-size: 2.5rem;
  color: var(--primary-color);
}

.content {
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
  padding: 30px;
}

.introduction {
  margin-bottom: 40px;
  border-bottom: 1px solid var(--border-color);
  padding-bottom: 20px;
}

.chapter {
  margin-bottom: 40px;
  padding-bottom: 20px;
  border-bottom: 1px solid var(--border-color);
}

.chapter:last-child {
  border-bottom: none;
}

h2 {
  font-size: 1.8rem;
  color: var(--primary-color);
  margin-bottom: 15px;
}

h3 {
  font-size: 1.3rem;
  margin: 20px 0 10px;
}

p {
  margin-bottom: 15px;
}

ul {
  margin-left: 20px;
  margin-bottom: 15px;
}

li {
  margin-bottom: 5px;
}

.footer {
  text-align: center;
  padding: 20px 0;
  margin-top: 30px;
  font-size: 0.9rem;
  color: #666;
}
</style>
