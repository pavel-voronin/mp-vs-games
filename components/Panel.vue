<template>
  <div class="bg-slate-50 p-6 rounded-md shadow-md">
    <h2 class="text-xl mb-4 font-thin">
      {{ caption }}
      <div class="inline-block italic" v-if="description">
        — {{ description }}
      </div>
    </h2>

    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps(["caption", "description"]);
</script>

<style></style>
