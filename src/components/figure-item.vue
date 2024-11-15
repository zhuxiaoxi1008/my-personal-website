<template>
  <figure class="figure-item" :class="{
    'no-mask': !prop.mask
  }
  ">
    <img :src="prop.img" alt="logo" />
    <div :class="{
      [`mask-${prop.maskDirection}`]: prop.animation,
      'mask': !prop.animation
    }">
      <div class="mask-card"></div>
      <div class="mask-card"></div>
      <div class="mask-card"></div>
      <div class="mask-card"></div>
      <div class="mask-card"></div>
    </div>
    <figcaption class="figure-description" :style="prop.color ? `color: ${prop.color}` : ''">
      <span>{{ prop.description }}</span>
    </figcaption>
  </figure>
</template>

<script setup>
const prop = defineProps({
  img: {
    type: String,
    default: '',
  },
  description: {
    type: String,
    default: '',
  },
  mask: {
    type: Boolean,
    default: true,
  },
  animation: {
    type: Boolean,
    default: true,
  },
  maskDirection: {
    type: String,
    default: 'top',
  },
  color: {
    type: String,
    default: '',
  }
})

</script>

<style lang="scss" scoped>
$mask-color: rgba(0, 0, 0, 0.8);
$description-color: rgba(255, 255, 255, 0.9);
.size-warrper {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  pointer-events: none;
}

.figure-item {
  position: relative;
  display: inline-block;
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  overflow: hidden;

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &:hover .figure-description {
    opacity: 1;
    transition: opacity .5s ease-in-out;
  }

  & .figure-description {
    @extend .size-warrper;
    color: $description-color;
    opacity: 0;
    z-index: 10;
    word-break: break-all;
    text-align: justify;

    & span {
      padding: 0 20px;
    }
  }
}

.mask-top {
  @extend .size-warrper;

  & .mask-card:nth-child(1) {
    width: 0;
    height: 20%;
    transition: width .1s ease-in-out;
  }

  & .mask-card:nth-child(2) {
    width: 0;
    height: 20%;
    transition: width .2s ease-in-out;
  }

  & .mask-card:nth-child(3) {
    width: 0;
    height: 20%;
    transition: width .3s ease-in-out;
  }

  & .mask-card:nth-child(4) {
    width: 0;
    height: 20%;
    transition: width .4s ease-in-out;
  }

  & .mask-card:nth-child(5) {
    width: 0;
    height: 20%;
    transition: width .5s ease-in-out;
  }
}

.mask-bottom {
  @extend .size-warrper;

  & .mask-card:nth-child(1) {
    width: 0;
    height: 20%;
    transition: width .5s ease-in-out;
  }

  & .mask-card:nth-child(2) {
    width: 0;
    height: 20%;
    transition: width .4s ease-in-out;
  }

  & .mask-card:nth-child(3) {
    width: 0;
    height: 20%;
    transition: width .3s ease-in-out;
  }

  & .mask-card:nth-child(4) {
    width: 0;
    height: 20%;
    transition: width .2s ease-in-out;
  }

  & .mask-card:nth-child(5) {
    width: 0;
    height: 20%;
    transition: width .1s ease-in-out;
  }
}



.figure-item:hover .mask-card {
  z-index: 10;
  width: 100%;
  background-color: $mask-color;
}


.figure-item .mask {
  @extend .size-warrper;
  background-color: $mask-color;
}

.figure-item.no-mask .figure-description {
  opacity: 1;
}


</style>