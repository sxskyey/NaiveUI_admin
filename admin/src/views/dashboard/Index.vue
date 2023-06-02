<script setup lang=ts>
import Header from './Header.vue';
import Content from './Content.vue'
import Sidebar from './Sidebar.vue'
import Footer from './Footer.vue'
import Navibar from './Navibar.vue';

</script>

<template>
  <div class="container">
    <div class="navibar">
      <Navibar></Navibar>
    </div>
    <div class="sidebar">
      <Sidebar></Sidebar>
    </div>
    <div class="head">
      <Header></Header>
    </div>
    <div class="content">
      <Content></Content>
    </div>
    <div class="footer">
      <Footer></Footer>
    </div>
  </div>
</template>

<style scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.container {
  display: grid;
  /* grid-template-rows: 50px 50px 1fr 50px;
  grid-template-columns: 10% 1fr; */
}

.navibar {
  
}

.sidebar {
  
  /* grid-row: span 2; */
}

.head {
  
}

.content {
  
}

.footer {
  
  /* grid-column: span 2; */
}
</style>