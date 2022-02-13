<template>
  <div 
    @click.prevent="onClick"
  >
    <slot name="header">
      <div class="omega-expanding-item__title">
        {{ title }}
      </div>
    </slot>
  </div>
  <ExpandTransition>
    <div
      v-show="showBody"
    >
      <slot/>
    </div>
  </ExpandTransition>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import ExpandTransition from './ExpandTransition.vue';

export default defineComponent({
  components: {
    ExpandTransition,
  },

  props: {
    title: {
      type: String,
      default: '',
    },
  },

  setup() {
    const showBody = ref(false);

    const onClick = () => {
      if (showBody.value) {
        showBody.value = false;
        return;
      }
      showBody.value = true;
    }

    return {
      showBody,
      onClick,
    }
  },
});
</script>

<style lang="scss">
.omega-expanding-item__title {
  height: 2.5rem;
}
</style>