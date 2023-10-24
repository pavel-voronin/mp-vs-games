<template>
  <Panel caption="Random Generator Quality">
    <div class="text-center">Total generations: {{ numbers.reduce((acc, v) => acc + v, 0) }}</div>
    <Line :options="chartOptions" :data="chartData" />
  </Panel>
</template>

<script lang="ts" setup>
const add = (v: Record<number, number>) => {
  for (const [key, value] of Object.entries(v)) {
    numbers[parseInt(key)] += value;
  }
};

defineExpose({ add });

const numbers: number[] = [];
const labels: string[] = [];
const chartData = ref({ labels: <string[]>[], datasets: <{}[]>[] });
const chartOptions = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    y: {
      ticks: {
        // Include a dollar sign in the ticks
        callback: function (value: number) {
          return value.toFixed(2) + "%";
        },
      },
    },
  },
};

const build = () => {
  const total = numbers.reduce((acc, v) => acc + v, 0);
  const avg = total / numbers.length;

  chartData.value = {
    labels,
    datasets: [{ data: numbers.map((v) => ((v - avg) / avg) * 100) }],
  };
};

for (let i = 0; i < 37; i++) {
  labels.push(i.toString());
  numbers.push(0);
}

build();
setInterval(() => build(), 1000);
</script>
