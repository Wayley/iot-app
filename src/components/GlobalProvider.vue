<template>
  <view>
    <Toast ref="toast" />
    <slot />
  </view>
</template>

<script setup lang="ts">
import { ref } from 'vue';

/* ************************ Toast ************************ */
import Toast, { type ToastOpenOptions } from '@/components/Toast.vue';
const toast = ref<InstanceType<typeof Toast> | null>(null);
function showToast(options: ToastOpenOptions) {
  toast.value?.open(options);
}

/* ************************ Modal ************************ */

defineExpose({ showToast });
</script>
<style lang="scss"></style>
