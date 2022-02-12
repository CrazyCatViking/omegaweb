<template>
  <div class="dashboard-widget">
    <div class="dashboard-widget__header">
      <slot name="header">
        <div class="dashboard-widget__header-title">
          <h2>{{ title }}</h2>
        </div>
      </slot>
    </div>

    <div class="dashboard-widget__content">
      <slot name="content"/>
    </div>

    <div class="dashboard-widget__footer">
      <slot name="footer"/>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    title: {
      type: String,
      default: '',
    },
  },
})
</script>


<style lang="scss">
.dashboard-widget {
  border: 1px solid grey;
  border-radius: 4px;
  overflow: hidden;
}

.dashboard-widget__header {
  display: flex;
  align-items: center;

  padding-left: 0.5rem;

  height: 3rem;
  background: gray;
}

.dashboard-widget__header-title {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: black;
}
</style>