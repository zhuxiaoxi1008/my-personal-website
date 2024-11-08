<template>
  <section class="hello-wrapper">
    <span class="hello_text" data-text="Hello Resume">Hello Resume</span>
    <spark></spark>
  </section>
</template>

<script setup>
import spark from "./spark.vue";
</script>

<style lang="scss" scoped>
.hello-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
}

.hello_text {
  margin: 0;
  padding: 0;
  pointer-events: none;
  font-size: 7em;
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
  // -webkit-box-reflect: below -5px linear-gradient(transparent, rgba(0, 0, 0, .4));
  // -webkit-text-stroke: 1.3px white;
  // letter-spacing: 1.125px;
}

.hello_text:before {
  content: attr(data-text);
  opacity: 0.15;
  position: absolute;
  transform-origin: bottom;
  transform: rotateX(180deg);
  line-height: 1.0em;
  filter: blur(1px);
  mix-blend-mode: color-dodge;
}

@media (min-width: 100px) and (max-width: 768px) {
  .hello_text {
    font-size: 2rem;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>
