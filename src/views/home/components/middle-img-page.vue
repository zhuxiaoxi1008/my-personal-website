<template>
    <section class="img-wrapper">
        <div class="black-bg">

        </div>
    </section>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.img-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  background-image: url('/himalaya.jpg');
  background-attachment: fixed;
  background-position: top center;
  background-repeat: no-repeat;
  background-size: cover;
  z-index: 1;
  box-sizing: border-box;
}

.black-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(to bottom, #000, transparent, transparent);
  z-index: 2;
}

</style>