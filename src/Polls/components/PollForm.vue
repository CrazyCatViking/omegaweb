<template>
    <omega-column
      style="width: 15rem;"
    >
      {{ 'Poll Information'}}
      <omega-text-box 
        v-model="id"
        :label="'Name'"
      />
      <omega-text-box 
        v-model="description"
        :label="'Description'"
      />
      <PollTypeDropdown 
        v-model="type"
        :label="'Type'"
      />
    </omega-column>
    <omega-column
      style="width: 15rem;"
    >
      {{ 'Poll Options' }}
      <PollOptionEdit 
        v-for="(option, index) in options"
        :key="index"
        v-model="options[index]"
      />
      <omega-button
        v-show="options.length < 9"
        border
        slim
        round
        @click="onAddOption"
      >
        {{ '+ add option' }}
      </omega-button>
    </omega-column>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useField } from 'vee-validate';
import OmegaColumn from '@/components/OmegaComponents/OmegaColumn.vue';
import OmegaButton from '@/components/OmegaComponents/OmegaButton.vue';
import OmegaTextBox from '@/components/OmegaComponents/OmegaTextBox.vue';
import PollTypeDropdown from './PollTypeDropdown.vue';
import PollOptionEdit from './PollOptionEdit.vue';

export default defineComponent({
  components: {
    OmegaColumn,
    OmegaButton,
    OmegaTextBox,
    PollTypeDropdown,
    PollOptionEdit,
  },

  props: {
    poll: {
      type: Array,
      default: () => [],
    }
  },


  setup() {
    const { value: id } = useField<string>('id');
    const { value: description } = useField<string>('description');
    const { value: type } = useField<string>('type');
    const { value: options } = useField<string[]>('options');

    const onAddOption = () => {
      if (options.value.length >= 9) return;
      options.value.push(`Option ${options.value.length + 1}`);
    }

    return {
      id,
      description,
      type,
      options,
      onAddOption,
    }
  },
});
</script>
