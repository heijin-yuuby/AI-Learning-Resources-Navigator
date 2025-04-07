<template>
  <div 
    class="info-card" 
    :class="{ 'clickable': clickable }" 
    @click="handleClick"
  >
    <div class="card-icon" v-if="icon">
      <n-icon size="36">
        <component :is="icon" />
      </n-icon>
    </div>
    <div class="card-content">
      <h3 class="card-title">{{ title }}</h3>
      <p class="card-description" v-if="description">{{ description }}</p>
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
import { NIcon } from 'naive-ui';
import { useRouter } from 'vue-router';

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    default: ''
  },
  icon: {
    type: Object,
    default: null
  },
  to: {
    type: [String, Object],
    default: null
  },
  clickable: {
    type: Boolean,
    default: true
  }
});

const router = useRouter();

const handleClick = () => {
  if (props.to && props.clickable) {
    router.push(props.to);
  }
};
</script>

<style scoped>
.info-card {
  background-color: #fff;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  height: 100%;
  transition: all 0.3s ease;
}

.clickable {
  cursor: pointer;
}

.clickable:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
}

.card-icon {
  margin-bottom: 16px;
  color: var(--primary-color);
}

.card-title {
  font-size: 1.5rem;
  margin-bottom: 12px;
  color: #333;
}

.card-description {
  color: #666;
  line-height: 1.6;
}
</style> 