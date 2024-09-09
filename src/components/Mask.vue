<template>
  <view class="mask" @touchmove.stop.prevent="() => {}">
    <slot />
  </view>
</template>

<script setup lang="ts"></script>
<style lang="scss" scoped>
.mask {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 999;
}
</style>
