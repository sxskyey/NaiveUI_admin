<template>
  <n-dynamic-tags v-model:value="tags" 
  v-model:round="round" 
  v-model:type="type" />
</template>

<script setup lang="ts">
import { defineComponent, ref } from 'vue'



const tags = ref(['教师11', '程序员'])
const round = ref(true)
const type = ref("primary")
</script>