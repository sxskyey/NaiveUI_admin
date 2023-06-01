<script setup lang=ts>

import { useLoginStore } from '@/stores/counter'


    const login = useLoginStore()

    login.hint="hello"
</script>

<template>
    <div class="login-box">
      <form action="">
        <img src="../../assets/picture/home/avatar.svg" alt="" class="avatar">
        <h2>教师登录</h2>
        <div class="input-group account">
          <div class="icon">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32"><path d="M16 4a5 5 0 1 1-5 5a5 5 0 0 1 5-5m0-2a7 7 0 1 0 7 7a7 7 0 0 0-7-7z" fill="currentColor"></path><path d="M26 30h-2v-5a5 5 0 0 0-5-5h-6a5 5 0 0 0-5 5v5H6v-5a7 7 0 0 1 7-7h6a7 7 0 0 1 7 7z" fill="currentColor"></path></svg>
          </div>
          <div>
            <input type="text" v-model="login.account" class="input" placeholder="账号">
          </div>
        </div>
        <div class="input-group password">
          <div class="icon">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32"><g fill="none"><path d="M18 20a2 2 0 1 1-4 0a2 2 0 0 1 4 0zm-8-10V8a6 6 0 0 1 12 0v2h1.5a3.5 3.5 0 0 1 3.5 3.5v13a3.5 3.5 0 0 1-3.5 3.5h-15A3.5 3.5 0 0 1 5 26.5v-13A3.5 3.5 0 0 1 8.5 10H10zm2-2v2h8V8a4 4 0 0 0-8 0zm-3.5 4A1.5 1.5 0 0 0 7 13.5v13A1.5 1.5 0 0 0 8.5 28h15a1.5 1.5 0 0 0 1.5-1.5v-13a1.5 1.5 0 0 0-1.5-1.5h-15z" fill="currentColor"></path></g></svg>
          </div>
          <div>
            <input type="password" v-model="login.pwd" class="input" placeholder="密码">
          </div>
        </div>
        <div class="loginhint">
            <label type="label">{{ login.hint }}</label>
          </div>
        <n-button-group horizontal class="btn">
          <div>
            <n-button round=true size='large' type="info" class="loginbtn" @click="$emit('Login')">
              登录
            </n-button>
          </div>
          <div>
            <n-button round=true size='large' type="default" class="cancelbtn" @click="$emit('Cancel')">
              取消
            </n-button>
          </div>
        </n-button-group>
        <a href="#" class="forget-password">忘记密码?</a>
      </form>
    </div>
</template>

<style scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Roboto', sans-serif;
}

.pic {
  height: 100%;
  left: 200px;
  bottom: 0;
  z-index: -1;
}

.login-box {
  position: absolute ;
  left: 60%;
  top: 25%;
  align-items: center;
  text-align: center;

}

form {
  width: 360px;
}

.avatar {
  width: 100px;
}

form h2 {
  font-size: 2.9rem;
  text-transform: uppercase;
  margin: 15px 0;
  color: #06b799;
}

.input-group {
  position: relative;
  display: grid;
  grid-template-columns: 7% 93%;
  margin: 25px 0;
  padding: 5px 0;
  border-bottom: 2px solid #d9d9d9;
}

.input-group:nth-child(1) {
  margin-bottom: 4px;
}

.input-group:before,
.input-group:after {
  content: '';
  position: absolute;
  bottom: -2px;
  width: 0;
  height: 2px;
  background-color: #38d39f;
  transition: .5s;
}

.input-group:after {
  right: 50%;
}

.input-group:before {
  left: 50%;
}

.icon {
  display: flex;
  justify-content: center;
  align-items: center;
}

.icon i {
  color: #d9d9d9;
  transition: .5s;
}

.input-group>div {
  position: relative;
  height: 45px;
}

.input-group>div>h5 {
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  color: #d9d9d9;
  font-size: 18px;
  transition: .3s;
}

.input-group.focus .icon i {
  color: #38d39f;
}

.input-group.focus div h5 {
  top: -5px;
  font-size: 15px;
}

.input-group.focus:after,
.input-group.focus:before {
  width: 50%;
}

.input {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border: none;
  outline: none;
  background: none;
  padding: 0.5rem 0.7rem;
  font-size: 1.2rem;
  color: #555;
  font-family: 'Roboto', sans-serif;
}

a {
  text-align: right;
  text-decoration: none;
  color: #999;
  font-size: 0.9rem;
  transition: .3s;
}

.loginhint {
  text-align: left;
  color: #cf461c;
}

.btn {
  display: flex;
  width: 100%;
  justify-content: space-between;
  border-radius: 25px;
  margin: 1rem 0;
  font-size: 1.2rem;
  outline: none;
  border: none;
  
  cursor: pointer;
  color: #fff;
  text-transform: uppercase;
  font-family: 'Roboto', sans-serif;
  background-size: 200%;
  transition: .5s;
}

.loginbtn {
  width: 150px;
  font-size: 18px;
}

.cancelbtn{
  width: 150px;
  font-size: 18px;
}

.btn:hover {
  background-position: right;
}

.forget-password {
  display: flex;
  justify-content: end;
}
.footer {
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translate(-50%,-50%);
  font-size: 18px;
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
  .wave {
    display: none;
  }

  .img {
    display: none;
  }

  .title h1 {
  position: absolute;
  text-align: center;
  top: 15%; 
  left: 0; 
  right: 0;  
  font-size: 50px;
  font-family: '楷体';
  color: #56b49b;
}

  /* .container {
    grid-template-columns: 1fr;
  } */

  .login-box {
    justify-content: center;
  }
}
</style>