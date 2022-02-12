<template>
  <omega-page>
    <template v-slot:header>
      <omega-external-icon 
        :src="self?.guildContext.icon" 
        style="margin-right: 0.5rem;"
      />
      {{ self?.guildContext.name }}
    </template>

    <div class="dashboard-page">
      <PollWidget />
    </div>
  </omega-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useAuth } from '@/utility/useAuth';
import OmegaPage from '@/OmegaPage.vue';
import OmegaExternalIcon from '@/components/OmegaComponents/OmegaExternalIcon.vue';
import PollWidget from './components/PollWidget.vue';

export default defineComponent({
  components: {
    OmegaPage,
    OmegaExternalIcon,
    PollWidget,
  },

  setup() {
    const { self } = useAuth();

    return {
      self,
    }
  },
});
</script>