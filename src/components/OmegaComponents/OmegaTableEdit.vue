<template>
  <div class="omega-table-edit">
    <div class="omega-table-edit__header">
      <slot name="header">
        {{ title }}
      </slot>
      <slot name="header-buttons">
        <span 
          v-show="meta.dirty"
          class="omega-table-edit__header-buttons"
        >
          <omega-button
            grow
            @click="$emit('discard')"
          >
            {{ 'Discard' }}
          </omega-button>

          <omega-button
            grow
            @click="$emit('save')"
          >
            {{ 'Save' }}
          </omega-button>
        </span>
      </slot>
    </div>

    <div class="omega-table-edit__body">
      <slot/>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import OmegaButton from './OmegaButton.vue';

export default defineComponent({
  components: {
    OmegaButton
  },

  props: {
    title: {
      type: String,
      default: '',
    },
    meta: {
      type: Object,
      required: true,
    },
  },
})
</script>

<style lang="scss">
.omega-table-edit__header {
  display: flex;
  justify-content: space-between;

  height: 3rem;
  padding-left: 1rem;

  font-size: 30px;
  font-weight: 600;

  border-bottom: 1px solid lightgrey;
}

.omega-table-edit__header-buttons {
  display: flex;
  width: 8rem;
}

.omega-table-edit__body {
  display: flex;
  flex-wrap: wrap;

  row-gap: 0.5rem; 
}
</style>
