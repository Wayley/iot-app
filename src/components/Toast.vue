<template>
  <Mask v-if="show">
    <view class="wrapper">
      <view class="content" @click.stop> {{ content }}</view>
    </view>
  </Mask>
</template>

<script setup lang="ts">
import useConfig from '@/hooks/useConfig';
import { ref } from 'vue';

const { config } = useConfig();

export interface ToastOpenOptions {
  content: string;
}

const show = ref(false);
const content = ref('');

defineExpose({ open });

function open(options: ToastOpenOptions) {
  show.value = false;
  content.value = options.content;
  show.value = true;
  setTimeout(() => (show.value = false), config.value.TOAST_DURATION);
}
</script>
<style lang="scss" scoped>
.wrapper {
  position: absolute;
  bottom: 50%;
  width: 100%;
  display: flex;
  justify-content: center;
  .content {
    display: flex;
    align-items: center;
    word-wrap: break-word;
    word-break: break-all;
    padding: 4px 10px;
    box-sizing: border-box;
    max-width: 45%;
    min-height: 40px;
    background: #f4f7f8;
    border-radius: 6px;
    opacity: 0.9;
  }
}
</style>
