<template>
  <settings>
    <layout slot-scope="{header, footer}">
      <awesome-header slot="header" :header="header"></awesome-header>
      <!-- <cats slot="content" :names="names" :num="4"></cats> -->
      <div slot="content" class="flex-grow">
        <select v-model="selectedComp">
          <option v-for="comp in comps" :value="comp" :key="comp.name">{{ comp.name }}</option>
        </select>
        <component :is="selectedComp"></component>
      </div>
      <awesome-footer slot="footer" :footer="footer"></awesome-footer>
    </layout>
  </settings>
</template>
<script>
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import Layout from './Layout'
import Settings from './Settings'
import { Header, Footer, Content, Cats } from './components'

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
  component: import('./components/Three'),
  loading: {
    render: h => <h1>Loading....</h1>
  },
  // timeout: 3000,
  error: {
    render: h => <h1 class="text-red-500">ERROR</h1>,
  }
})

@Component({
  components: {
    Layout,
    Settings,
    AwesomeHeader: Header,
    AwesomeFooter: Footer,
    AwesomeContent: Content,
    Cats
  }
})
export default class App extends Vue {
  names = ["mindy", "john", "kim", "joel", "ben"]
  comps = [One, Two, AsynsThree]
  selectedComp = this.comps[0]
}
</script>
