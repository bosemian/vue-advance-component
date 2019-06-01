<template>
  <main>
    <slot :header="header" :footer="footer"></slot>
  </main>
</template>
<script>
import Vue from 'vue'
import Component from 'vue-class-component'

@Component({})
export default class Settings extends Vue {
  header = "Awesome Site"
  footer = "Incredible Copyright"
}
</script>