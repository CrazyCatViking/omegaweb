<template>
    <router-link
      class="router-link" 
      :to="route"
    >
      <div class="app-menu-item__link">
        <slot>
          {{ name }}
        </slot>
      </div>
    </router-link>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    name: {
      type: String,
      default: '',
    },
    route: {
      type: String,
      default: '',
    },
    align: {
      type: String,
      default: 'top',
      validator: (value: string) => ['top', 'bottom'].includes(value),
    }
  },
})
</script>

<style lang="scss">
.router-link {
  display: flex;
  align-items: center;

  width: 100%;
  height: 3rem;

  justify-content: space-around;

  border-bottom: 1px solid black;

  text-decoration: none;

  &:hover {
    background-color: rgba(0, 0, 0, 0.3);
  }

  &-active {
    background-color: rgba(0, 0, 0, 0.2);
  }
}

.app-menu-item__link {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: black;
}
</style>
