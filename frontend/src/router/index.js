import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import AboutAIPage from '../views/AboutAIPage.vue';
import AIHistoryPage from '../views/AIHistoryPage.vue';
import AIKnowledgePage from '../views/AIKnowledgePage.vue';
import ExperienceAIPage from '../views/ExperienceAIPage.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  },
  {
    path: '/about-ai',
    name: 'about-ai',
    component: AboutAIPage
  },
  {
    path: '/ai-history',
    name: 'ai-history',
    component: AIHistoryPage
  },
  {
    path: '/ai-knowledge',
    name: 'ai-knowledge',
    component: AIKnowledgePage
  },
  {
    path: '/experience-ai',
    name: 'experience-ai',
    component: ExperienceAIPage
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    // 始终滚动到顶部
    return { top: 0 };
  }
});

export default router; 