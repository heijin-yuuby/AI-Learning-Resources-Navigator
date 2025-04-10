<template>
  <div class="platforms-page llm-pages">
    <Navigation />
    
    <div class="page-header">   
      <div class="container">
        <h1 class="page-title">LLM Platforms Navigation</h1>
        <p class="page-subtitle">探索和访问各种强大的 AI 语言模型平台</p>
      </div>
    </div>
    
    
    
    <br>
    <div class="container main-content">
      <div class="intro-section">
        <div class="intro-content">
          <h2>体验各大LLM</h2>
          <p>时下的，先进的，你需要知道的LLM平台</p>
        </div>
      </div>
      
      <LLMPlatforms />
      <br>
      <div class="container main-content">
        <div class="intro-section">
          <div class="intro-content">
            <h2>如果你想了解AI开发...</h2>
            <p>我们有相关的集成平台</p>
          </div>
        </div>
        <LLMintegrationplatform />
      </div>
    </div>
  </div>
</template>

<script setup>
import Navigation from '../components/layout/Navigation.vue';
import LLMPlatforms from '../components/LLMPlatforms.vue';
import LLMintegrationplatform from '../components/LLMintegrationplatform.vue';
import '../assets/styles/platforms.css';
</script>

<style scoped>

</style> 