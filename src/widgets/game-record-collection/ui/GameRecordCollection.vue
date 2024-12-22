<template>
  <div class="game-record-collection">
    <div class="game-record-collection__block" v-for="(gameRecordBlock, key) in gameRecordCollection" :key="key">
      <div class="game-record-collection__block__title" :class="getGameRecordCollectionBlockTitleComputedClass(gameRecordBlock)">
        <h2>{{ gameRecordBlock.title }}</h2>
      </div>
      <div class="game-record-collection__block__divider" />
      <div class="game-record-collection__block__content">
        <game-record-list v-if="gameRecordBlock.completed?.length">
          <game-record
            v-for="(gameRecord, ind) in gameRecordBlock.completed"
            :key="gameRecord.id"
            :game-record="gameRecord"
            :position="((ind + 1) % 8 > 0 && (ind + 1) % 8 < 5) ? Position.right : Position.left"
          />
        </game-record-list>        
        <game-record-list v-if="gameRecordBlock.notCompleted?.length">
          <game-record
            v-for="(gameRecord, ind) in gameRecordBlock.notCompleted"
            :key="gameRecord.id"
            :game-record="gameRecord"
            :position="((ind + 1) % 8 > 0 && (ind + 1) % 8 < 5) ? Position.right : Position.left"
          />
        </game-record-list>        
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import GameRecord from '@/entities/game-record/ui';
import { Position } from '@/entities/game-record/model';
import GameRecordList from '@/features/game-record-list/ui';
import { GameRecordCollectionService } from '@/widgets/game-record-collection/api';
import type { TGameRecordBlock, TGameRecordCollection } from '@/widgets/game-record-collection/model';

import { ref, onBeforeMount } from 'vue';

const gameRecordCollection = ref<TGameRecordCollection | null>(null);

const getGameRecordCollectionBlockTitleComputedClass = (gameRecordBlock: TGameRecordBlock) => {
  const classObject: Record<string, unknown> = {};
  const { title } = gameRecordBlock;
  if (title === 'Somewhen') {
    classObject['game-record-collection__block__title_s'] = true;
  }
  if (title === 'Endless') {
    classObject['game-record-collection__block__title_m'] = true;
  }
  return classObject;
};

const getGameRecordCollection = async () => {
  gameRecordCollection.value = await GameRecordCollectionService.getAll();
};

onBeforeMount(() => {
  getGameRecordCollection();
});
</script>

<style lang="scss" scoped>
.game-record-collection {
  padding: 60px 0;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;

  &__block {
    display: flex;

    &:not(:last-child) {
      margin-bottom: 40px;
    }

    &__title {
      padding-top: 20px;
      flex: 0 0 150px;
      width: 150px;
      h2 {
        font-size: 64px;
        line-height: 150px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        text-align: right;
        display: block;
      }
      &_m h2 {
        font-size: 48px;
      }
      &_s h2 {
        font-size: 32px;
      }
    }

    &__divider {
      margin: 0 48px;
      width: 1px;
      flex: 0 0 1px;
      align-self: stretch;
      background: linear-gradient(180deg, var(--color-gray-1) 0%, var(--color-gray-3) 24px, var(--color-black) 50%, var(--color-gray-3) calc(100% - 24px), var(--color-gray-1) 100%);
    }

    &__content {
      padding: 20px 0;
    }

  }
}

.game-record-list:not(:last-child) {
  margin-bottom: 16px;
}
</style>