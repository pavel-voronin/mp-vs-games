<template>
  <Panel caption="Results">
    <div class="flex gap-2 flex-wrap">
      <div
        :class="{
          'text-green-600': results.total > 2000,
        }"
      >
        <div
          class="w-32 h-32 border border-transparent border-t-slate-50 text-center shadow-lg bg-slate-100 rounded-lg"
        >
          <h3 class="text-xl mt-6">Simulations</h3>
          <div class="mt-4">{{ results.total }}</div>
        </div>
      </div>

      <div
        :class="{
          'text-green-600': results.wins < results.loses,
          'text-red-600': results.wins > results.loses,
        }"
      >
        <div
          class="w-32 h-32 border border-transparent border-t-slate-50 text-center shadow-lg bg-slate-100 rounded-lg"
        >
          <h3 class="text-xl mt-6">Win rate</h3>
          <div class="mt-4">
            {{ ((results.wins / results.total) * 100).toFixed(2) }}%
          </div>
        </div>
      </div>
    </div>
  </Panel>
</template>

<script lang="ts" setup>
import { Decimal } from "decimal.js";

const props = defineProps(["config"]);
const emit = defineEmits(["random"]);

const results = reactive({ total: 0, wins: 0, loses: 0 });
watch(props.config, () => {
  results.total = 0;
  results.wins = 0;
  results.loses = 0;
});

let numbers: Record<number, number> = {};
const storeNumber = (number: number) => {
  if (!(number in numbers)) {
    numbers[number] = 1;
  } else {
    numbers[number]++;
  }
};
const sendNumbers = () => {
  if (Object.keys(numbers).length === 0) return;

  emit("random", numbers);
  numbers = {};
};
setInterval(() => sendNumbers(), 1000);

const random = () => {
  const number = Math.floor(Math.random() * 37);
  storeNumber(number);
  return number;
};
const bet = (): number =>
  Number(
    new Decimal(
      Object.values(props.config.bets).reduce(
        (acc, v) => (acc as number) + (v as number),
        0
      ) as number
    )
  );

const win = (number: number): number => {
  const black = [
    2, 4, 6, 8, 10, 11, 13, 15, 17, 20, 22, 24, 26, 28, 29, 31, 33, 35,
  ];
  const red = [
    1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36,
  ];
  const even = [
    2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36,
  ];
  const odd = [
    1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35,
  ];
  const half1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
  const half2 = [
    19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36,
  ];
  const h1 = [3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36];
  const h2 = [2, 5, 8, 11, 14, 17, 20, 23, 26, 29, 32, 35];
  const h3 = [1, 4, 7, 10, 13, 16, 19, 22, 25, 28, 31, 34];
  const v1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const v2 = [13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];
  const v3 = [25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36];

  let amount = 0;

  if (black.includes(number)) {
    amount += props.config.bets.black * 2;
  }

  if (red.includes(number)) {
    amount += props.config.bets.red * 2;
  }

  if (even.includes(number)) {
    amount += props.config.bets.even * 2;
  }

  if (odd.includes(number)) {
    amount += props.config.bets.odd * 2;
  }

  if (half1.includes(number)) {
    amount += props.config.bets["1-18"] * 2;
  }

  if (half2.includes(number)) {
    amount += props.config.bets["19-36"] * 2;
  }

  if (h1.includes(number)) {
    amount += props.config.bets["h-1"] * 3;
  }

  if (h2.includes(number)) {
    amount += props.config.bets["h-2"] * 3;
  }

  if (h3.includes(number)) {
    amount += props.config.bets["h-3"] * 3;
  }

  if (v1.includes(number)) {
    amount += props.config.bets["v-1"] * 3;
  }

  if (v2.includes(number)) {
    amount += props.config.bets["v-2"] * 3;
  }

  if (v3.includes(number)) {
    amount += props.config.bets["v-3"] * 3;
  }

  amount += props.config.bets[number] * 36;

  return Number(new Decimal(amount).toFixed(2));
};
const simulate = () => {
  // enter

  if (bet() === 0) {
    return;
  }

  let deposit = new Decimal(props.config.mp_deposit.value);
  const wager_requirement = deposit
    .times(props.config.mp_wager_requirement.value)
    .toNumber();
  let wager = 0;
  deposit = deposit.plus(props.config.mp_bonus.value);
  let rounds = 0;

  while (true) {
    rounds++;

    // wage

    const number = random();

    const b = bet();
    const bm = Math.min(b, deposit.toNumber()) / b;
    const bb = Number(new Decimal(b * bm).toFixed(2));

    deposit = deposit.minus(bb);
    wager += bb;

    const w = win(number) * bm;
    deposit = deposit.plus(w);

    // finish

    if (wager >= wager_requirement) {
      if (deposit.toNumber() >= parseInt(props.config.mp_deposit.value)) {
        results.total++;
        results.wins++;
        break;
      } else {
        results.total++;
        results.loses++;
        break;
      }
    }

    if (deposit.toNumber() <= 0) {
      results.total++;
      results.loses++;
      break;
    }
  }
};
const loop = () => {
  let n = 10;
  while (n--) {
    simulate();
  }
  setTimeout(() => {
    loop();
  }, 10);
};
loop();
</script>

<style></style>
