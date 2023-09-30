<template>
  <button v-bind="$attrs" class="py-2.5 px-5 text-sm font-normal flex items-center justify-center">
    <slot name="icon" class="w-6 p-6 mr-1" />
    <slot />
  </button>
</template>
