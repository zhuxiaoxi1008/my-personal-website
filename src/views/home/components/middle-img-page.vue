<template>
  <section class="img-wrapper">
    <div class="black-bg">
      <div class="row-warpper">
        <div class="row">
          <div class="row-col-left"></div>
          <div class="row-col-right">
            <div class="banner-text" :class="{'trans': isTrans, 'default': !isTrans}">
              <p class="text-tip">{{ proxy.$global.middleImgPage.title }}</p>
              <p class="text-main">{{ proxy.$global.middleImgPage.content }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const instance = getCurrentInstance();
const { proxy } = instance;

const isTrans = ref(false);

window.addEventListener('scroll', (e) => {
  const clientHeight = document.documentElement.clientHeight
  const scrollTop = document.documentElement.scrollTop
  if (scrollTop > clientHeight) {
    isTrans.value = true;
  }else {
    isTrans.value = false;
  }
})

</script>

<style lang="scss" scoped>
.img-wrapper {
  z-index: 1;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  border-radius: 0 0 20px 20px;
  box-shadow: 0 2px 20px #0000001a;
  transition: all .4s linear;
  background-image: url('/shan1.jpg');
  background-position: center;
  background-attachment: fixed;
  background-size: cover;
}

.black-bg {
  z-index: 2;
  padding: 80px 0;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-end;
  background-image: linear-gradient(to bottom, #000, transparent, transparent);
}

.row-warpper {
  position: relative;
  width: 100%;
  max-width: 1140px;
  margin: 0 auto;
  padding: 0;
  bottom: 0;
}

.row {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  color: white;
  font-size: 30px;
}

.row-col-left {
  flex: 1;
}

.row-col-right {
  flex: 2;
  margin-left: 2em;
}

.text-tip {
  font-size: 1.2rem;
  font-weight: 700;
  color: #fff;
  margin: 0;
}

.text-main {
  font-size: 3rem;
  font-weight: 700;
  line-height: 1.2;
  text-shadow: 0 1px 10px rgba(255, 255, 255, .2);
  background: url("/title_bg.png");
  background-clip: text;
  color: transparent;
  margin: 40px 0;
}

.default{
  transform: translateX(-50%);
}

.trans{
  transform: translateX(0);
}

.banner-text{
  transition: all .2s linear;
}
</style>