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
  

  let booleanLoginPage:boolean=false
</script>

<template>
  <div>
    <el-button class="loginbtn" type="primary">教师登录</el-button>
  </div>
</template>

<style scoped>
div {
  border: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  
}
.loginbtn {
  
  
}
</style>
