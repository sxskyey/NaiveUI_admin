<script setup lang=ts>
import {ref} from 'vue'

</script>

<template>
    <div class="header">
        <n-button type="info" @click="$emit('Shown')">
            教师登录
        </n-button>
    </div>
</template>

<style scoped>
.header {
    display: flex;
    width: vw;
    height: auto;
    margin-top: 5px;
}
</style>