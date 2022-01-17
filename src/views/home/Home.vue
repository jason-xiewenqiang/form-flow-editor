<template>
  <el-container class="home-main-container">
    <el-header>QAQ智能平台</el-header>
    <el-container>
      <el-aside width="200px">
        <el-menu
          :default-active="defautlActive"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          :collapse="isCollapse"
          :uniqueOpened="true"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <router-link v-for="item in menus" :key="item.path" :to="item.path">
            <el-menu-item :index="`${item.path}`">
              <i :class="item.icon"></i>
              <template #title>{{ item.name }}</template>
            </el-menu-item>
          </router-link>
        </el-menu>
      </el-aside>
      <el-scrollbar>
        <el-main>
          <router-view />
        </el-main>
      </el-scrollbar>
    </el-container>
  </el-container>
</template>
<script setup lang="ts">
import { computed, ref } from 'vue';
import { useRoute } from 'vue-router';

const isCollapse = ref(false);
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
const menus = [
  {
    name: '应用管理',
    icon: 'el-icon-menu',
    path: '/editor'
  },
  {
    name: '表单编辑',
    icon: 'el-icon-setting',
    path: '/form'
  },
  {
    name: '甘特图',
    icon: 'el-icon-picture-outline-round',
    path: '/gantt'
  },
  {
    name: '静态表格',
    icon: 'el-icon-star-off',
    path: '/grid'
  },
  {
    name: 'UI表格',
    icon: 'el-icon-pie-chart',
    path: '/table'
  }
];
const defautlActive = computed(() => {
  const route = useRoute();
  return `${String(route.path)}`;
});
</script>
<style lang="less">
.home-main-container {
  height: 100%;
  .el-container {
    height: calc(100% - 60px);
  }
  .el-header {
    background-color: rgb(84, 92, 100);
    height: 60px;
    line-height: 60px;
    color: #fff;
    font-size: 32px;
    box-sizing: border-box;
    border-bottom: 1px solid #ccc;
  }
  .el-aside {
    background-color: #545c64;
  }
  .el-menu {
    box-sizing: border-box;
  }
  .el-main {
    overflow-y: auto;
    height: 100%;
  }
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
}
</style>
