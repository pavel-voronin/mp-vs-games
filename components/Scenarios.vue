<template>
  <div class="bg-slate-50 px-6 py-2 mb-2 rounded-md shadow-md">
    <div class="flex items-center gap-2">
      <h2 class="text-xl font-thin mr-1">Scenarios</h2>
      <NuxtLink
        to="/roulette/win-rate"
        class="border border-transparent hover:border-slate-700 p-2 py-1"
        activeClass="bg-slate-600 text-white border border-transparent"
      >
        Find Win Rate
      </NuxtLink>
      <NuxtLink
        to="/roulette/optimize-wager-requirement"
        class="border border-transparent hover:border-slate-700 p-2 py-1"
        activeClass="bg-slate-600 text-white border border-transparent"
      >
        Optimize Wager Requirement
      </NuxtLink>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style></style>
