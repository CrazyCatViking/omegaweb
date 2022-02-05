<template>
  <div class="user-menu">
    {{ userName }}
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const userName = ref('Kristoffer Jansen');
    
    return {
      userName,
    }
  },
});
</script>

<style lang="scss">
.user-menu {
  position: relative;
  height: 100%;
  width: 8rem;

  background-color: darkgray;

  text-align: center;
  vertical-align: middle;
  line-height: 3rem;
}
</style>