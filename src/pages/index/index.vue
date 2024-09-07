<template>
  <view>
    <view class="status-bar-placeholder" />
    <view class="content">
      <view>TITLE: {{ title }}</view>
      <view>ENV: {{ env }}</view>
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const title = ref('Hello');
const env = import.meta.env.VITE_ENV_VARIABLE;
</script>
<style scoped lang="scss">
.content {
  font-size: 32rpx;
}
</style>
