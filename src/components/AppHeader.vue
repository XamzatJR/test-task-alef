<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <header class="w-full py-6 border-b-2 border-gray-200">
    <div class="container mx-auto flex items-center">
      <img class="header" src="/Frame 10.png" alt="logo">
      <nav class="mx-auto flex gap-6">
        <RouterLink class="text-sm text-black opacity-50 font-normal hover:opacity-100" :to="{ name: 'home' }">
          Форма
        </RouterLink>
        <RouterLink class="text-sm text-black opacity-50 font-normal hover:opacity-100" :to="{ name: 'preview' }">
          Превью
        </RouterLink>
      </nav>
    </div>
  </header>
</template>

<style lang="scss" scoped>

</style>
