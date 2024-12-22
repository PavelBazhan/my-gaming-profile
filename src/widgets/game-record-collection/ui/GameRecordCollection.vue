<template>
  <div class="game-record-collection">
    <div class="game-record-collection__block" v-for="(gameRecordList, key) in gameRecordCollection" :key="key">
      <div class="game-record-collection__block__title">
        <h2>{{ key }}</h2>
      </div>
      <div class="game-record-collection__block__divider" />
      <div class="game-record-collection__block__content">
        <game-record-list>
          <game-record
            v-for="(gameRecord, ind) in gameRecordList"
            :key="gameRecord.id"
            :game-record="gameRecord"
            :position="((ind + 1) % 8 > 0 && (ind + 1) % 8 < 5) ? Position.right : Position.left"
          />
        </game-record-list>        
      </div>
    </div>
    <!-- <div class="game-record-collection__block">
      <div class="game-record-collection__block__title">
        <h2>2024</h2>
      </div>
      <div class="game-record-collection__block__divider" />
      <div class="game-record-collection__block__content">
        <game-record-list>
          <game-record
            v-for="n in 12"
            :key="n"
            :position="(n % 8 > 0 && n % 8 < 5) ? Position.right : Position.left"
          />
        </game-record-list>
      </div>
    </div>
    <div class="game-record-collection__block">
      <div class="game-record-collection__block__title">
        <h2>2023</h2>
      </div>
      <div class="game-record-collection__block__divider" />
      <div class="game-record-collection__block__content">
        <game-record-list class="mb-4">
          <game-record
            v-for="n in 7"
            :key="n"
            :position="(n % 8 > 0 && n % 8 < 5) ? Position.right : Position.left"
          />
        </game-record-list>
        <game-record-list>
          <game-record
            v-for="n in 4"
            :key="n"
            :position="(n % 8 > 0 && n % 8 < 5) ? Position.right : Position.left"
            :completed="false"
          />
        </game-record-list>
      </div>
    </div>
    <div class="game-record-collection__block">
      <div class="game-record-collection__block__title">
        <h2>2022</h2>
      </div>
      <div class="game-record-collection__block__divider" />
      <div class="game-record-collection__block__content">
        <game-record-list>
          <game-record
            v-for="n in 27"
            :key="n"
            :position="(n % 8 > 0 && n % 8 < 5) ? Position.right : Position.left"
          />
        </game-record-list>
      </div>
    </div> -->
  </div>
</template>

<script setup lang="ts">
import GameRecord from '@/entities/game-record/ui';
import { Position } from '@/entities/game-record/model';
import GameRecordList from '@/features/game-record-list/ui';
import { GameRecordCollectionService } from '@/widgets/game-record-collection/api';
import type { TGameRecordCollection } from '@/widgets/game-record-collection/model';

import { ref, onBeforeMount } from 'vue';

const gameRecordCollection = ref<TGameRecordCollection | null>(null);

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
      h2 {
        font-size: 64px;
        line-height: 150px;
      }
    }

    &__divider {
      margin: 0 48px;
      width: 1px;
      align-self: stretch;
      background: linear-gradient(180deg, var(--color-gray-1) 0%, var(--color-gray-3) 24px, var(--color-black) 50%, var(--color-gray-3) calc(100% - 24px), var(--color-gray-1) 100%);
    }

    &__content {
      padding: 20px 0;
    }

  }
}
</style>