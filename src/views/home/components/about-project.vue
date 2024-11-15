<template>
    <section class="project-warrper">
        <h3>{{ proxy.$global.aboutProject.label }}</h3>
        <div class="project-list">
            <figure-item v-for="(item, k) in proxy.$global.aboutProject.list" :key="k" :img="item.img"
                :mask="item.mask" :animation="item.animation" :mask-direction="item.maskDirection"
                :description="item.description" class="project-card"></figure-item>
        </div>
    </section>
</template>

<script setup>
import figureItem from '@/components/figure-item.vue';
const proxy = getCurrentInstance().proxy;

</script>

<style lang="scss" scoped>
.project-list {
    margin-top: 1.2rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 50px;
}

@media (max-width: 768px) {
    .project-warrper{
        padding: 0 3rem;
    }
    .project-list {
        grid-template-columns:  1fr;
        gap: 10px;
    }
}

.project-card {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    /* 增大阴影效果 */
    border-radius: 8px;
    /* 增大圆角 */
    overflow: hidden;
    /* 隐藏溢出的内容 */
    height: 200px;
}
</style>