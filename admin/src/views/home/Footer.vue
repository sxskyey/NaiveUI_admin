<script setup lang=ts>
</script>

<template>
    <div class="footer">
        <ul>
            <li>
                Copyright&copy;1989-2023&nbsp&nbsp
            </li>
            <li>
                <a href="http://192.168.0.99:80" target="_blank" class="copyright">山西省煤炭地质水文勘查研究院有限公司幼儿园</a>
            </li>
            <li>
                &nbsp&nbsp联系电话：0351-7087142
            </li>
        </ul>
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
    position: fixed;
    display: flex;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    justify-content: center;
    
}

ul {
    display: flex;
    flex-shrink: 0;
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