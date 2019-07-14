<template>
  <cats :names="names" :num="4"></cats>
</template>

<script>
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import { Cats } from '../components'

@Component({
  components: {
    Cats
  }
})
export default class CatsPage extends Vue {
  names = ['mindy', 'john', 'kim', 'joel', 'ben', 'josh', 'drek']
}
</script>
