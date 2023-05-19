<script setup lang="ts">
  import Navibar from './Navibar.vue'
  import Sidebar from './Sidebar.vue'
  import Content from './Content.vue'
  import Footer from './Footer.vue'
</script>

<template>
  <container>
    <div>
      <Navibar v-if="booleanLoginPage">
      教师登录
    </Navibar>
    </div>
  </container>
  <container>
    <Footer>
      xuesheng
    </Footer>
  </container>
</template>

<style scoped>
div {
  display: flex;
  
}
</style>
