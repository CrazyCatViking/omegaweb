<template>
  <button :class="getClass('omega-button', { grow, border, slim, round })">
    <slot />
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { getClass } from '@/helpers/useGetClass';

export default defineComponent({
  props: {
    grow: {
      type: Boolean,
      default: false,
    },

    border: {
      type: Boolean,
      default: false,
    },

    slim: {
      type: Boolean,
      default: false,
    },

    round: {
      type: Boolean,
      default: false,
    }
  },

  setup() {
    return {
      getClass,
    }
  },
});
</script>

<style lang="scss">
.omega-button {
  display: flex;

  justify-content: space-around;

  align-items: center;

  height: 3rem;
  background: none;
  border: none;

  .omega-external-icon {
    height: 80%;
    margin-right: 0.5rem;
  }

  &--grow {
    flex: 1;
  }
  
  &--border {
    border: 1px solid black;
  }

  &--slim {
    height: 2rem;
  }

  &--round {
    border: 1px solid black;
    border-radius: 4px;
  }
}

.omega-button:hover {
  background-color: rgba(0, 0, 0, 0.2);
}
</style>