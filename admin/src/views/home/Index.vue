<script setup lang="ts">
import { ref,reactive } from 'vue';
import Header from './Header.vue';
import Main from './Main.vue'
import Login from './Login.vue'
import Footer from './Footer.vue'
import router from '@/router';
import { useLoginStore } from '@/stores/counter'


    const login = useLoginStore()


const isShown = ref(true)
function methodOne() {
 isShown.value=!isShown.value
}

function methodTwo() {

  if(login.account=="袁静" && login.pwd=="123456"){
    router.push({
    path: "/index"
  })
  }
  else {
    login.hint="账号或密码错误！"
  }
  
}

function getPic(name: string) {
  return new URL(`../../assets/picture/home/${name}`, import.meta.url).href;
}



</script>

<template>
  <div class="container">
    <img :src="getPic('bg.png')" alt="" class="wave" />
    <div class="header">
      <Header @Shown="methodOne"></Header>
    </div>
    <div class="title">
      <h1>
        水勘院公司幼儿园
      </h1>
    </div>
    <div class="main">
      <Main></Main>
      <Login v-if="isShown" @Login="methodTwo" @Cancel="methodOne"></Login>
    </div>
    <div class="footer">
      <Footer></Footer>
    </div>
  </div>
</template>


<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.container {
  display: grid;
  grid-template-rows: 50px 100px 2fr 50px;


}

.header {
  display: flex;
  padding-right: 15px;
  justify-content: end;
}



.main {
  display: flex;
  align-items: space-evenly;
}

img {
  border: 100px #38d39f;
}

.wave {
  position: fixed;
  height: 120%;
  top: 0;
  left: 0;
  bottom: 0;
  z-index: -1;
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

  
}

@media screen and (max-width: 768px) {

  .title h1 {
    position: fixed;
    text-align: center;
    left: 50%;
    top: 10%;
    transform: translate(-50%, -50%);
    font-family: '楷体';
    color: #56b49b;
  }

  .copyright {
    width: 100%;
    height: 50px;
    color: #38d39f;
    text-align: center;
    font-family: 'Roboto', sans-serif;
  }
}
</style>