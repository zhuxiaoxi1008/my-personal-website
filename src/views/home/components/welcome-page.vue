<template>
  <section class="hello-wrapper">
    <span class="hello_text" :data-text="proxy.$global.welcomeText">{{ proxy.$global.welcomeText }}</span>
    <span class="sub_text":data-text="proxy.$global.subText">{{ proxy.$global.subText }}</span>
    <mouse-move class="down-arrow" @click="handleClick"></mouse-move>
    <spark></spark>
  </section>
</template>

<script setup>
// import fluid from "./fluid.vue";
import spark from './spark.vue'
import MouseMove from "@/components/icon/mouse-move.vue"

const instance = getCurrentInstance();
const {proxy} = instance;

const handleClick = () => {
  let height = document.documentElement.clientHeight;
  window.scrollTo({top: height, behavior: 'smooth'});
}

</script>

<style lang="scss" scoped>
.hello-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.hello_text {
  margin: 0;
  padding: 0;
  pointer-events: none;
  font-size: 6em;
  text-transform: uppercase;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -70%);
  white-space: nowrap;
  z-index: 1;
  font-weight: 900;
  mix-blend-mode: color-dodge;
  font-family: "Arial";
  color: #fff;
}

.hello_text:before {
  content: attr(data-text);
  opacity: 0.15;
  position: absolute;
  transform-origin: bottom;
  transform: rotateX(180deg);
  line-height: 1.2em;
  filter: blur(1px);
  mix-blend-mode: color-dodge;
}

.sub_text{
  pointer-events: none;
  color: rgba(255, 255, 255, 0.8);
  z-index: 1;
  position: absolute;
  font-family: "Arial";
  font-size: 2em;
  top: 77%;
  left: 60%;
  transform: translate(-50%, -50%);
  white-space: nowrap;
  mix-blend-mode: color-dodge;
  font-family: "仿宋";
  text-align: right;
}

.down-arrow {
  left: 50%;
  top: 80px;
  transform: translateX(-50%);
  z-index:1;
}

@media screen and (max-width: 768px) {
  .hello_text {
    font-size: 2rem;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  .sub_text{
    font-size: 1em;
    top: 58%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>
