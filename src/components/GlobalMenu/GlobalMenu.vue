<template>
  <div class="global-menu">
    <button 
      v-if="false"
      class="global-menu__login-button"
    >
      {{ 'Login' }}
    </button>
    <div class="global-menu__user-menu">
      <UserMenu />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import UserMenu from './components/UserMenu.vue';

export default defineComponent({
  components: {
    UserMenu,
  }
});
</script>

<style lang="scss">
.global-menu {
  position: relative;
  height: 100%;
  width: 100%;
}

.global-menu__login-button {
  border: none;
  color: white;
  background-color: darkgray;
  float: right;
  height: 100%;
  width: 6rem;
  text-align: center;
  vertical-align: middle;
}

.global-menu__user-menu {
  float: right;
}
</style>