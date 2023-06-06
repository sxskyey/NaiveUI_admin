<script setup lang=ts>
import Header from './Header.vue';
import Content from './Content.vue'
import Sidebar from './Sidebar.vue'
import Footer from './Footer.vue'
import Navibar from './Navibar.vue';

</script>

<template>
  <div class="container">
    <div class="item navibar">
      <Navibar></Navibar>
    </div>
    <div class="item sidebar">
      <Sidebar></Sidebar>
    </div>
    <div class="item header">
      <Header></Header>
    </div>
    <div class="item content">
      <Content></Content>
    </div>
    <div class="item footer">
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
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-rows:  50px 50px 1fr 30px;
  grid-template-columns: 10% 1fr;
}

div {
  
}


.navibar {
  grid-column: 1 / span 2;
}

.sidebar {
  grid-row: 2 / span 2;
  background-color:  rgb(8, 82, 100);
  min-width: 190px;
  
}

.header {
  justify-content: left;
}

.content {

}

.footer {
  grid-column: 1 / span 2;
  background-color: aquamarine;
  display: flex;
  justify-content: center;
  
}
</style>