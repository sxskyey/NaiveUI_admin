<script setup lang=ts>
import { ref } from 'vue'

</script>

<template> 
      <section>
        <ul class="item">
        <li>
          <img class="logo" src="../../assets/picture/home/Logo.png" alt="" />
        </li>
        <li style="margin-left: 20px">
          山西省煤炭地质水文勘查研究院有限公司幼儿园
        </li>
      </ul>
    
      <ul class="item">
        <li class="center-bar">
        <n-input placeholder="请输入查询内容"/>
      </li>
      </ul>
    
      <ul class="item">
        <li>
          jiaoshi
        </li>
        <li>
          <n-avatar round size="large" src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg" />
        </li>
      </ul>
      </section>
</template>

<style scoped>
section {
  background-color: rgb(41, 134, 134);
  display: flex;
  justify-content: space-between;
}

.left {
  display: flex;
  align-items: center;
  flex-shrink: 0;
  
}
.item {
  display: flex;
  align-items: center;
  
  
  
}

.logo {
  width: 40px;
}

.center {
  display: flex;
  align-items: center;
  
  
  
}

.center-bar {
  flex-grow: 1;
  max-width: 1000px;
}

.right {
  display: flex;
  justify-content: end;
  align-items: center;
  
  
}

.right-item {
  
  display: flex;
  margin-right: 20px;
  align-items: center;
  
}


li {
  list-style-type: none;
}
</style>