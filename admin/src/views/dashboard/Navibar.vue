<script lang=ts>
import { h, defineComponent } from 'vue'
import type { Component } from 'vue'
import { NIcon } from 'naive-ui'
import {
  PersonCircleOutline as UserIcon,
  Pencil as EditIcon,
  LogOutOutline as LogoutIcon
} from '@vicons/ionicons5'

const renderIcon = (icon: Component) => {
  return () => {
    return h(NIcon, null, {
      default: () => h(icon)
    })
  }
}

export default defineComponent({
  setup() {
    return {
      options: [
        {
          label: '用户资料',
          key: 'profile',
          icon: renderIcon(UserIcon)
        },
        {
          label: '编辑用户资料',
          key: 'editProfile',
          icon: renderIcon(EditIcon)
        },
        {
          label: '退出登录',
          key: 'logout',
          icon: renderIcon(LogoutIcon)
        }
      ]
    }
  }
})

</script>

<template>
  <section>
    <ul class="left">
      <li>
        <img class="logo" src="../../assets/picture/home/Logo.png" alt="" />
      </li>
      <li style="margin-left: 20px">
        山西省煤炭地质水文勘查研究院有限公司幼儿园
      </li>
    </ul>

    <ul class="center">
      <li class="center-bar">
        <n-input placeholder="请输入查询内容" />
      </li>
    </ul>

    <ul class="right">
      <li>
        <n-dropdown :options="options">
          <span>用户资料</span>
        </n-dropdown>
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
  align-items: center;
}

.left {
  display: flex;
  align-items: center;
  flex-shrink: 0;
  font-size: 16px;
}

.logo {
  width: 40px;
  
}

.center-bar {
  flex-grow: 1;
  max-width: 1000px;
  min-width: 500px;
  margin-right: 200px;
}

.right {
  display: flex;
  justify-content: end;
  align-items: center;
 

}

.right item {
  display: flex;
  align-items: center;

}

span {
  font-size: 16px;
  color: #1f2020;
  font-family: 'Roboto', sans-serif;
  text-decoration: none;
}

span:hover {
  color: #1db2d8;
}

li {
  list-style: none;
  list-style-type: none;
  margin: 0px 10px;
  margin-top: 2px;
  flex-shrink: 0;
}
</style>