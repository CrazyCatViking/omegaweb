<template>
  <transition 
    name="expand" 
    mode="in-out"
    @enter="onEnter"
    @leave="onLeave"
  >
    <slot />
  </transition>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ExpandTransition',

  setup() {
    const onEnter = async (element: HTMLElement) => {
      element.style.height = 'auto';
      const { height } = getComputedStyle(element);
      element.style.height = '0';

      getComputedStyle(element).height;

      element.style.height = height;
    }

    const onLeave = async (element: HTMLElement) => {
      element.style.height = '0';
    } 

    return {
      onEnter,
      onLeave,
    }
  }
});
</script>

<style lang="scss">
$duration: 0.15s;

.expand-enter-active,
.expand-leave-active {
  transition: height $duration ease-in-out;
  overflow: hidden;

  > * {
    transition: opacity $duration ease-in-out;
  }
}

.expand-enter-form,
.expand-leave-to {
  height: 0;

  > * {
    opacity: 0;
  }
}
</style>
