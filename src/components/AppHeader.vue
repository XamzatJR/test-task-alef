<script setup lang="ts">
import { RouterLink } from 'vue-router';


</script>

<template>
    <header>
        <img src="/Frame 10.png" alt="logo">
        <nav>
            <RouterLink :to="{name: 'home'}">Форма</RouterLink>
            <RouterLink :to="{name: 'preview'}">Превью</RouterLink>
        </nav>
    </header>        
</template>

<style lang="scss" scoped>

</style>