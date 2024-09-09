<template>
  <GlobalProvider ref="globalProvider">
    <StatusBarPlaceholder />
    <view class="content">
      <view>ENV: {{ env }}</view>

      <button @click="goDiscoveryPage">+</button>
      <view v-for="i in 20">
        <button>{{ i }}</button>
      </view>
    </view>
    <Toast ref="toast" />
  </GlobalProvider>
</template>

<script setup lang="ts">
import GlobalProvider from '@/components/GlobalProvider.vue';
import Toast from '@/components/Toast.vue';
import { ref } from 'vue';

const env = import.meta.env.VITE_ENV_VARIABLE;
const globalProvider = ref<InstanceType<typeof GlobalProvider> | null>(null);

function goDiscoveryPage() {
  uni.navigateTo({ url: '/pages/discovery/index' });
}
</script>
<style scoped lang="scss">
.content {
  font-size: 32rpx;
}
</style>
