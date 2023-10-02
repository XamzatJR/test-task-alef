<script setup lang="ts">
import { useUserInfo } from '@/composables/useUserInfo'
import PreviewElement from '@/components/PreviewElement.vue'

const { user, children } = useUserInfo()
</script>

<template>
  <div class="flex flex-col items-start">
    <PreviewElement v-if="user.age && user.name" :age="user.age" :name="user.name" />
    <div v-else class="text-lg font-medium text-red-800">
      Заполните форму!
    </div>
    <div v-if="children.length" class="mt-16 flex flex-col gap-5 items-start">
      <h3 class="text-base font-medium text-black">
        Дети
      </h3>
      <PreviewElement v-for="(child, idx) in children" :key="idx" class="bg-grayl" :age="child.age" :name="child.name" />
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>
