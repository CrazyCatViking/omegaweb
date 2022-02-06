<template>
  <div class="omega-menu" ref="root">
    <div @click="onClick">
      <slot name="activator" />
    </div>

    <div 
      v-if="isVisible"
      class="omega-menu__popup"
      :style="style"
    >
      <div class="omega-menu__content">
        <slot name="content" />
      </div>
    </div>
  </div>

  <GlobalEvents 
    v-if="isVisible"
    target="window"
    @pointerdown.capture="onWindowClick"
    @focus.capture="onWindowFocus"
  />
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue';
import { GlobalEvents } from 'vue-global-events';

export default defineComponent({
  components: {
    GlobalEvents,
  },

  props: {
    direction: {
      type: String,
      default: 'right',
    },
    visible: {
      type: Boolean,
      default: false,
    },
  },

  emits: ['update:visible'],

  setup(props, { emit }) {
    const root = ref<HTMLElement>();
    const content = ref<HTMLElement>();
    const isVisible = ref(false);
    const style = ref<Record<string, unknown>>({})

    const onClick = () => {
      isVisible.value = !isVisible.value;
    };

    const onWindowClick = (event: UIEvent) => {
      if (event.target instanceof Node && root.value?.contains(event.target)) return;

      isVisible.value = false;
    };

    const onWindowFocus = (event: UIEvent) => {
      if (event.target === window) return;
      onWindowClick(event);
    };

    const setMenuPosition = () => {
      if (!root.value) return;
      const rect = root.value?.getBoundingClientRect();

      const width = document.documentElement.clientWidth;
      const horizontalPos = props.direction === 'right' ? 
        { left: `${rect.left}px` } : 
        { right: `${width - rect.right}px` };

      style.value = {
        ...horizontalPos,
        minWidth: `${rect.width}px`,
      };
    };

    watch(isVisible, (value: boolean) => {
      if (value) {
        setMenuPosition();
        emit('update:visible', value);
      }
    });

    watch(() => props.visible, (value: boolean) => {
      isVisible.value = value;
    });

    return {
      root,
      content,
      isVisible,
      style,
      
      onClick,
      onWindowClick,
      onWindowFocus,
    }
  },
});
</script>

<style lang="scss">
.omega-menu {
  position: relative;
  width: 100%;
}

.omega-menu__popup {
  position: fixed;
  background-color: white;
  border-radius: 4px;

  overflow: hidden;
}

.omega-menu__content {
  display: flex;
  flex-direction: column;
}
</style>