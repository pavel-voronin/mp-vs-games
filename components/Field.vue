<template>
  <div
    :class="{
      ['row-span-3']: props.rowSpan3,
      ['col-span-2']: props.colSpan2,
      ['col-span-4']: props.colSpan4,
      ['col-start-2']: props.colStart2,
      [props.color]: true,
      'text-xl': props.textSize === 'xl',
      'text-sm': props.textSize === 'sm',
      flex: true,
      'items-center': true,
      'justify-center': true,
    }"
    @contextmenu.prevent="remove"
    @click.prevent="add"
  >
    <slot class="select-none"></slot>
    <div
      v-if="modelValue"
      class="absolute text-xs border-b-2 rounded-full font-normal p-1 select-none text-black shadow-md shadow-yellow-500 bg-yellow-500 brightness-125"
    >
      {{ modelValue }}
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Decimal } from "decimal.js";

const props = defineProps([
  "color",
  "rowSpan3",
  "colSpan2",
  "textSize",
  "colSpan4",
  "colStart2",
  "modelValue",
  "bet",
]);
const emit = defineEmits(["update:modelValue"]);
const add = () => {
  emit(
    "update:modelValue",
    new Decimal(props.modelValue).plus(props.bet).toNumber()
  );
};
const remove = () => {
  emit(
    "update:modelValue",
    Math.max(new Decimal(props.modelValue).minus(props.bet).toNumber(), 0)
  );
};
</script>

<style lang="postcss">
.transparent {
  @apply text-black border  border-slate-300 text-center leading-8 font-bold  whitespace-nowrap cursor-pointer;
}
.black {
  @apply bg-gray-950 text-white text-center leading-8 font-bold  cursor-pointer border-slate-300 border;
}
.red {
  @apply bg-red-700 text-white text-center leading-8 font-bold cursor-pointer border-slate-300 border;
}
</style>
