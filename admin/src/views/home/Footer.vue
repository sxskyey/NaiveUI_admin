<script setup lang=ts>
</script>

<template>
    <div class="footer">
        <li>
            Copyright&copy;1989-2023&nbsp&nbsp
        </li>
        <li>
            <a href="http://192.168.0.99:80" target="_blank" class="copyright">山西省煤炭地质水文勘查研究院有限公司幼儿园</a>
        </li>
        <li>
            &nbsp&nbsp联系电话：0351-7087142
        </li>
    </div>
</template>

<style scoped>
* {
    margin: 0;
    padding: 0;
}

.footer {
    width: vw;
    color: #505253;
    display: flex;
    bottom: 10px;
    justify-content: center;
    font-size: 15px;
    line-height: 2;
}

li {
    list-style: none;
}

.copyright {
    color: #505253;
    text-align: center;
    font-family: 'Roboto', sans-serif;
    text-decoration: none;
}

a:hover {
    color: #1db2d8;
}
</style>