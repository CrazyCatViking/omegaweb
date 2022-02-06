<template>
  <div class="omega-menu-list">
    <slot />
  </div>
</template>

<style lang="scss">
.omega-menu-list {
  display: flex;
  flex-direction: column;

  max-height: 13rem;
  overflow: auto;
}
</style>