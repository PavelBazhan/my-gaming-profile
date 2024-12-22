<template>
  <div
    class="game-record-flag-plate"
    :class="gameRecordFlagPlateComputedClass"
    :style="gameRecordFlagPlateComputedStyle"
  />
</template>

<script setup lang="ts">
import type { Props } from './props.interface';
import { computed } from 'vue';

const props = withDefaults(defineProps<Props>(), {
  disabled: false,
});

const gameRecordFlagPlateComputedClass = computed(() => {
  const classObject: Record<string, boolean> = {};
  if (props.disabled) {
    classObject['game-record-flag-plate_disabled'] = true;
  }
  return classObject;
});

const gameRecordFlagPlateComputedStyle = computed(() => {
  const styleObject: Record<string, string> = {};
  styleObject.backgroundImage = `url('src/shared/ui/GameRecordFlagPlate/images/${props.icon}.svg')`;
  return styleObject;
});
</script>

<style lang="scss" scoped>
.game-record-flag-plate {
  width: 24px;
  height: 24px;
  background-color: var(--color-gray-6);
  border-radius: 4px;
  background-size: 85%;
  background-repeat: no-repeat;
  background-position: center;
}

.game-record-flag-plate_disabled {
  background-color: var(--color-white);
  opacity: 0.4;
  filter: grayscale(1);
}
</style>