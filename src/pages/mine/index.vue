<template>
  <GlobalProvider ref="globalProvider">
    <StatusBarPlaceholder />
    Mine
  </GlobalProvider>
</template>

<script setup lang="ts">
import GlobalProvider from '@/components/GlobalProvider.vue';
import { ref } from 'vue';

const globalProvider = ref<InstanceType<typeof GlobalProvider> | null>(null);
</script>

<style scoped lang="scss"></style>
