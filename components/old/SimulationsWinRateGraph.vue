<template>
  <Line ref="graph" :options="chartOptions" :data="chartData" />
</template>

<script lang="ts" setup>
const numbers: number[] = reactive([]);

const graph = ref();

const reset = () => {
  numbers.length = 0;
};
const add = (rates: number[]) => {
  for (const rate of rates) {
    numbers.push(rate);
  }
};

defineExpose({ add, reset });

const chartData = ref({ datasets: <{}[]>[] });
const chartOptions = {
  type: "line",
  responsive: true,
  maintainAspectRatio: false,
  animation: false,
  parsing: false,

  events: [],
  plugins: {
    decimation: {
      enabled: true,
      algorithm: "lttb",
      samples: 50,
      // threshold: 50,
    },
    tooltip: {
      enabled: false,
    },
    legend: {
      display: false,
    },
    annotation: {
      annotations: {
        avg: {
          type: "line",
          borderColor: "red",
          borderWidth: 1,
          label: {
            display: true,
            content: () =>
              (
                numbers.reduce((acc, curr) => acc + curr, 0) / numbers.length
              ).toFixed(2) + "%",
            position: "center",
          },
          scaleID: "y",
          value: () =>
            numbers.reduce((acc, curr) => acc + curr, 0) / numbers.length,
        },
      },
    },
  },
  scales: {
    y: {
      // alignToPixels: true,
      min: () =>
        numbers.reduce((acc, curr) => acc + curr, 0) / numbers.length - 1,
      max: () =>
        numbers.reduce((acc, curr) => acc + curr, 0) / numbers.length + 1,
      display: false,
      //   gridLines: {
      //     display: false,
      //   },
    },
    x: {
      // alignToPixels: true,
      display: false,
      type: "linear",
    },
  },
};

const build = () => {
  chartData.value = {
    datasets: [
      {
        // parsing: false,
        radius: 0,
        data: numbers.slice(-125).map((v, i) => ({ x: i, y: v })),
      },
    ],
  };
};

build();
setInterval(() => build(), 100);
</script>
