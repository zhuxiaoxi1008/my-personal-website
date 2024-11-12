<template>
    <section class='about-me-wrapper'>
        <h3>{{ proxy.$global.aboutMe.label }}</h3>
    <div class="about-me-content">
        <el-steps align-center :active="4">
            <el-step v-for="(item, index) in proxy.$global.aboutMe.steps" :key="index" :id="'el-step-' + index">
                <template v-slot:title>
                    <div>{{ item.title }}</div>
                </template>
                <template v-slot:description>
                    <div>{{ item.description }}</div>
                </template>
                <template v-slot:icon>
                    <img :src="item.icon" alt="" style="width: 100px; height: 100px">
                </template>
            </el-step>
        </el-steps>
    </div>
    </section>

   
</template>

<script setup>
const instance = getCurrentInstance()
const { proxy } = instance


</script>

<style lang="scss">
.about-me-wrapper{
    position: relative;
    display: flex;
    flex-direction: column;
}

.about-me-content{
    position: relative;
    margin-top: 2.4rem;
}
</style>