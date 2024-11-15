<template>
    <section class="footer-wrapper">
        <div class="footer-content">
            <p>{{ proxy.$global.homefooterText }}</p>
        </div>
    </section>
</template>

<script setup>
const proxy = getCurrentInstance().proxy;

</script>

<style lang="scss" scoped>
.footer-wrapper {
    margin-top: 50px;
    height: 60px;
    
    background-color: $regular-text;
    display: flex;
    justify-content: center;
    align-items: center;
}

.footer-content {
    font-size: 12px;
    color: $background-color-light; 
    text-align: center; /* 文字居中 */
    font-family: Quotes, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
}
</style>
