<template>
  <div class="global-menu">
    <div class="global-menu__guild-context">
      <GuildContextDropDown 
        v-if="self"
        v-model="selectedServer"
      />
    </div>
    
    <omega-button 
      v-if="!self"
      @click="login"
    >
      {{ 'Login' }}
    </omega-button>
    <div 
      v-else-if="self"
      class="global-menu__user-menu"
    >
      <UserMenu 
        :user-info="self"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue';
import { useAuth } from '@/utility/useAuth';
import OmegaButton from '@/components/OmegaComponents/OmegaButton.vue';
import UserMenu from './components/UserMenu.vue';
import GuildContextDropDown from './components/GuildContextDropDown.vue';
import { useOmegaLogin } from './useOmegaLogin';

export default defineComponent({
  components: {
    OmegaButton,
    UserMenu,
    GuildContextDropDown,
  },

  setup() {
    const { self, changeGuildContext } = useAuth();
    const { login } = useOmegaLogin();
    const selectedServer = ref();

    watch(selectedServer, changeGuildContext);
    watch(() => self.value?.guildContext?.id, (value: any) => {
      selectedServer.value = value;
    }, { immediate: true });

    return {
      selectedServer,
      self,
      login,
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