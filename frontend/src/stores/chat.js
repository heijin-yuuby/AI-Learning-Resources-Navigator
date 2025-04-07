import { defineStore } from 'pinia';
import { ref } from 'vue';
import { chatWithAI } from '../api/ai';

export const useChatStore = defineStore('chat', () => {
  // 聊天消息列表
  const messages = ref([]);
  // 当前正在加载中
  const loading = ref(false);
  // 当前章节
  const currentChapter = ref('');

  // 添加消息
  function addMessage(message, isUser = true) {
    messages.value.push({
      id: Date.now().toString(),
      content: message,
      isUser,
      timestamp: new Date().toLocaleTimeString(),
    });
  }

  // 发送消息到AI
  async function sendMessage(message) {
    if (!message.trim()) return;
    
    // 添加用户消息
    addMessage(message, true);
    
    // 设置加载状态
    loading.value = true;
    
    try {
      // 发送请求到后端
      const response = await chatWithAI(message, currentChapter.value);
      
      // 添加AI回复
      addMessage(response.data.reply, false);
    } catch (error) {
      console.error('Error sending message:', error);
      addMessage('抱歉，发生了错误，请稍后再试。', false);
    } finally {
      loading.value = false;
    }
  }

  // 设置当前章节
  function setCurrentChapter(chapter) {
    if (chapter !== currentChapter.value) {
      currentChapter.value = chapter;
    }
  }

  // 清空聊天记录
  function clearMessages() {
    messages.value = [];
  }

  return {
    messages,
    loading,
    currentChapter,
    addMessage,
    sendMessage,
    setCurrentChapter,
    clearMessages,
  };
}); 