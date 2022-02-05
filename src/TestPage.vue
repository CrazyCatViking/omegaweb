<template>
  <OmegaPage :title="'Hello World'">
    Test <br>
    Test <br>
    Test <br>
    Test <br>
    Test <br>
    Test <br>
    Test <br>
    Test <br>
    Test <br>
  </OmegaPage>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import OmegaPage from './OmegaPage.vue';

export default defineComponent({
  components: {
    OmegaPage,
  },
});
</script>