<template>
  <section class="about-me-wrapper">
    <h3>{{ proxy.$global.aboutMe.label }}</h3>
    <div class="about-me-content">
      <el-steps align-center :active="4" :direction="direction">
        <el-step
          v-for="(item, index) in proxy.$global.aboutMe.steps"
          :key="index"
          :id="'el-step-' + index"
        >
          <template v-slot:title>
            <div>{{ item.title }}</div>
          </template>
          <template v-slot:description>
            <div>{{ item.description }}</div>
          </template>
          <template v-slot:icon>
            <img :src="item.icon" class="step-icon" />
          </template>
        </el-step>
      </el-steps>
    </div>
  </section>
</template>

<script setup>
const instance = getCurrentInstance();
const { proxy } = instance;

const direction = ref("horizontal");

const handleResize = () => {
  let clientWidth = document.documentElement.clientWidth;
  if (clientWidth <= 768) {
    direction.value = "vertical";
  } else {
    direction.value = "horizontal";
  }
};

window.onresize = () => {
  console.log("resize");
  handleResize();
};

onMounted(() => {
  handleResize();
});
</script>

<style lang="scss">
.about-me-wrapper {
  position: relative;
  display: flex;
  flex-direction: column;
}

.about-me-content {
  position: relative;
  margin-top: 2.4rem;
}

.step-icon {
  width: 100px;
  height: 100px;
}

@media screen and (max-width: 768px) {
  .about-me-wrapper {
    padding: 0 3rem;
  }

  .step-icon {
    width: 1.2rem;
    height: 1.2rem;
  }

  .about-me-content {
    height: 450px;
    margin-top: 1.2rem;
  }
}
</style>
