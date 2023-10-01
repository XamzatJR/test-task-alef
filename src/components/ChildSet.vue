<script setup lang="ts">
import AppButton from './AppButton.vue'
import AppInput from './AppInput.vue'

defineProps<{
  name: string
  age: string
}>()
defineEmits<{
  removeChild: [name: string]
}>()
</script>

<template>
  <fieldset class="flex gap-4">
    <AppInput :id="name" required :name="name" placeholder="Введите имя" label="Имя" />
    <AppInput :id="age" required :name="age" placeholder="Введите возраст" label="Возраст" />
    <AppButton type="button" class="text-primary" @click="$emit('removeChild', name)">
      Удалить
    </AppButton>
  </fieldset>
</template>

<style lang="scss" scoped>

</style>
