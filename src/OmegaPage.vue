<template>
  <div class="omega-page">
    <div class="omega-page__title">
      {{ title }}
    </div>

    <slot></slot>
    
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    title: {
      type: String,
      default: '',
    },
  },
});
</script>

<style lang="scss">
.omega-page {
  margin: 1.0rem 1.0rem 1.0rem 1.0rem;
}

.omega-page__title {
  font-size: 40px;
  font-weight: 600;
}
</style>