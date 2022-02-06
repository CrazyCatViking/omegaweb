<template>
  <div class="global-menu">
    <div class="global-menu__guild-context">
      <GuildContextDropDown 
        v-model="selectedServer"
      />
    </div>
    
    <omega-button 
      v-if="false"
    >
      {{ 'Login' }}
    </omega-button>
    <div class="global-menu__user-menu">
      <UserMenu />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import OmegaButton from '@/components/OmegaComponents/OmegaButton.vue';
import UserMenu from './components/UserMenu.vue';
import GuildContextDropDown from './components/GuildContextDropDown.vue';

export default defineComponent({
  components: {
    OmegaButton,
    UserMenu,
    GuildContextDropDown,
  },

  setup() {
    const selectedServer = ref();

    return {
      selectedServer,
    };
  },
});
</script>

<style lang="scss">
.global-menu {
  display: flex;
  position: relative;
  height: 100%;
  width: 100%;

  justify-content: space-between;
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
  display: flex;
  flex-direction: column;

  justify-content: center;
}

.global-menu__guild-context {
  display: flex;
  float: left;

  flex-direction: column;

  justify-content: center;

  border-right: 1px solid grey;

  width: 12rem;
  height: 3rem;
}
</style>