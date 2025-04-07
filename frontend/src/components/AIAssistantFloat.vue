<template>
  <div class="ai-assistant-container" :class="{ 'minimized': isMinimized }">
    <!-- 浮动按钮 -->
    <div v-if="isMinimized" class="float-button" @click="toggleMinimize">
      <n-icon size="24">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
        </svg>
      </n-icon>
    </div>
    
    <!-- 聊天窗口 -->
    <div v-else class="chat-window">
      <!-- 窗口标题栏 -->
      <div class="window-header">
        <div class="window-title">AI 知识导览助手</div>
        <div class="window-actions">
          <n-button quaternary circle size="small" @click="toggleMinimize">
            <n-icon>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path fill="currentColor" d="M19 13H5v-2h14v2z"/>
              </svg>
            </n-icon>
          </n-button>
        </div>
      </div>
      
      <!-- 消息列表 -->
      <div class="message-list" ref="messageList">
        <div
          v-for="message in chatStore.messages"
          :key="message.id"
          class="message"
          :class="{ 'user-message': message.isUser, 'ai-message': !message.isUser }"
        >
          <div class="message-content">{{ message.content }}</div>
          <div class="message-timestamp">{{ message.timestamp }}</div>
        </div>
        <div v-if="chatStore.loading" class="message ai-message">
          <div class="typing-indicator">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
      
      <!-- 输入框 -->
      <div class="input-area">
        <n-input
          v-model:value="inputMessage"
          placeholder="输入问题..."
          @keypress.enter="sendMessage"
          :disabled="chatStore.loading"
        />
        <n-button
          type="primary"
          @click="sendMessage"
          :disabled="!inputMessage.trim() || chatStore.loading"
        >
          发送
        </n-button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch, nextTick } from 'vue';
import { NButton, NInput, NIcon } from 'naive-ui';
import { useChatStore } from '../stores/chat';
import { getChapterQuestions } from '../api/ai';

// 状态
const isMinimized = ref(true);
const inputMessage = ref('');
const messageList = ref(null);
const chapterObserver = ref(null);
const lastVisitedChapter = ref('');

// 获取 store
const chatStore = useChatStore();

// 切换最小化状态
const toggleMinimize = () => {
  isMinimized.value = !isMinimized.value;
  if (!isMinimized.value) {
    nextTick(() => {
      scrollToBottom();
    });
  }
};

// 发送消息
const sendMessage = async () => {
  if (!inputMessage.value.trim() || chatStore.loading) return;
  
  await chatStore.sendMessage(inputMessage.value);
  inputMessage.value = '';
  
  nextTick(() => {
    scrollToBottom();
  });
};

// 自动滚动到底部
const scrollToBottom = () => {
  if (messageList.value) {
    messageList.value.scrollTop = messageList.value.scrollHeight;
  }
};

// 章节变更引导
const onChapterEnter = async (chapter) => {
  if (chapter === lastVisitedChapter.value) return;
  
  lastVisitedChapter.value = chapter;
  chatStore.setCurrentChapter(chapter);
  
  try {
    const response = await getChapterQuestions(chapter);
    if (response.data && response.data.question) {
      // 添加引导消息
      chatStore.addMessage(`您正在浏览"${chapter}"章节，有什么问题需要帮助吗？我可以回答如下问题：${response.data.question}`, false);
      
      // 若窗口最小化，提醒用户
      if (isMinimized.value) {
        // 可以添加通知或动画效果
      }
    }
  } catch (error) {
    console.error('Error fetching chapter questions:', error);
  }
};

// 观察章节变更
const setupChapterObserver = () => {
  if (chapterObserver.value) {
    chapterObserver.value.disconnect();
  }
  
  chapterObserver.value = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const chapterTitle = entry.target.textContent;
        onChapterEnter(chapterTitle);
      }
    });
  }, { threshold: 0.5 });
  
  // 监听所有章节标题
  document.querySelectorAll('[data-chapter]').forEach(el => {
    chapterObserver.value.observe(el);
  });
};

// 监听消息变化，自动滚动
watch(() => chatStore.messages.length, () => {
  nextTick(() => {
    scrollToBottom();
  });
});

// 组件挂载
onMounted(() => {
  setupChapterObserver();
  window.addEventListener('scroll', () => {
    // 重新设置观察器，以防DOM变化
    setupChapterObserver();
  });
});
</script>

<style scoped>
.ai-assistant-container {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1000;
  display: flex;
  flex-direction: column;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
}

.float-button {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #1890ff;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  transition: all 0.3s;
}

.float-button:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

.chat-window {
  width: 350px;
  height: 500px;
  border-radius: 12px;
  background-color: #fff;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.window-header {
  padding: 12px 16px;
  background-color: #1890ff;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.window-title {
  font-weight: bold;
}

.message-list {
  flex: 1;
  padding: 16px;
  overflow-y: auto;
  background-color: #f9f9f9;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.message {
  max-width: 80%;
  padding: 10px 14px;
  border-radius: 12px;
  position: relative;
}

.user-message {
  align-self: flex-end;
  background-color: #1890ff;
  color: white;
  border-bottom-right-radius: 4px;
}

.ai-message {
  align-self: flex-start;
  background-color: #f0f0f0;
  color: #333;
  border-bottom-left-radius: 4px;
}

.message-timestamp {
  font-size: 10px;
  margin-top: 4px;
  opacity: 0.7;
  text-align: right;
}

.input-area {
  padding: 12px;
  display: flex;
  gap: 8px;
  background-color: #fff;
  border-top: 1px solid #eee;
}

.typing-indicator {
  display: flex;
  align-items: center;
  gap: 4px;
}

.typing-indicator span {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: #999;
  display: inline-block;
  animation: typing 1s infinite ease-in-out;
}

.typing-indicator span:nth-child(1) {
  animation-delay: 0s;
}

.typing-indicator span:nth-child(2) {
  animation-delay: 0.2s;
}

.typing-indicator span:nth-child(3) {
  animation-delay: 0.4s;
}

@keyframes typing {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-5px);
  }
}
</style> 