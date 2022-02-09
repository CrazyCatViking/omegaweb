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
import { defineComponent, computed } from 'vue'
import { useAuth } from '@/utility/useAuth';
import OmegaDropdown from '@/components/OmegaComponents/OmegaDropdown.vue';

export default defineComponent({
  inheritAttrs: false,
  
  components: {
    OmegaDropdown,
  },

  setup() {
    const { self } = useAuth();
    const items = computed(() => self.value?.availableGuilds?.map((item: any) => ({
      ...item,
      label: item.name,
    })));

    return {
      items,
    }
  },
})
</script>
