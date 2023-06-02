<script setup lang=ts>
import { ref } from 'vue'

</script>

<template>
  <div class="navi">
    <div class="left">
      <ul class="left-item">
        <li>
          <img src="../../assets/picture/home/Logo.png" alt="" />
        </li>
        <li>
          山西省煤炭地质水文勘查研究院有限公司幼儿园
        </li>
      </ul>
    </div>
    <div class="center">
      <n-input placeholder="请输入查询内容"/>
    </div>
    <div class="right">
      <ul class="right-item">
        <li>
          <n-avatar round size="large" src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg" />
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.navi {
  width: 100vw;
  background-color: rgb(41, 134, 134);
  display: flex;
  justify-content: space-between;
}

.left {
  display: flex;
  align-items: center;
  flex-shrink: 0;
}
.left-item {
  display: flex;
  align-items: center;
  margin-right: 20px;
  /* background-color: rgb(202, 54, 182); */
}

.center {
  display: flex;
  align-items: center;
  margin-right: 100px;
  max-width: 500px;
  flex-grow: 1;
}

.right {
  display: flex;
  align-items: center;
  /* background-color: rgb(22, 199, 111); */
}

img {
  zoom: 12%;
  margin-left: 200px;
  margin-right: 100px;
}

li {
  list-style-type: none;
}
</style>