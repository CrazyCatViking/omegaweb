<template>
  <omega-menu
    direction="left"
  >
    <template v-slot:activator>
      <omega-button>
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

export default defineComponent({
  components: {
    OmegaMenu,
    OmegaButton,
  },

  props: {
    userInfo: {
      type: Object,
      default: undefined,
    },
  },
});
</script>