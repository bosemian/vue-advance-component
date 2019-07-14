<template>
  <settings>
    <layout slot-scope="{header, footer}">
      <awesome-header slot="header" :header="header"></awesome-header>
      <router-view slot="content"></router-view>
      <awesome-footer slot="footer" :footer="footer"></awesome-footer>
    </layout>
  </settings>
</template>
<script>
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import Layout from './Layout'
import Settings from './Settings'
import { Header, Footer } from './components'



@Component({
  components: {
    Layout,
    Settings,
    AwesomeHeader: Header,
    AwesomeFooter: Footer,
  }
})
export default class App extends Vue {}
</script>
