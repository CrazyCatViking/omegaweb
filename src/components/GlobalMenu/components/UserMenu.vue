<template>
  <omega-menu
    direction="left"
  >
    <template v-slot:activator>
      <omega-button class="user-menu__button">
        <omega-external-icon :src="userInfo?.avatar"/>
        {{ userInfo?.username }}
      </omega-button>
    </template>

    <template v-slot:content>
      <omega-button>
        {{ 'Settings' }}
      </omega-button>
      <omega-button>
        {{ 'Logout' }}
      </omega-button>
    </template>
  </omega-menu>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import OmegaMenu from '@/components/OmegaComponents/OmegaMenu.vue';
import OmegaButton from '@/components/OmegaComponents/OmegaButton.vue';
import OmegaExternalIcon from '@/components/OmegaComponents/OmegaExternalIcon.vue';

export default defineComponent({
  components: {
    OmegaMenu,
    OmegaButton,
    OmegaExternalIcon,
  },

  props: {
    userInfo: {
      type: Object,
      default: undefined,
    },
  },
});
</script>