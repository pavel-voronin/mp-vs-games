<template>
  <div class="mb-4 flex flex-col md:flex-row md:items-center items-start">
    <label class="block text-gray-700 text-sm font-bold mb-2 md:mb-0 md:w-48">
      <slot></slot>
    </label>
    <div class="px-0 text-gray-700 md:ml-4 w-full flex items-center">
      <input
        class="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full"
        id="mp-wager-multiplier"
        type="text"
        @keypress="isNumber"
        v-model="modelValue.value"
        v-if="modelValue.mode === '1'"
        @mousewheel.native.prevent="
          modelValue.value =
            parseFloat(modelValue.value) + ($event.wheelDelta > 0 ? 1 : -1)
        "
      />
      <input
        class="shadow appearance-none border rounded py-2 px-3 mr-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full"
        id="mp-wager-multiplier"
        type="text"
        @keypress="isNumber"
        v-model="modelValue.left"
        v-if="modelValue.mode === 'range'"
        @mousewheel.native.prevent="
          modelValue.left =
            parseFloat(modelValue.value) + ($event.wheelDelta > 0 ? 1 : -1)
        "
      />
      <span v-if="modelValue.mode === 'range'">-</span>
      <input
        class="shadow appearance-none border ml-2 rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-full"
        id="mp-wager-multiplier"
        type="text"
        @keypress="isNumber"
        v-model="modelValue.right"
        v-if="modelValue.mode === 'range'"
        @mousewheel.native.prevent="
          modelValue.right =
            parseFloat(modelValue.value) + ($event.wheelDelta > 0 ? 1 : -1)
        "
      />
      <button
        v-if="props.expandable"
        @click="modelValue.mode = '1'"
        :class="{
          'border rounded-s-md px-1 ml-2 text-white pb-px': true,
          'bg-slate-500': modelValue.mode === '1',
          'bg-stone-300': modelValue.mode !== '1',
        }"
        title="One value"
      >
        1
      </button>
      <button
        v-if="props.expandable"
        @click="modelValue.mode = 'range'"
        :class="{
          'border rounded-e-md px-1 ml-0 text-white pb-px': true,
          'bg-slate-500': modelValue.mode !== '1',
          'bg-stone-300': modelValue.mode === '1',
        }"
        title="Range"
      >
        R
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps(["expandable", "modelValue"]);

const isNumber = (evt: any) => {
  var charCode = evt.which ? evt.which : evt.keyCode;
  if (charCode > 31 && (charCode < 48 || charCode > 57) && charCode !== 46) {
    evt.preventDefault();
  } else {
    return true;
  }
};
</script>

<style></style>
