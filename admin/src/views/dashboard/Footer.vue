<script setup lang=ts>
</script>

<template>
    <section>
        <ul class="footer-item">
            <li class="item">
                Copyright&copy;1989-2023&nbsp&nbsp
            </li>
            <li class="item">
                <a href="http://192.168.0.99:80" target="_blank" class="copyright">山西省煤炭地质水文勘查研究院有限公司幼儿园</a>
            </li>
            <li class="item">
                &nbsp&nbsp联系电话：0351-7087142
            </li>
        </ul>
    </section>
</template>

<style scoped>
* {
    margin: 0;
    padding: 0;
}

section {
    display: flex;
    align-items: end;
}

.footer-item {
    color: #505253;
    display: flex;
    justify-content: center;
}

.item {
    
}

li {
    list-style: none;
    
}

.copyright {
    color: #505253;
    font-family: 'Roboto', sans-serif;
    text-decoration: none;
}

a:hover {
    color: #1db2d8;
}
</style>