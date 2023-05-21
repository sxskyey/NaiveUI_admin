<script setup lang="ts">
import TheWelcome from '../../components/TheWelcome.vue'
</script>

<template>
  <nav>
    <n-button type="warning">
      <slot class=warn>
      </slot>
    </n-button>
  </nav>
</template>
