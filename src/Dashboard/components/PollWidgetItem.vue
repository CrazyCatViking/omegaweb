<template>
  <omega-expanding-item>
    <template v-slot:header>
      <div class="poll-widget-item__header">
        <div class="poll-widget-item__label">
          <h3>{{ poll.description }}</h3>
        </div>
        <div class="poll-widget-item__label">
          {{ `Status: ${poll.status}` }}
        </div>
      </div>
    </template>
    <div class="poll-widget-item__body">
      <div 
        class="poll-widget-item__poll-option"
        v-for="(item, index) in poll.options"
        :key="index"
      >
        <div class="poll-widget-item__label">
          {{ `${numberEmoji[index]} ${item.name}` }}
        </div>
        <div 
          v-show="item.votes != null"
          class="poll-widget-item__label"
        >
          {{ `Vote(s): ${item.votes}` }}
        </div>
      </div>
    </div>
  </omega-expanding-item>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import OmegaExpandingItem from '@/components/OmegaComponents/OmegaExpandingItem.vue';

export default defineComponent({
  components: {
    OmegaExpandingItem,
  },

  props: {
    poll: {
      type: Object,
      required: true,
    },
  },

  setup() {
    const numberEmoji: string[] = ["1⃣", "2⃣", "3⃣","4⃣","5⃣","6⃣","7⃣","8⃣","9⃣"];

    return {
      numberEmoji,
    }
  },
});
</script>

<style lang="scss">
.poll-widget-item__header {
  display: flex;
  justify-content: space-between;
  padding-left: 0.5rem;
  padding-right: 0.5rem;

  height: 2.5rem;

  border-top: 1px solid black;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
}

.poll-widget-item__label {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.poll-widget-item__body {
  display: flex;
  flex-direction: column;
}

.poll-widget-item__poll-option {
  display: flex;
  justify-content: space-between;

  padding-left: 0.5rem;
  padding-right: 0.5rem;

  height: 2.5rem;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
}
</style>
