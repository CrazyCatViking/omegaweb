<template>
  <div class="omega-list-item">
    <slot />
  </div>
</template>

<style lang="scss">
.omega-list-item {
  height: 2rem;
  width: auto;

  vertical-align: center;
  line-height: 2rem;

  padding: 0.2rem;
}

.omega-list-item:hover {
  background-color: rgb(0, 0, 0, 0.2);
}
</style>