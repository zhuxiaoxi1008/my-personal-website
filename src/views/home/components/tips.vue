<template>
    <div class="wrapper">
        <h3 class="tips-label">{{ proxy.$global.tips.label }}</h3>
        <p class="tips-content">{{ proxy.$global.tips.content }}</p>
    </div>
</template>

<script setup>
const instance = getCurrentInstance()
const { proxy } = instance

</script>

<style lang="scss" scoped>
.wrapper{
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  border-radius: 10px;
  box-shadow: 0 2px 4px -2px #0000004d;
  background-color: #fff;
  background-image: url(../../../assets/images/bg-map.png);
  background-position: center center;
  padding: 18px;
}

.tips-label{
    margin: 0;
    color: $primary-text;
}

.tips-content{
    text-indent: 2em;
    color: $secondary-text;
}
</style>