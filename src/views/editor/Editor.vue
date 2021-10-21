<template>
  <div class="editor" ref="editorRef"></div>
</template>
<script lang='ts'>
import { defineComponent, onMounted, ref } from 'vue';
import { Process } from './process';

export default defineComponent({
  setup() {
    const editorRef = ref<HTMLElement | null>(null);
    let panelWidth: number = 0;
    let panelHeight: number = 0;
    let process: Process;
    // 获取容器 div 的宽高
    const getBoundingRect = (): { width: number; height: number } => {
      if (editorRef.value) {
        return editorRef.value.getBoundingClientRect();
      }
      return { width: window.innerWidth, height: window.innerHeight };
    };
    onMounted(() => {
      const { width, height } = getBoundingRect();
      panelWidth = width;
      panelHeight = height;
      if (editorRef.value) {
        process = new Process(editorRef.value, width, height);
      }
    });
    return {
      editorRef
    };
  }
});
</script>
<style lang="less" scoped>
.editor {
  height: 100%;
}
</style>
