<template>
  <div style="display: flex; gap: 16px; margin-bottom: 16px; max-width: 912px; flex-flow: row wrap;">
    <game-record
      v-for="n in 12"
      :key="n"
      :active="activeGameRecordIndex === n"
      :position="(n % 8 > 0 && n % 8 < 5) ? Position.right : Position.left"
      @click="activateGameRecord(n)"
    />
  </div>
</template>

<script setup lang="ts">
import GameRecord from '@/entities/game-record/ui';
import { Position } from '@/entities/game-record/model';
import { ref } from 'vue';

const activeGameRecordIndex = ref<number | null>(null);

const activateGameRecord = (index: number) => {
  if (activeGameRecordIndex.value === index) {
    activeGameRecordIndex.value = null;
    return;
  }
  activeGameRecordIndex.value = index;
};
</script>