<template>
  <button class="game-record" :class="{ 'game-record_active': active }">
    <div class="game-record__content" @click="onClick">

    </div>
    <Transition name="information-fade">
      <div class="game-record__information" :class="gameRecordInformationComputedClass" v-show="active">
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
    </Transition>
  </button>
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

const onClick = () => {
  emit('click');
};
</script>

<style lang="scss" scoped>
$animation-duration: 0.2s;

.game-record {
  display: block;
  width: 100px;
  height: 152px;
  position: relative;
  background-color: transparent;
  border: none;
  transition: all $animation-duration ease;
  text-align: left;
}

.game-record_active {
  transform: scale(1.16);
  z-index: 1;
  
  .game-record__content {
    border-color: var(--color-blue-light);
  }
}

.game-record__content {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: var(--color-blue-dark);
  border: 1px solid var(--color-blue);
  border-radius: 8px;
  background-image: url(./doom3roe.png);
  background-size: cover;

  &:hover {
    border-color: var(--color-blue-light);
    cursor: pointer;
  }
  
  &:focus {
    outline: none;
  }

  &:active {
    transform: scale(0.97);
  }
}

.game-record__information {
  position: absolute;
  width: 420px;
  height: 124px;
  background-color: rgba(var(--color-blue-black-rgb), 0.5);
  border: 1px solid var(--color-blue-light);
  backdrop-filter: blur(6px);
  border-radius: 8px;
  z-index: 2;
  top: 0;
  left: 104px;
  padding: 8px 12px;
  user-select: text;
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

.information-fade-enter-active,
.information-fade-leave-active {
  transition: all $animation-duration ease;
}

.information-fade-enter-from,
.information-fade-leave-to {
  opacity: 0;
  transform: scale(0.6);
}
</style>