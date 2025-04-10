<template>
  <nav class="navigation">
    <div class="nav-container">
      <div class="nav-logo">
        <router-link to="/" class="logo-link">AI Navigator</router-link>
      </div>
      
      <div class="nav-mobile-toggle" @click="toggleMobileMenu">
        <div class="toggle-icon" :class="{ 'active': mobileMenuOpen }">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      
      <div class="nav-menu" :class="{ 'active': mobileMenuOpen }">
        <div class="nav-links">
          <router-link to="/about-ai" class="nav-link" @click="closeMobileMenu">人工智能</router-link>
          <router-link to="/llm-platforms" class="nav-link" @click="closeMobileMenu">AI 平台</router-link>
        </div>
        <div class="nav-actions">
          <a href="https://github.com/heijin-yuuby/Ai-deep-learning-web" target="_blank" class="nav-action-link">GitHub</a>
          <n-button type="primary" class="primary-button" @click="navigateToLLMPlatforms">
            浏览平台
          </n-button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { NButton } from 'naive-ui';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const mobileMenuOpen = ref(false);

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value;
  // Prevent scrolling when mobile menu is open
  document.body.style.overflow = mobileMenuOpen.value ? 'hidden' : '';
};

const closeMobileMenu = () => {
  mobileMenuOpen.value = false;
  document.body.style.overflow = '';
};

const navigateToLLMPlatforms = () => {
  router.push('/llm-platforms');
  closeMobileMenu();
};
</script>

<style scoped>
.navigation {
  background-color: #1F466B;
  padding: 16px 0;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  font-family: var(--font-styrene-b);
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 var(--spacing-md);
  position: relative;
}

.nav-logo {
  font-size: var(--font-size-xl);
  font-weight: 700;
  z-index: 1001;
  font-family: var(--font-styrene-b);
}

.logo-link {
  color: var(--text-light);
  text-decoration: none;
}

.nav-menu {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 1;
  margin-left: var(--spacing-xl);
}

.nav-links {
  display: flex;
  gap: var(--spacing-xl);
}

.nav-link {
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  font-size: 1rem;
  transition: color 0.2s;
  padding: 8px 0;
}

.nav-link:hover,
.nav-link.router-link-active {
  color: #F5E6BF;
}

.nav-actions {
  display: flex;
  gap: var(--spacing-md);
  align-items: center;
}

.nav-action-link {
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  font-size: var(--font-size-md);
  transition: color var(--transition-fast);
}

.nav-action-link:hover {
  color: #F5E6BF;
}

.primary-button {
  background: linear-gradient(90deg, #1F466B 0%, #2A5880 100%);
  border: none;
  border-radius: 20px;
  padding: 4px 16px;
}

.button-link {
  color: var(--text-light);
  text-decoration: none;
}

.nav-mobile-toggle {
  display: none;
  cursor: pointer;
  z-index: 1001;
}

.toggle-icon {
  width: 30px;
  height: 24px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.toggle-icon span {
  display: block;
  height: 3px;
  width: 100%;
  background-color: var(--text-light);
  border-radius: 3px;
  transition: all var(--transition-normal);
}

.toggle-icon.active span:nth-child(1) {
  transform: translateY(10px) rotate(45deg);
}

.toggle-icon.active span:nth-child(2) {
  opacity: 0;
}

.toggle-icon.active span:nth-child(3) {
  transform: translateY(-10px) rotate(-45deg);
}

@media (max-width: 768px) {
  .nav-mobile-toggle {
    display: block;
  }
  
  .nav-menu {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--nav-bg);
    flex-direction: column;
    justify-content: center;
    margin-left: 0;
    transform: translateX(100%);
    transition: transform var(--transition-normal);
    z-index: 1000;
  }
  
  .nav-menu.active {
    transform: translateX(0);
  }
  
  .nav-links {
    flex-direction: column;
    gap: var(--spacing-lg);
    text-align: center;
    margin-bottom: var(--spacing-xl);
  }
  
  .nav-link {
    font-size: var(--font-size-lg);
    padding: var(--spacing-sm);
  }
  
  .nav-actions {
    flex-direction: column;
    gap: var(--spacing-lg);
    width: 100%;
    align-items: center;
  }
  
  .primary-button {
    width: 160px;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style> 