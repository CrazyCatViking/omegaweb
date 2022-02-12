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
}

.omega-button:hover {
  background-color: rgba(0, 0, 0, 0.2);
}
</style>