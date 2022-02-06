<template>
  <div class="global-page-layout">
    <div class="app-header-menu">
      <AppGlobalMenu />
    </div>

    <div class="app-context-menu">
      <AppContextMenu />
    </div>
    
    <div class="app-content">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AppContextMenu from './AppContextMenu/AppContextMenu.vue';
import AppGlobalMenu from './GlobalMenu/GlobalMenu.vue';


export default defineComponent({
  name: 'GlobalPageLayout',

  components: {
    AppContextMenu,
    AppGlobalMenu,
  }
})
</script>

<style lang="scss">
$context-menu-width: 12rem;
$header-menu-height: 3rem;

.global-page-layout {
  width: 100%;
  height: 100%;

  overflow: auto;
}

.app-context-menu {
  position: fixed;
  width: $context-menu-width;
  height: calc(100% - $header-menu-height);

  z-index: 1000;

  left: 0;
  top: 3rem;

  background-color: gray;
}

.app-header-menu {
  position: fixed;
  height: $header-menu-height;
  width: 100%;

  z-index: 2000;
  
  left: 0;
  top: 0;

  background-color: beige;
}

.app-content {
  position: fixed;
  height: calc(100% - $header-menu-height);
  width: calc(100% - $context-menu-width);
  overflow: auto;
  
  top: 3rem;
  left: 12rem;

  background-color: blue;
}
</style>