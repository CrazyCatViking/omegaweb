<template>
  <omega-page
    :title="'Polls'"
  >
    <omega-table 
      :columns="columns"
      :items="items"
    >
      <template v-slot:row-body>
        <div class="poll-page__poll-edit">
          {{ 'test' }}
        </div>
      </template>
    </omega-table> 
  </omega-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import OmegaPage from '@/OmegaPage.vue';
import OmegaTable from '@/components/OmegaComponents/OmegaTable.vue';

export default defineComponent({
  components: {
    OmegaPage,
    OmegaTable,
  },

  setup() {
    const columns = [
      {
        key: 'test1',
        title: 'Test 1 123414raweetrae45345345rw wefradgtsdfgsdfg',
      },
      {
        key: 'test2',
        title: 'Test 2',
      },
      {
        key: 'test3',
        title: 'Test 3',
      },
    ];

    const items = [
      {
        id: 'id1',
        open: false,
        test1: 'test1 123 123123 123123 123123123123',
        test2: 'test2',
        test3: 'test3',
      },
      {
        id: 'id2',
        open: false,
        test1: 'test1',
        test2: 'test2',
        test3: 'test3',
      },
      {
        id3: 'id3',
        open: false,
        test1: 'test1',
        test2: 'test2',
        test3: 'test3',
      },
    ];

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
