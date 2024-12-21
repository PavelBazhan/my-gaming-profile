<template>
  <div class="game-record-list">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.game-record-list {
  width: 912px;
  display: flex;
  flex-flow: row wrap;
  gap: 16px;
}
</style>