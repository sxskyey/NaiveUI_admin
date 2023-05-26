<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div id="app" v-wechat-title="$route.meta.title">
    <RouterView />
  </div>
</template>

<style scoped></style>
