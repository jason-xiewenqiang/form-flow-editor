<template>
  <div class="menu" :style="{ left: x + 'px', top: y + 'px' }">
    <el-menu
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#fff"
    >
      <el-menu-item index="2-1">新增任务</el-menu-item>
      <el-menu-item index="2-2">编辑任务</el-menu-item>
      <el-menu-item index="2-3">删除任务</el-menu-item>
    </el-menu>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  props: {
    x: {
      type: Number,
      default: 0
    },
    y: {
      type: Number,
      default: 0
    }
  },
  emits: ['menu-item'],
  setup(props, ctx) {
    const handleSelect = (action: string) => {
      ctx.emit('menu-item', action);
    };
    return {
      handleSelect
    };
  }
});
</script>

<style lang="less" scoped>
.menu {
  position: fixed;
  transition: all 1s ease;
  ::v-deep(.el-menu-item) {
    height: 40px;
    line-height: 40px;
    width: 200px;
  }
}
</style>
