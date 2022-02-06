<template>
  <omega-menu
    direction="left"
  >
    <template v-slot:activator>
      <omega-button>
        {{ userName }}
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
import { defineComponent, ref } from 'vue';
import OmegaMenu from '@/components/OmegaComponents/OmegaMenu.vue';
import OmegaButton from '@/components/OmegaComponents/OmegaButton.vue';

export default defineComponent({
  components: {
    OmegaMenu,
    OmegaButton,
  },
  
  setup() {
    const userName = ref('Kristoffer Solvang-Jansen');

    return {
      userName,
    }
  },
});
</script>