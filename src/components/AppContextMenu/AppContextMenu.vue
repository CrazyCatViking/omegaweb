<template>
  <div class="app-context-menu__content">
    <AppMenuItem 
      name="Dashboard"
      route="/dashboard"
    />

    <AppMenuItem 
      name="Help"
      route="/help"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AppMenuItem from './components/AppMenuItem.vue';

export default defineComponent({
  components: {
    AppMenuItem,
  },
});
</script>

<style lang="scss">
.app-context-menu__content {
  display: flex;
  flex-direction: column;

  border-top: 1px solid black;
}
</style>