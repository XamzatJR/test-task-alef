<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
</script>

<template>
  <AppHeader />
  <main class="w-full max-w-2xl mx-auto mt-8 px-4">
    <h1 class="text-black text-base font-medium mb-5">
      Персональные данные
    </h1>
    <RouterView />
  </main>
  <AppFooter />
</template>

<style scoped>
</style>
