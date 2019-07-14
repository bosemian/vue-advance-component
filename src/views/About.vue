<template>
  <awesome-content :names="names" @handleClick="getName"></awesome-content>
</template>

<script>
import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import Content from '../components/Content'

@Component({
  components: {
    AwesomeContent: Content
  }
})
export default class About extends Vue {
  names = ['mindy', 'john', 'kim', 'joel', 'ben']

  getName (v) {
    console.log(v)
  }
}
</script>
