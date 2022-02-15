<template>
  <div :class="['omega-input', getClass()]">
    <div 
      v-if="isEmpty && !hasFocus"
      class="omega-input__label"
    >
      {{ label }}
    </div>

    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    isEmpty: {
      type: Boolean,
      default: true,
    },
    hasFocus: {
      type: Boolean,
      default: false,
    },
    label: {
      type: String,
      default: '',
    },
  },

  setup(props) {
    const getClass = () => {
      return props.hasFocus ? 'omega-input--has-focus' : ''; 
    };

    return {
      getClass,
    }
  },
});
</script>


<style lang="scss">
.omega-input {
  display: flex;

  background-color: white;
  border: 1px solid black;
  border-radius: 4px;
  height: 2rem;

  padding-left: 0.2rem;
  padding-right: 0.2rem;

  vertical-align: center;
  white-space: nowrap;
  overflow-x: scroll;

  &--has-focus {
    border-color: lightblue;
  }

  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  scrollbar-width: none;
}

.omega-input:hover {
  border-color: lightblue;
}

.omega-input__label {
  line-height: 2rem;
  padding-left: 0.2rem;
}
</style>