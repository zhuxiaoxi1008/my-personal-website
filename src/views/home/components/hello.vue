<template>
  <section class="hello-wrapper">
    <span class="hello_text" data-text="Hello Resume">Hello Resume</span>
    <introduce></introduce>
  </section>
</template>

<script setup>
import introduce from "./introduce.vue";
</script>

<style lang="scss" scoped>
.hello-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
}

.hello_text {
  pointer-events: none;
  z-index: 10;
  margin: 0;
  white-space: nowrap;
  position: absolute;
  font-family: "Arial";
  font-size: 7em;
  color: white;
  transform: translate(-50%, -50%);
  left: 50%;
  top: 50%;
  text-transform: uppercase;
}

.hello_text:before {
  content: attr(data-text);
  background: linear-gradient(0deg, white 0, transparent 70%);
  color: transparent;
  opacity: 0.5;
  position: absolute;
  transform-origin: bottom;
  transform: rotateX(180deg);
  line-height: 0.9em;
  background-clip: text;
  filter: blur(1px);
}
</style>
