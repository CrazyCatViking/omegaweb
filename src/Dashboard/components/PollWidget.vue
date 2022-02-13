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
        >
          <PollWidgetItem 
            :poll="item"
          />
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
import PollWidgetItem from './PollWidgetItem.vue';

const GET_POLLS = gql`
  query GetPolls {
    polls {
      id
      description
      options {
        name
        votes
      }
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
    PollWidgetItem,
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
  width: 30rem;
  box-shadow: 1px 1px 2px black;
}

.poll-widget__table {
  display: flex;
  flex-direction: column;

  overflow: auto;
}
</style>