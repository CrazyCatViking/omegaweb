<template>
  <div class="global-menu">
    <div class="global-menu__guild-context">
      <GuildContextDropDown 
        v-model="selectedServer"
      />
    </div>
    
    <omega-button 
      v-if="!userInfo?.id"
      @click="login"
    >
      {{ 'Login' }}
    </omega-button>
    <div 
      v-else-if="userInfo?.id"
      class="global-menu__user-menu"
    >
      <UserMenu 
        :user-info="userInfo"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useGraphQL } from '@/graphql/useGraphQL';
import OmegaButton from '@/components/OmegaComponents/OmegaButton.vue';
import UserMenu from './components/UserMenu.vue';
import GuildContextDropDown from './components/GuildContextDropDown.vue';
import { useOmegaLogin } from './useOmegaLogin';
import gql from 'graphql-tag';

export default defineComponent({
  components: {
    OmegaButton,
    UserMenu,
    GuildContextDropDown,
  },

  setup() {
    const { client } = useGraphQL();
    const selectedServer = ref();
    const userInfo = ref<Record<string, any>>();
    const { login } = useOmegaLogin();

    const getUser = async () => {
      const { data } = await client.query({
        query: gql`
          query GetUser {
            user {
              id,
              username,
            }
          }
        `,
      });

      userInfo.value = data.user;
    };

    getUser();

    return {
      selectedServer,
      userInfo,

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