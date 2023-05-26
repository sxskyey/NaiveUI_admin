<script setup lang="ts">
import { reactive } from 'vue';
import Header from './Header.vue';
import Main from './Main.vue'
import Login from './Login.vue'
import Footer from './Footer.vue'

function getPic(name: string) {
  return new URL(`../../assets/picture/home/${name}`, import.meta.url).href;
}
</script>

<template>
  <img :src="getPic('bg.png')" alt="" class="wave" />
  <div class="container">
    <div class="header">
      <Header></Header>
    </div>
    <div class="title">
      <h1>
        水勘院公司幼儿园
      </h1>
    </div>
    <div class="main">
        <Main></Main>
        <Login></Login>
    </div>
    <div class="footer">
      <Footer></Footer>
    </div>
  </div>
</template>


<style>
.header {
  grid-area: header;
}

.title {
  grid-area: title;
}

.main {
  grid-area: main;
}

.footer {
  grid-area: footer;
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}



.container {
  display: grid;
  -ms-grid-row-span: 1;
  grid:
    'header header'
    'title title'
    'main main'
    'footer footer'
}

.main {}

.wave {
  position: fixed;
  height: 120%;
  top: 0;
  left: 0;
  bottom: 0;
  z-index: -1;
}


.login {
  display: flex;
  align-content: center;
}


.title h1 {
  position: fixed;
  text-align: center;
  left: 50%;
  top: 10%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  font-size: 50px;
  font-family: '楷体';
  color: #56b49b;
}

.footer {
  position: fixed;
  bottom: 10px;
  left: 0;
  right: 0;
  align-content: center;
  
}

/*媒体查询*/
@media screen and (max-width: 1080px) {
  .container {
    grid-gap: 9rem;
  }
}

@media screen and (max-width: 1024px) {
  form {
    width: 290px;
  }

  form h2 {
    font-size: 2.4rem;
    margin: 8px 0;
  }

  .img img {
    width: 360px;
  }
}

@media screen and (max-width: 768px) {
  .wave {}

  .img {}

  .title h1 {
    position: fixed;
    text-align: center;
    left: 50%;
    top: 10%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    font-size: 30px;
    font-family: '楷体';
    color: #56b49b;
  }

  .copyright {
    width: 100%;
    height: 50px;
    bottom: 2px;
    color: #38d39f;
    text-align: center;
    font-size: 18px;
    font-family: 'Roboto', sans-serif;
  }
}</style>