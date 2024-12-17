<template>
  <h1>MainPage</h1>
  <div style="display: flex; gap: 16px; margin-bottom: 16px;">
    <game-record
      v-for="n in 8"
      :key="n"
      :active="activeGameRecordIndex === n"
      :position="n < 5 ? Position.right : Position.left"
      @click="activateGameRecord(n)"
    />
  </div>
  <div style="display: flex; gap: 16px;">
    <game-record v-for="m in 8" :key="m" />
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