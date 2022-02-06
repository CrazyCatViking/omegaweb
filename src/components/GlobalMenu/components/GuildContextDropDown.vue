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
import { defineComponent, ref } from 'vue'
import { useGraphQL } from '@/graphql/useGraphQL';
import OmegaDropdown from '@/components/OmegaComponents/OmegaDropdown.vue';
import gql from 'graphql-tag';

export default defineComponent({
  inheritAttrs: false,
  
  components: {
    OmegaDropdown,
  },

  setup() {
    const { client } = useGraphQL();
    const items = ref<any[]>([]);

    const getGuilds = async () => {
      const { data } = await client.query({
        query: gql`
          query GetGuilds {
            guilds {
              items {
                id
                name
              }
            },
          },
        `,
      });

      items.value = data.guilds?.items?.map((item: any) => ({
        ...item,
        label: item.name,
      }));
    }

    getGuilds();

    return {
      items,
    }
  },
})
</script>
