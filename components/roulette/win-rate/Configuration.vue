<template>
  <Panel caption="Config" description="change and simulation restarts">
    <div class="border-2 border-solid border-zinc-200 -m-2 p-2 rounded-md">
      <h3 class="text-right uppercase mb-3 text-slate-800 font-thin text-sm">
        {{ props.caption }}
      </h3>

      <Input
        v-for="(field, i) in orderedFields"
        :key="i"
        v-model="orderedFields[i]"
      >
        <span v-html="field.name"></span>:
      </Input>
    </div>

    <div class="-m-2 mt-4">
      <Roulette v-model="modelValue.bets"></Roulette>
    </div>
  </Panel>
</template>

<script lang="ts" setup>
const props = defineProps(["modelValue", "caption"]);

const orderedFields = computed((): any =>
  Object.fromEntries(
    Object.entries(props.modelValue)
      .filter(([_, field]: any) => "order" in field)
      .sort(([_, a]: any, [__, b]: any) => a.order - b.order)
  )
);
</script>
