<script setup lang="ts">
defineProps<{
  name: string
  age: string
}>()
</script>

<template>
  <div v-bind="$attrs" class="flex items-center justify-center text-base text-black  font-bold">
    {{ name }}, {{ age }} лет
  </div>
</template>

<style lang="scss" scoped>

</style>
