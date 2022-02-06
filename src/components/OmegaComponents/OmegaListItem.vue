<template>
  <div class="omega-list-item">
    <slot />
  </div>
</template>

<style lang="scss">
.omega-list-item {
  height: 2rem;
  width: 100%;

  vertical-align: center;
  line-height: 2rem;

  white-space: nowrap;
}

.omega-list-item:hover {
  background-color: rgb(0, 0, 0, 0.2);
}
</style>