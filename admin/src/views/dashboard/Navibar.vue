<script setup lang=ts>
import { ref } from 'vue'

</script>

<template>
  <div class="container">
    <ul class="left">
      <div class="item">
        <li>
          <img src="../../assets/picture/home/Logo.png" alt="" />
        </li>
        <li>
          山西省煤炭地质水文勘查研究院有限公司幼儿园
        </li>
      </div>
    </ul>
    <ul>
      <div class="right item">
        <n-button type="info" @click="$emit('Login')">
          教师登录
        </n-button>
      </div>
    </ul>
  </div>
</template>

<style scoped>
.container {

  

  display: flex;
  
  
}



.left {
  background-color: rgb(202, 54, 182);
  
  
 
  align-items: center;
  flex-shrink: 0;
  
}



img {
  zoom: 15%;
}

li {
  list-style-type: none;
}
</style>