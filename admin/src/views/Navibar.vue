<script setup lang="ts">
import { react } from '@babel/types';
import { ref,reactive } from 'vue';
import { useCounterStore } from '@/stores/counter'
import { defineStore } from 'pinia'

 const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  function increment() {
    count.value++
  }

  return { count, increment }
})

  const userLogin=()=>booleanLoginPage=true
  

  let booleanLoginPage:boolean=ref<boolean>(false)
</script>

<template>
  <nav>
    <n-button @click="userLogin" type="info">
      <slot class=Login>
      </slot>
    </n-button>
  </nav>
</template>

<style scoped>
nav {
        font-family: 'Gill Sans';
        display: flex;
        color: red;
        cursor:default;
        color-scheme:inherit;
        font-display:inherit;
    }
</style>
