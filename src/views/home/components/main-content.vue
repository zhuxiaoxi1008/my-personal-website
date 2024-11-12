<template>
  <section class="main-content">
    <section class="container-row">
      <div class="container-left">
        <div class="sidebar">
          <div class="sidebar-card" :class="{ 'sidebar-trans': isTrans }">
            <div class="sidebar-avatar" :class="{ 'img-trans': isTrans }">
              <img class="sidebar-avatar-img" data-src="/person.png" src="/person.png" />
            </div>
            <div class="sidebar-name">{{ proxy.$global.name }}</div>
            <div class="sidebar-label">{{ proxy.$global.hi }}</div>
            <el-divider class="divider" border-style="dashed" />
            <div class="sidebar-social">
              <Icon size="28">
                <LogoGithub></LogoGithub>
              </Icon>
              <Icon size="28" style="margin-left: 10px">
                <Blog></Blog>
              </Icon>
            </div>
            <el-divider class="divider" border-style="dashed" />
            <ul>
              <li class="other-item" v-for="(item, key) in proxy.$global.info" :key="key">
                <span class="item-label">{{ item.label }}:</span>
                <span class="item-label-light">{{ item.value }}</span>
              </li>
            </ul>
            <el-divider class="divider" border-style="dashed" />
            <div class="sidebar-download">
              <span class="downResume">{{ proxy.$global.downloadResume }}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="container-right">
        <div class="container-right-content">
          <div class="brand-card-list" :class="{ 'skill-trans': isTrans }">
            <div class="brand-card-item" v-for="(skillItem, k) in proxy.$global.skillList" :key="k">
              <div class="card-item">
                <h3 class="card-item-title">{{ skillItem.title }}</h3>
                <el-divider class="divider" border-style="dashed" />
                <div class="card-item-content">{{ skillItem.name }}</div>
              </div>
            </div>

          </div>
          <tips :class="{ 'skill-trans': isTrans }"></tips>
        </div>
      </div>
    </section>
    <about-me></about-me>
  </section>

</template>

<script setup>

import tips from './tips.vue'
import aboutMe from './about-me.vue'

const instance = getCurrentInstance();
const { proxy } = instance;

const isTrans = ref(false)

window.addEventListener('scroll', (e) => {
  const clientHeight = document.documentElement.clientHeight
  const scrollTop = document.documentElement.scrollTop
  if (scrollTop > clientHeight) {
    isTrans.value = true;
  } else {
    isTrans.value = false;
  }
})
</script>

<style lang="scss" scoped>
.sidebar-trans {
  transform: translateY(-50%);
  transition: all .3s linear;
}

.main-content {
  max-width: 1140px;
  width: 100%;
  margin: 0 auto;
  transition: all .4s linear;
}

.container-row {
  display: flex;
  justify-content: space-between;
  transition: all .4s linear;
  height: 320px;
  box-sizing: border-box;
}

.sidebar-name {
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 15px;
}

.sidebar-name,
.sidebar-label,
.sidebar-social,
.sidebar-download {
  text-align: center;
}

.sidebar-social span:hover {
  color: $primary-color;
}

.sidebar-card {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 70px 25px 35px;
  border-radius: 10px;
  box-shadow: 0 2px 4px -2px #0000004d;
  background-color: #fff;
  background-image: url(../../../assets/images/bg-map.png);
  background-position: center center;
}

.sidebar-card::before {
  content: "";
  position: absolute;
  left: 30px;
  top: -8px;
  height: 8px;
  width: calc(100% - 60px);
  background-color: #fcfcfe;
  border-radius: 5px 5px 0 0;
  opacity: .3;
}

.sidebar-avatar {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  top: -65px;
  left: 50%;
  transform: translate(-50%);
}

.img-trans {
  position: absolute;
}

.sidebar-avatar-img {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  margin: 0 auto;
}

.sidebar {
  height: 100%;
  position: relative;
}



.container-left {
  flex: 1;
  padding: 10px;
  box-sizing: border-box;
  border-radius: 10px;
  background-color: white;
  margin-right: 1em;
  z-index: 10;
}

.container-right {
  flex: 2;
  padding: 10px;
  box-sizing: border-box;
  border-radius: 10px;
  background-color: white;
}

.container-right-content {
  padding: 0 0 60px;
  position: relative;
  z-index: 1;
  height: 100%;
}

.brand-card-list {
  display: flex;
  justify-content: space-between;
}

.skill-trans {
  transform: translateY(-80px);
  transition: all .3s linear;
}

.brand-card-item {
  width: calc(33.33% - 20px);
  max-height: 220px;
  box-sizing: border-box;
  position: relative;
  margin-bottom: 40px;
}

.brand-card-item::before {
  content: "";
  position: absolute;
  left: 30px;
  top: -8px;
  height: 8px;
  width: calc(100% - 60px);
  background-color: #fcfcfe;
  border-radius: 5px 5px 0 0;
  opacity: .3;
}

.card-item {
  text-align: center;
  border-radius: 10px;
  padding: 40px;
  box-shadow: 0 2px 4px -2px #00000026;
  background-color: #fff;
  background-image: url(../../../assets/images/bg-map.png);
  background-position: center center;
}

.divider {
  margin: 2em 0;
}

li {
  list-style: none;
}

.other-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;

  .item-label {
    font-weight: 700;
    letter-spacing: 2px;
    color: $primary-text;
  }

  .item-label-light {
    color: $secondary-text;
  }
}

.downResume {
  letter-spacing: 2px;
  color: $primary-color;
}

.downResume:hover {
  font-weight: 700;
}
</style>
