<template>
  <GlobalPageLayout />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import GlobalPageLayout from './components/GlobalPageLayout.vue';

export default defineComponent ({
  name: 'App',

  components: {
    GlobalPageLayout,
  },
})
</script>
