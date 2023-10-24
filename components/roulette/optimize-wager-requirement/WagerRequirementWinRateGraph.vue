<template>
  <Line ref="graph" :options="chartOptions" :data="chartData" />
</template>

<script lang="ts" setup>
const numbers = reactive<{ x: number; y: number }[]>([]);

const graph = ref();

const reset = () => {
  numbers.length = 0;
  build();
};
const add = (winRate: number, wagerRequirement: number) => {
  numbers.push({ x: wagerRequirement, y: winRate });

  build();
};

defineExpose({ add, reset });

const chartData = ref({ datasets: <{}[]>[] });
const chartOptions = {
  type: "scatter",
  responsive: true,
  // animation: false,
  parsing: false,

  // events: [],
  plugins: {
    // tooltip: {
    //   enabled: false,
    // },
    legend: {
      display: false,
    },
  },
  scales: {
    // y: {
    // alignToPixels: true,
    // min: () =>
    //   numbers.reduce((acc, curr) => acc + curr, 0) / numbers.length - 1,
    // max: () =>
    //   numbers.reduce((acc, curr) => acc + curr, 0) / numbers.length + 1,
    // display: false,
    //   gridLines: {
    //     display: false,
    //   },
    // },
    // x: {
    // alignToPixels: true,
    // display: false,
    // type: "linear",
    // },
    y: {
      min: () =>
        numbers[numbers.length - 1] ? numbers[numbers.length - 1].y - 10 : 50,
      max: () =>
        numbers[numbers.length - 1] ? numbers[numbers.length - 1].y + 10 : 50,
    },
    x: {
      type: "linear",
      position: "bottom",
      min: () =>
        numbers[numbers.length - 1] ? numbers[numbers.length - 1].x - 10 : 50,
      max: () =>
        numbers[numbers.length - 1] ? numbers[numbers.length - 1].x + 10 : 50,
    },
  },
};

const build = () => {
  chartData.value = {
    datasets: [
      {
        // parsing: false,
        radius: 5,
        showLine: false,
        data: numbers.slice(-20).map((v) => v),
        backgroundColor: "rgb(255, 99, 132)",
      },
    ],
  };
};

build();
</script>
