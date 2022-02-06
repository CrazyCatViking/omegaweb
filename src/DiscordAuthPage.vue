<template>
  {{ 'Authenticating login...' }}
</template>

<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent({
  setup() {
    const params = window.location.search;
    if (window.opener) {
      window.opener.postMessage(params);
    }

    window.close();
  }
});
</script>