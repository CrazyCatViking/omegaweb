<template>
  <omega-dropdown 
    :items="items"
  />
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import OmegaDropdown from '@/components/OmegaComponents/OmegaDropdown.vue';

export default defineComponent({
  components: {
    OmegaDropdown,
  },

  setup() {
    const items = computed(() => ([
      {
        id: 'single-vote',
        label: 'Single vote',
      },
      {
        id: 'multi-vote',
        label: 'Multi vote',
      },
    ]));

    return {
      items,
    }
  },
})
</script>
