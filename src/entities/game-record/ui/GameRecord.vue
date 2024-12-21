<template>
  <div class="game-record" :class="gameRecordComputedClass">
    <div class="game-record__information">
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

const gameRecordComputedClass = computed(() => {
  const classOutput: Record<string, unknown> = {};
  if (props.position === Position.left) {
    classOutput['game-record_left'] = true;
  }
  if (props.position === Position.right) {
    classOutput['game-record_right'] = true;
  }
  return classOutput;
});
</script>

<style lang="scss" scoped>
$animation-duration: 0.2s;

.game-record {
  display: block;
  width: 100px;
  height: 150px;
  background-color: transparent;
  border: none;
  position: relative;

  background-color: var(--color-gray-1);
  border: 1px solid var(--color-gray-4);
  border-radius: 4px;
  background-image: url(./doom3roe.png);
  background-size: cover;

  transition: border-color $animation-duration ease;


  &:hover {
    border-color: var(--color-gray-5);
    cursor: pointer;

    .game-record__information {
      opacity: 1;
      transform: scaleX(1);
    }
  }
  
  &:focus {
    outline: none;
  }
}

.game-record_right:hover {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}

.game-record_left:hover {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}

.game-record__information {
  display: block;
  position: absolute;
  width: 420px;
  height: 150px;
  background-color: rgba(var(--color-gray-2-rgb), 0.75);
  backdrop-filter: blur(12px);
  top: -1px;
  left: 100px;
  padding: 12px 16px;
  pointer-events: none;
  z-index: 2;
  opacity: 0;
  transform: scaleX(0.97);
  border-radius: 4px;
  border: 1px solid var(--color-gray-5);

  transition: all $animation-duration ease;
}

.game-record_right .game-record__information {
  left: calc(-2px + 100px);
  transform-origin: 0% 0%;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
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
</style>