<template>
  <div class="omega-dropdown">
    <omega-menu
      v-model:visible="isVisible"
    >
      <template v-slot:activator>
        <omega-input
          :is-empty="!selectedItem"
          :label="label"
          v-model:visible="isVisible"
        >
          <span 
            v-if="selectedLabel"
            class="omega-dropdown__label"
          >
            {{ selectedLabel }}
          </span>
        </omega-input>
      </template>

      <template v-slot:content>
        <omega-menu-list>
          <omega-list-item
            v-for="(item) in items"
            :key="item.id"
            @click="onListItemClick(item)"
          >
          <span class="omega-dropdown__item-label">
            {{ item.label }}
          </span>
          </omega-list-item>
        </omega-menu-list>
      </template>
    </omega-menu>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref, watch } from 'vue'
import OmegaMenu from './OmegaMenu.vue';
import OmegaMenuList from './OmegaMenuList.vue'
import OmegaListItem from './OmegaListItem.vue';
import OmegaInput from './OmegaInput.vue';
import { useModelValue } from '@/helpers/useModelValue';

export default defineComponent({
  components: {
    OmegaMenu,
    OmegaMenuList,
    OmegaListItem,
    OmegaInput,
  },

  props: {
    modelValue: {
      type: String,
      default: undefined,
    },

    items: {
      type: Array,
      default: () => [],
    },

    label: {
      type: String,
      default: '',
    },
  },

  emits: [
    'update:modelValue',
  ],
  
  setup(props, { emit }) {
    const selectedItem = useModelValue(props, emit);
    const isVisible = ref(false);

    const selectedLabel = computed(() => {
      if (!selectedItem.value) return 'test';
      const item: any = props.items.find((item: any) => item.id === selectedItem.value);
      return item?.label ?? `[${selectedItem.value}]`
    });

    const onListItemClick = (item: Record<string, unknown>) => {
      selectedItem.value = item.id;
      isVisible.value = false;
    };

    return {
      selectedItem,
      selectedLabel,
      isVisible,
      onListItemClick,
    };
  },
})
</script>

<style lang="scss">
.omega-dropdown__label {
  display: flex;
  flex-shrink: 1;
  line-height: 2rem;
  padding-left: 0.2rem;

  font-size: 13px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.omega-dropdown__item-label {
  padding: 0.2rem;
  font-size: 13px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
</style>