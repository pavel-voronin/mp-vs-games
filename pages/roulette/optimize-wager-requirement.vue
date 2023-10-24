<template>
  <div class="p-4">
    <h1 class="text-3xl mb-4">
      Matching Program vs
      <select>
        <option>Roulette</option>
      </select>
    </h1>

    <Scenarios></Scenarios>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-2">
      <Configuration
        caption="Matching Program"
        v-model="config"
      ></Configuration>
      <FindDesiredWagerRequirement
        :config="config"
        @random="randomStats"
      ></FindDesiredWagerRequirement>
      <RngStats ref="rngStats"></RngStats>
    </div>
  </div>
</template>

<script setup>
useHead({
  bodyAttrs: {
    class: "bg-slate-200",
  },
});

const rngStats = ref();
const randomStats = (numbers) => {
  rngStats.value?.add(numbers);
};

const config = reactive({
  mp_deposit: { value: 20, mode: "1", name: "Deposit", order: 0 },
  mp_bonus: { value: 20, mode: "1", name: "Bonus", order: 1 },
  mp_target_win_rate: {
    value: 45.0,
    mode: "1",
    name: "Target Win Rate",
    order: 2,
  },
  bets: {
    0: 0,
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0,
    8: 0,
    9: 0,
    10: 0,
    11: 0,
    12: 0,
    13: 0,
    14: 0,
    15: 0,
    16: 0,
    17: 0,
    18: 0,
    19: 0,
    20: 0,
    21: 0,
    22: 0,
    23: 0,
    24: 0,
    25: 0,
    26: 0,
    27: 0,
    28: 0,
    29: 0,
    30: 0,
    31: 0,
    32: 0,
    33: 0,
    34: 0,
    35: 0,
    36: 0,
    "h-1": 0,
    "h-2": 0,
    "h-3": 0,
    "v-1": 0,
    "v-2": 0,
    "v-3": 0,
    "1-18": 0,
    even: 0,
    red: 20,
    black: 20,
    odd: 0,
    "19-36": 0,
  },
});
</script>
