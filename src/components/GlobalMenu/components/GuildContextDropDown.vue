<template>
  <div :style="{ margin: '0.4rem' }">
    <omega-dropdown 
      v-bind="$attrs"
      :items="items"
      :label="'Select a server'"
    />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import OmegaDropdown from '@/components/OmegaComponents/OmegaDropdown.vue';

export default defineComponent({
  inheritAttrs: false,
  
  components: {
    OmegaDropdown,
  },

  setup() {
    const items = computed(() => ([
      {
        id: 'test1',
        label: 'test1',
      },
      {
        id: 'test2',
        label: 'test2',
      },
      {
        id: 'test3',
        label: 'test3',
      },
      {
        id: 'test4',
        label: 'test4',
      },
      {
        id: 'test5',
        label: 'test5',
      },
      {
        id: 'test6',
        label: 'test6',
      },
    ]));

    return {
      items,
    }
  },
})
</script>
