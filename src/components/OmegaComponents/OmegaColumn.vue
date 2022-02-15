<template>
  <div class="omega-column">
    <slot/>
  </div>
</template>

<style lang="scss">
.omega-column {
  display: flex;
  flex-direction: column;

  padding: 1rem 1rem 1rem 1rem;

  row-gap: 0.5rem; 
}
</style>