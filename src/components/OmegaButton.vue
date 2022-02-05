<template>
  <button class="omega-button">
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'OmegaButton',
});
</script>

<style lang="scss">
.omega-button {
  display: flex;
}
</style>