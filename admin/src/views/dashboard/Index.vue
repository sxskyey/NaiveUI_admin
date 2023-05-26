<script setup lang=ts>
import Header from './Header.vue';
import Content from './Content.vue'
import Sidebar from './Sidebar.vue'
import Footer from './Footer.vue'

</script>

<template>
    <div class="container">
        <div class="header">
            <Header></Header>
        </div>
        <div class="sidebar">
            <Sidebar></Sidebar>
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
  
}

.header {
  zoom: 1;
  background-color: red;
  
}

.sidebar {
  grid-area: sidebar;
  background-color: aquamarine;
}

.content {
  grid-area: content;
  background-color: blue;
}

.footer {
  grid-area: footer;
  background-color: blueviolet;
}

.container {
  display: grid;
 
  
  grid:
    'header header '
    'sidebar content'
    'footer footer'
}

</style>