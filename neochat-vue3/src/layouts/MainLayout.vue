<template>
  <a-layout class="layout">
    <a-layout-header class="main-header"> </a-layout-header>
    <a-layout>
      <a-layout-content content-style="padding: 24px;">
        <router-view />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.layout {
  top: 0;
  left: 0;
  background: #f6eded;
  z-index: 100;
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 100%;
  // 保证滚动
  overflow: auto;
  .main-header {
    position: "fixed";
    z-index: 1;
    width: "100%";
    background-color: #49a6bde4;
  }
}
</style>
