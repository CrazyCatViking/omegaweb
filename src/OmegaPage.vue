<template>
  <div class="omega-page">
    <div class="omega-page__title">
      <slot name="header">
        {{ title }}
      </slot>
    </div>

    <div class="omega-page__content">
      <slot />
    </div>
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
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.omega-page__title {
  display: flex;

  font-size: 30px;
  font-weight: 600;

  line-height: 2rem;

  white-space: nowrap;

  height: 2rem;
}

.omega-page__content {
  padding-top: 1rem;
}
</style>