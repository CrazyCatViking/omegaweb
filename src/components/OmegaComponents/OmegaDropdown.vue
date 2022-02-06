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
            v-if="selectedItem?.label"
            class="omega-dropdown__label"
          >
            {{ selectedItem?.label }}
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
            {{ item.label }}
          </omega-list-item>
        </omega-menu-list>
      </template>
    </omega-menu>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue'
import OmegaMenu from './OmegaMenu.vue';
import OmegaMenuList from './OmegaMenuList.vue'
import OmegaListItem from './OmegaListItem.vue';
import OmegaInput from './OmegaInput.vue';

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
    const selectedItem = ref();
    const isVisible = ref(false);

    const onListItemClick = (item: Record<string, unknown>) => {
      selectedItem.value = item;
      isVisible.value = false;
    };

    watch(() => props.modelValue, (value: any) => {
      if (!value) return;

      const item = props.items?.find((item: any) => item.id === value);
      if (!item) selectedItem.value = { id: value, label: value };
      
      selectedItem.value = item;
    }, { immediate: true });

    watch(selectedItem, (value: any) => {
      if (value !== props.modelValue) {
        emit('update:modelValue', value.id);
      }
    });

    return {
      selectedItem,
      isVisible,
      onListItemClick,
    };
  },
})
</script>

<style lang="scss">
.omega-dropdown__label {
  line-height: 2rem;
  padding-left: 0.2rem;
}
</style>