<script setup lang=ts>
import Header from './Header.vue';
import Content from './Content.vue'
import Sidebar from './Sidebar.vue'
import Footer from './Footer.vue'
import Navibar from './Navibar.vue';

</script>

<template>
  <div class="container">
    <div class="item one">
      <Navibar></Navibar>
    </div>
    <div class="item two">
      <Sidebar></Sidebar>
    </div>
    <div class="item">
      <Header></Header>
    </div>
    <div class="item">
      <Content></Content>
    </div>
    <div class="item t">
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

/* .container {
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-row: 60px 60px 60px 60px 60px;
  
} */




.container {
  width: 100vw;
  height: 100vh;
  display: grid;
  background-color: rgb(127, 204, 255);
  grid-template-rows:  50px 50px 1fr 50px;
  grid-template-columns: 10% 1fr;
}

div {
  border: 1px solid rgb(248, 248, 248);
  box-sizing: border-box;
}


.one {
  grid-column: 1 / span 2;
}

.two {
  grid-row: 2 / span 2;
}

.t {
  grid-column: 1 / span 2;
}












/* .navibar {
  
}

.sidebar {
  
  
}

.head {
  
}

.content {
  
}

.footer {
  
  
} */
</style>