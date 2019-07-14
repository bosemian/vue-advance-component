<template>
  <div class="flex-grow">
    <select v-model="selectedComp">
      <option v-for="comp in comps" :value="comp" :key="comp.name">{{ comp.name }}</option>
    </select>
    <component :is="selectedComp"></component>
  </div>
</template>

<script>
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'
const One = {
  functional: true,
  name: 'One',
  render: h => <h1 class="bg-red-500">One</h1>
}

const Two = {
  functional: true,
  name: 'Two',
  render: h => <h1 class="bg-green-500">Two</h1>
}

const Three = {
  functional: true,
  name: 'Three',
  render: h => <h1 class="bg-purple-500">Three</h1>
}

const AsynsThree = () => ({
  component: import('../components/Three'),
  // loading: {
  //   render: h => <h1>Loading....</h1>
  // },
  // timeout: 3000,
  // error: {
  //   render: h => <h1 class="text-red-500">ERROR</h1>,
  // }
})

@Component({
  components: {
    One,
    Two,
    Three
  }
})
export default class Home extends Vue {
  comps = [One, Two, Three, AsynsThree]
  selectedComp = this.comps[0]
}
</script>

<style>

</style>
