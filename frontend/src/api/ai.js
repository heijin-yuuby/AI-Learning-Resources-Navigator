import axios from 'axios';

const api = axios.create({
  baseURL: '/api',
  headers: {
    'Content-Type': 'application/json',
  }
});

// 与AI对话接口
export const chatWithAI = (message, currentChapter) => {
  return api.post('/ai/chat', {
    message,
    currentChapter
  });
};

// 获取章节推荐问题
export const getChapterQuestions = (chapter) => {
  return api.get(`/ai/chapter-questions?chapter=${encodeURIComponent(chapter)}`);
}; 