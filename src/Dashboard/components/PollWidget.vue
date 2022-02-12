<template>
  <BaseWidget
    class="poll-widget"
    title="Polls"
  >
    <template v-slot:content>
      <div class="poll-widget__table">
        <div
          v-for="item in items"
          :key="item.id" 
          class="poll-widget__item"
        >
          {{ item.description }}
        </div>
      </div>
    </template>
  </BaseWidget>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import gql from 'graphql-tag';
import { useGraphQL } from '@/graphql/useGraphQL';
import BaseWidget from './BaseWidget.vue';

const GET_POLLS = gql`
  query GetPolls {
    polls {
      id
      description
      options
      status
      pollMessageData {
        messageId
        channelId
      }
    },
  },
`

export default defineComponent({
  components: {
    BaseWidget,
  },

  setup() {
    const { client } = useGraphQL();
    const items = ref<any[]>([]);

    const getPolls = async () => {
      const { data } = await client.query({
        query: GET_POLLS,
      });

      items.value = data.polls;
    }

    getPolls();

    return {
      items,
    };
  },
})
</script>

<style lang="scss">
.poll-widget {
  width: 20rem;
}

.poll-widget__table {
  display: flex;
  flex-direction: column;

  height: 20rem;
}

.poll-widget__item {
  display: flex;
  align-items: center;

  padding-left: 0.5rem;

  border-bottom: 1px solid black;
  height: 2.5rem;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
}
</style>