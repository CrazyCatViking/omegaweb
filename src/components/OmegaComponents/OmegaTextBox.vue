<template>
  <omega-input
    :isEmpty="isEmpty"
    :hasFocus="hasFocus"
  >
    <input
      class="omega-text-box"
      type="text"
      :value="internalValue"
      @input="onInput"
      @focus="onFocus"
      @blur="onBlur"
    />
  </omega-input>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from 'vue'
import OmegaInput from './OmegaInput.vue';
import { useModelValue } from '@/helpers/useModelValue';

export default defineComponent({
  components: {
    OmegaInput,
  },

  props: {
    modelValue: {
      type: String,
      default: '',
    },
  },

  emits: ['update:modelValue'],

  setup(props, { emit }) {
    const internalValue = useModelValue<string>(props, emit);
    const isEmpty = computed(() => !internalValue.value);
    const hasFocus = ref(false);

    const onInput = (input: any) => {
      internalValue.value = input.target.value;
    };

    const onFocus = () => {
      hasFocus.value = true;
    };

    const onBlur = () => {
      hasFocus.value = false;
    };

    return {
      internalValue,
      isEmpty,
      hasFocus,

      onInput,
      onFocus,
      onBlur,
    };
  },
});
</script>

<style lang="scss">
.omega-text-box {
  border: none;
  outline: none;

  flex: 1;
}
</style>
