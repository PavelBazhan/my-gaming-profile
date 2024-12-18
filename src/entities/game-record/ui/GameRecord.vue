<template>
  <div class="game-record">
    <div class="game-record__information" :class="gameRecordInformationComputedClass">
      <div class="game-record__information__title">
        Doom 3: Resurrection of Evil
      </div>
      <div class="game-record__information__description">
        <div class="info-block">2019</div>
        <div class="info-marker"></div>
        <div class="info-block">Sony PlayStation 4</div>
        <div class="info-marker"></div>
        <div class="info-block">DLC</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { Position } from '@/entities/game-record/model';
import type { Props } from '@/entities/game-record/model';

const props = withDefaults(defineProps<Props>(), {
  active: false,
  position: Position.right,
});

const emit = defineEmits<{
  click: []
}>();

const gameRecordInformationComputedClass = computed(() => {
  const classOutput: Record<string, unknown> = {};
  if (props.position === Position.left) {
    classOutput['game-record__information_left'] = true;
  }
  if (props.position === Position.right) {
    classOutput['game-record__information_right'] = true;
  }
  return classOutput;
});
</script>

<style lang="scss" scoped>
$animation-duration: 0.2s;

.game-record {
  display: block;
  width: 100px;
  height: 152px;
  background-color: transparent;
  border: none;
  transition: transform $animation-duration ease;

  background-color: var(--color-blue-dark);
  border: 1px solid var(--color-blue);
  border-radius: 8px;
  background-image: url(./doom3roe.png);
  background-size: cover;

  &:hover {
    border-color: var(--color-blue-light);
    cursor: pointer;
    transform: scale(1.10);

    .game-record__information {
      display: block;
    }
  }
  
  &:focus {
    outline: none;
  }
}

.game-record__information {
  display: none;
  position: absolute;
  width: 420px;
  height: 124px;
  background-color: rgba(var(--color-blue-black-rgb), 0.5);
  border: 1px solid var(--color-blue-light);
  backdrop-filter: blur(6px);
  border-radius: 8px;
  top: 0;
  left: 104px;
  padding: 8px 12px;
  pointer-events: none;
}

.game-record__information__title {
  font-family: Rubik, sans-serif;
  font-size: 20px;
  line-height: 24px;
  color: var(--color-blue-accent);
}

.game-record__information__description {
  font-family: Rubik, sans-serif;
  font-size: 14px;
  line-height: 24px;
  color: var(--color-white);
  display: flex;
  align-items: center;

  .info-marker {
    margin: 0 8px;
    width: 2px;
    height: 2px;
    background-color: var(--color-white);
  }
}

.game-record__information_right {
  left: 104px;
  transform-origin: 0% 0%;
  .game-record__information__title {
    text-align: left;
  }
  .game-record__information__description {
    justify-content: start;
  }
}

.game-record__information_left {
  left: -426px;
  transform-origin: 100% 0%;
  .game-record__information__title {
    text-align: right;
  }
  .game-record__information__description {
    justify-content: end;
  }
}
</style>