<template>
  <div class="game-record" :class="gameRecordComputedClass">
    <div class="game-record__background" :style="gameRecordComputedStyle"/>
    <div v-if="props.gameRecord" class="game-record__information">
      <div class="game-record__information__title">
        {{ props.gameRecord.title }}
      </div>
      <div class="game-record__information__description">
        <div class="info-block">{{ props.gameRecord.releaseYear }}</div>
        <div class="info-block">{{ props.gameRecord.platform }}</div>
        <div v-if="props.gameRecord.isDlc" class="info-block">DLC</div>
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
  completed: true,
  position: Position.right,
});

const gameRecordComputedClass = computed(() => {
  const classOutput: Record<string, unknown> = {};
  if (props.position === Position.left) {
    classOutput['game-record_left'] = true;
  }
  if (props.position === Position.right) {
    classOutput['game-record_right'] = true;
  }
  if (props.gameRecord && !props.gameRecord?.finished) {
    classOutput['game-record_not-completed'] = true;
  }
  return classOutput;
});

const gameRecordComputedStyle = computed(() => ({
  backgroundImage: props.gameRecord?.imagePath,
}));
</script>

<style lang="scss" scoped>
$animation-duration: 0.2s;
$border-radius: 6px;

.game-record {
  display: block;
  width: 100px;
  height: 150px;
  background-color: transparent;
  border: none;
  position: relative;

  background-color: var(--color-gray-1);

  transition: border-color $animation-duration ease;

  &__background {
    position: absolute;
    border-radius: $border-radius;
    background-color: var(--color-gray-2);
    background-size: cover;
    background-position: center;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }

  &:hover {
    border-color: var(--color-gray-5);
    cursor: pointer;

    .game-record__information {
      opacity: 1;
      transform: scaleX(1);
      border-color: var(--color-gray-5);
    }
  }
  
  &:focus {
    outline: none;
  }
}

.game-record_right:hover .game-record__background {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}

.game-record_left:hover .game-record__background {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}

.game-record__information {
  display: block;
  position: absolute;
  width: 420px;
  height: 150px;
  background-color: rgba(var(--color-glass-rgb), 0.8);
  backdrop-filter: blur(12px);
  top: 0;
  left: 100px;
  padding: 12px 16px;
  pointer-events: none;
  z-index: 2;
  opacity: 0;
  transform: scaleX(0.97);
  border-radius: $border-radius;

  transition: 
    transform $animation-duration ease,
    opacity $animation-duration ease;
}

.game-record_right .game-record__information {
  left: 100px;
  transform-origin: 0% 0%;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  border-left: 1px solid transparent;
  .game-record__rails-border {
    left: -4px;
  }
  .game-record__information__title {
    text-align: left;
  }
  .game-record__information__description {
    justify-content: start;
  }
}

.game-record_left .game-record__information {
  left: calc(-420px);
  transform-origin: 100% 0%;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-right: 1px solid transparent;
  .game-record__rails-border {
    right: -3px;
  }
  .game-record__information__title {
    text-align: right;
  }
  .game-record__information__description {
    justify-content: end;
  }
}

.game-record__information__title {
  font-family: Rubik, sans-serif;
  font-size: 20px;
  line-height: 24px;
  color: var(--color-blue);
}

.game-record__information__description {
  font-family: Rubik, sans-serif;
  font-size: 14px;
  line-height: 24px;
  color: var(--color-black);
  display: flex;
  align-items: center;
  transform: scaleX(1);

  .info-marker {
    margin: 0 8px;
    width: 2px;
    height: 2px;
    background-color: var(--color-black);
  }
}

.game-record_not-completed .game-record__background {
  filter: grayscale(0.8);
  transition: filter $animation-duration ease;
  &:hover {
    filter: grayscale(0);
  }
}

.info-block:not(:first-child) {
  position: relative;
  padding-left: 18px;

  &::before {
    content: "";
    position: absolute;
    width: 2px;
    height: 2px;
    background-color: var(--color-black);
    left: 8px;
    top: 11px;
  }
}
</style>