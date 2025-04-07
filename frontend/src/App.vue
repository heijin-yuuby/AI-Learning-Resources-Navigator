<script setup>
import { NConfigProvider, NMessageProvider } from 'naive-ui';
</script>

<template>
  <n-config-provider>
    <n-message-provider>
      <router-view />
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
