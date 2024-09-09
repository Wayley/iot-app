<template>
  <view>
    <view class="status-bar-placeholder" />
    <view class="content">
      <view>ENV: {{ env }}</view>

      <button @click="goDiscoveryPage">+</button>
    </view>
  </view>
</template>

<script setup lang="ts">
const env = import.meta.env.VITE_ENV_VARIABLE;

function goDiscoveryPage() {
  uni.navigateTo({ url: '/pages/discovery/index' });
}
</script>
<style scoped lang="scss">
.content {
  font-size: 32rpx;
}
</style>
