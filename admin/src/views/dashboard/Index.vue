<script setup lang=ts>
</script>

<template>
    <div class="container">
        <n-layout>
            <n-layout-header>颐和园路</n-layout-header>
            <n-layout has-sider>
                <n-layout-sider content-style="padding: 24px;">
                    海淀桥
                </n-layout-sider>
                <n-layout-content content-style="padding: 24px;">
                    平山道
                </n-layout-content>
            </n-layout>
            <n-layout-footer>成府路</n-layout-footer>
        </n-layout>
    </div>
</template>

<style scoped>
.container {

    position: absolute;
    width: 100%;
    height: 100%;
    padding: 0;




}

.n-layout-header,
.n-layout-footer {
    background: rgba(128, 128, 128, 0.2);
    padding: 24px;
}

.n-layout-sider {
    background: rgba(128, 128, 128, 0.3);
}

.n-layout-content {
    position: absolute;
    width : 100%;
    height : 100%;
    background: rgba(128, 128, 128, 0.4);
}
</style>