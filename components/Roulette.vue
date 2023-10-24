<template>
  <div>
    <div class="flex justify-center mt-6 mb-3">
      <span class="mr-2">Choose bet:</span>
      <div v-for="b in bets" :key="b" @click="bet = b">
        <div
          v-if="b === bet"
          class="text-xs border-b-2 rounded-full font-normal p-1 select-none text-black shadow-md bg-yellow-600 shadow-yellow-700 brightness-125"
        >
          {{ b }}
        </div>
        <div
          v-else
          class="text-xs border-b-2 rounded-full font-normal p-1 select-none text-black shadow-md shadow-yellow-500 bg-yellow-500 brightness-125"
        >
          {{ b }}
        </div>
      </div>
    </div>
    <div class="w-full h-full grid grid-cols-[repeat(15,_minmax(0,_1fr))]">
      <Field
        color="transparent"
        row-span-3="true"
        :bet="bet"
        v-model="props.modelValue['0']"
        >0</Field
      >
      <Field color="red" :bet="bet" v-model="props.modelValue['3']">3</Field>
      <Field color="black" :bet="bet" v-model="props.modelValue['6']">6</Field>
      <Field color="red" :bet="bet" v-model="props.modelValue['9']">9</Field>
      <Field color="red" :bet="bet" v-model="props.modelValue['12']">12</Field>
      <Field color="black" :bet="bet" v-model="props.modelValue['15']"
        >15</Field
      >
      <Field color="red" :bet="bet" v-model="props.modelValue['18']">18</Field>
      <Field color="red" :bet="bet" v-model="props.modelValue['21']">21</Field>
      <Field color="black" :bet="bet" v-model="props.modelValue['24']"
        >24</Field
      >
      <Field color="red" :bet="bet" v-model="props.modelValue['27']">27</Field>
      <Field color="red" :bet="bet" v-model="props.modelValue['30']">30</Field>
      <Field color="black" :bet="bet" v-model="props.modelValue['33']"
        >33</Field
      >
      <Field color="red" :bet="bet" v-model="props.modelValue['36']">36</Field>
      <Field
        color="transparent"
        col-span-2="true"
        text-size="sm"
        :bet="bet"
        v-model="props.modelValue['h-1']"
        >2 to 1</Field
      >
      <Field color="black" :bet="bet" v-model="props.modelValue['2']">2</Field>
      <Field color="red" :bet="bet" v-model="props.modelValue['5']">5</Field>
      <Field color="black" :bet="bet" v-model="props.modelValue['8']">8</Field>
      <Field color="black" :bet="bet" v-model="props.modelValue['11']"
        >11</Field
      >
      <Field color="red" :bet="bet" v-model="props.modelValue['14']">14</Field>
      <Field color="black" :bet="bet" v-model="props.modelValue['17']"
        >17</Field
      >
      <Field color="black" :bet="bet" v-model="props.modelValue['20']"
        >20</Field
      >
      <Field color="red" :bet="bet" v-model="props.modelValue['23']">23</Field>
      <Field color="black" :bet="bet" v-model="props.modelValue['26']"
        >26</Field
      >
      <Field color="black" :bet="bet" v-model="props.modelValue['29']"
        >29</Field
      >
      <Field color="red" :bet="bet" v-model="props.modelValue['32']">32</Field>
      <Field color="black" :bet="bet" v-model="props.modelValue['35']"
        >35</Field
      >
      <Field
        color="transparent"
        col-span-2="true"
        text-size="sm"
        :bet="bet"
        v-model="props.modelValue['h-2']"
        >2 to 1</Field
      >
      <Field color="red" :bet="bet" v-model="props.modelValue['1']">1</Field>
      <Field color="black" :bet="bet" v-model="props.modelValue['4']">4</Field>
      <Field color="red" :bet="bet" v-model="props.modelValue['7']">7</Field>
      <Field color="black" :bet="bet" v-model="props.modelValue['10']"
        >10</Field
      >
      <Field color="black" :bet="bet" v-model="props.modelValue['13']"
        >13</Field
      >
      <Field color="red" :bet="bet" v-model="props.modelValue['16']">16</Field>
      <Field color="red" :bet="bet" v-model="props.modelValue['19']">19</Field>
      <Field color="black" :bet="bet" v-model="props.modelValue['22']"
        >22</Field
      >
      <Field color="red" :bet="bet" v-model="props.modelValue['25']">25</Field>
      <Field color="black" :bet="bet" v-model="props.modelValue['28']"
        >28</Field
      >
      <Field color="black" :bet="bet" v-model="props.modelValue['31']"
        >31</Field
      >
      <Field color="red" :bet="bet" v-model="props.modelValue['34']">34</Field>
      <Field
        color="transparent"
        col-span-2="true"
        text-size="sm"
        :bet="bet"
        v-model="props.modelValue['h-3']"
        >2 to 1</Field
      >
      <Field
        color="transparent"
        col-span-4="true"
        text-size="sm"
        col-start-2="true"
        :bet="bet"
        v-model="props.modelValue['v-1']"
        >1st 12</Field
      >
      <Field
        color="transparent"
        col-span-4="true"
        text-size="sm"
        :bet="bet"
        v-model="props.modelValue['v-2']"
        >2nd 12</Field
      >
      <Field
        color="transparent"
        col-span-4="true"
        text-size="sm"
        :bet="bet"
        v-model="props.modelValue['v-3']"
        >3rd 12</Field
      >
      <Field
        color="transparent"
        col-start-2="true"
        col-span-2="true"
        text-size="sm"
        :bet="bet"
        v-model="props.modelValue['1-18']"
        >1-18</Field
      >
      <Field
        color="transparent"
        col-span-2="true"
        text-size="sm"
        :bet="bet"
        v-model="props.modelValue['even']"
        >EVEN</Field
      >
      <Field
        color="red"
        col-span-2="true"
        text-size="sm"
        :bet="bet"
        v-model="props.modelValue['red']"
        >RED</Field
      >
      <Field
        color="black"
        col-span-2="true"
        text-size="sm"
        :bet="bet"
        v-model="props.modelValue['black']"
        >BLACK</Field
      >
      <Field
        color="transparent"
        col-span-2="true"
        text-size="sm"
        :bet="bet"
        v-model="props.modelValue['odd']"
        >ODD</Field
      >
      <Field
        color="transparent"
        col-span-2="true"
        text-size="sm"
        :bet="bet"
        v-model="props.modelValue['19-36']"
        >19-36</Field
      >
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps(["modelValue"]);
const bets = [0.1, 0.25, 0.5, 1, 2, 5, 10, 25, 50, 100, 500, 1000];
const bet = ref(10);
</script>
