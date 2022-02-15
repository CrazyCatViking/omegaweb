<template>
  <omega-page
    :title="'Polls'"
  >
    <omega-table 
      :columns="columns"
      :items="items"
    >
      <template v-slot:row-body="{ row }">
        <PollEdit 
          :poll="row"
        />
      </template>
    </omega-table> 
  </omega-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useGraphQL } from '@/graphql/useGraphQL';
import OmegaPage from '@/OmegaPage.vue';
import OmegaTable from '@/components/OmegaComponents/OmegaTable.vue';
import PollEdit from './components/PollEdit.vue';
import gql from 'graphql-tag';

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
    OmegaPage,
    OmegaTable,
    PollEdit,
  },

  setup() {
    const { client } = useGraphQL();
    const items = ref([]);

    const getPolls = async () => {
      const { data } = await client.query({
        query: GET_POLLS,
      });

      console.log(data.polls);

      items.value = data.polls;
    }

    const columns = [
      {
        key: 'id',
        title: 'Name',
      },
      {
        key: 'description',
        title: 'Description',
      },
      {
        key: 'status',
        title: 'Status',
      },
    ];

    getPolls();

    return {
      columns,
      items,
    };
  },
})
</script>

<style lang="scss">
.poll-page__poll-edit {
  height: 10rem;
}
</style>
