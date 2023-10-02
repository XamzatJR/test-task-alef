<script setup lang="ts">
defineProps<{
  label: string
  modelValue: any
}>()
defineEmits(['update:modelValue'])
</script>

<template>
  <label class="block rounded-lg w-full px-4 py-2 border border-gray-200">
    <div class="text-sm text-gray-400">
      {{ label }}
    </div>
    <input
      class="block w-full text-sm font-normal text-black focus:outline-none placeholder:text-black" v-bind="$attrs" type="text"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target?.value)"
    >
  </label>
</template>

<style lang="scss" scoped>

</style>
