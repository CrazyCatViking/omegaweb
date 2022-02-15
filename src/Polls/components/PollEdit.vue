<template>
  <omega-table-edit
    :title="poll.description"
    :meta="meta"

    @save="onSave"
    @discard="onDiscard"
  >
    <PollForm />
  </omega-table-edit>
</template>

<script lang="ts">
import { defineComponent, toRef, watch } from 'vue';
import { useForm } from 'vee-validate';
import OmegaTableEdit from '@/components/OmegaComponents/OmegaTableEdit.vue';
import PollForm from './PollForm.vue';

export default defineComponent({
  components: {
    OmegaTableEdit,
    PollForm,
  },

  props: {
    poll: {
      type: Object,
      default: undefined,
    },
  },

  setup(props) {
    const poll = toRef(props, 'poll');

    const {
      meta,
      handleSubmit,
      resetForm,
    } = useForm();

    const onSave = handleSubmit((currentValues) => {
      console.log(currentValues);
    });

    const initForm = (selectedPoll: any) => {
      if (!selectedPoll) {
        resetForm({ values: getInitialValues() });
        return;
      }

      resetForm({ values: getExistingValues(selectedPoll) });
    };

    watch(poll, initForm, { deep: true, immediate: true, });

    resetForm({ values: getInitialValues() });

    return {
      meta,
      onSave,
      onDiscard: resetForm,
    }
  },
});

const getInitialValues = () => ({
  id: '',
  description: '',
  type: 'single-vote',
  options: [],
});

const getExistingValues = (poll: any) => ({
  id: poll.id ?? '',
  description: poll.description ?? '',
  type: poll.type ?? 'single-vote',
  options: poll.options.map((item: any) => item.name) ?? [],
});
</script>
