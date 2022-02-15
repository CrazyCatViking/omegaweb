<template>
  <div class="omega-table">
    <div class="omega-table__header">
      <div 
        v-for="(column) in columns"
        :key="column.key"
        class="omega-table__column"
      >
        {{ column.title }}
      </div>
    </div>
    <div class="omega-table__content">
      <div
        v-for="(row) in rows"
        :key="row.id"
      >
        <div 
          :class="getRowClass(row.id)"
          @click.prevent="onRowClick(row.id)"
        >
          <div 
            v-for="(column) in columns"
            :key="column.key"
            class="omega-table__cell"
          >
            {{ row[column.key] }}
          </div>
        </div>
        <ExpandTransition
          v-if="true"
        >
          <div
            v-show="row.open"
            class="omega-table__row-body"
          >
            <slot name="row-body" :row="row"/> 
          </div>
        </ExpandTransition>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, toRef, watch } from 'vue'
import ExpandTransition from './ExpandTransition.vue';

export default defineComponent({
  components: { ExpandTransition },
  props: {
    columns: {
      type: Array,
      required: true,
    },
    items: {
      type: Array as () => any[],
      required: true,
    },
    expandingRows: {
      type: Boolean,
      default: false,
    },
  },

  setup(props) {
    const rows = toRef(props, 'items');
    const selection = ref('');

    const getRowClass = (rowId: string) => {
      const isSelected = selection.value === rowId;
      return isSelected ? ['omega-table__row', 'omega-table__row--selected'] : 'omega-table__row'; 
    };

    const onRowClick = (rowId: string) => {
      if (selection.value === rowId) {
        selection.value = '';
      } else {
        selection.value = rowId;
      }
    };

    watch(selection, (value, prev) => {
      if (value !== '') {
        const currentIndex = rows.value.findIndex((item: any) => item.id === value);
        const currentRow = rows.value[currentIndex];
        currentRow.open = true;
        rows.value[currentIndex] = currentRow;
      }

      if (prev === '') return;
      const previousIndex = rows.value.findIndex((item: any) => item.id === prev);
      const prevRow = rows.value[previousIndex];
      prevRow.open = false;
      rows.value[previousIndex] = prevRow;
    });

    return {
      getRowClass,
      onRowClick,
      rows,
    }
  },
});
</script>

<style lang="scss">
.omega-table {
  min-width: 100%;
  min-height: 100%;
}

.omega-table__header {
  min-width: 100%;
  min-height: 100%;
  display: flex;
  justify-content: space-between;
  line-height: 2rem;

  height: 2rem;
  border-top: 1px solid black;
  background-color: grey;
}

.omega-table__column {
  flex: 1 0 12rem;
  padding-left: 1rem;
  padding-right: 1rem;

  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.omega-table__content {
  display: flex;
  flex-direction: column;

  overflow-x: hidden;
  overflow-y: auto;
}

.omega-table__row {
  display: flex;
  justify-content: flex-start;

  height: 2rem;
  line-height: 2rem;

  background: white;
  border-bottom: 1px solid lightgrey;

  &:hover {
    background-color: lightgrey;
  }

  &--selected {
    background-color: lightgrey;
  }
}

.omega-table__row-body {
  background: white;
  border-bottom: 1px solid lightgrey;
}

.omega-table__cell {
  flex: 1 0 12rem;
  padding-left: 1rem;
  padding-right: 1rem;

  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>