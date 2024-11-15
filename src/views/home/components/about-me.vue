<template>
  <section class="about-me-wrapper">
    <h3>{{ proxy.$global.aboutMe.label }}</h3>
    <div class="about-me-content">
      <el-steps align-center active="5" :direction="direction">
        <el-step
          v-for="(item, index) in proxy.$global.aboutMe.steps"
          :key="index"
          :id="'el-step-' + index"
        >
          <template v-slot:icon>
            <img :src="item.icon" class="step-icon" />
          </template>
          <template v-slot:title>
            <span>{{ item.title }}</span>
          </template>
          <template v-slot:description>
            <div class="about-me-description">
              <span>{{ item.description.label }}</span>
              <span>{{ item.description.content }}</span>
            </div>
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

<style lang="scss" scoped>
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

.about-me-description{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
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
  
  .about-me-description{
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    text-align: center;
    span{
      margin-right: 1rem;
    }
  }
}

@media screen and (min-width:200px) and (max-width: 400px) {
  .about-me-wrapper :deep(.el-step__description){
    padding-right: 10px;
  }
}
</style>
