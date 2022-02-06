<template>
  <button class="omega-button">
    <slot />
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
  }
});
</script>

<style lang="scss">
.omega-button {
  height: 3rem;
  border-radius: 4px;
  background: none;
  border: none;
}

.omega-button:hover {
  background-color: rgba(0, 0, 0, 0.2);
}
</style>