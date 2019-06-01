import CatList from './CatList'

const Selected = {
  props: {
    render: {
      default: h => null
    }
  },
  data () {
    return {
      selected: 1
    }
  },
  methods: {
    select (value) {
      this.selected = value
    }
  },
  render () {
    return this.$props.render({
      selected: this.selected,
      select: this.select
    })
  }
}

export default {
  functional: true,
  components: {
    CatList
  },
  render: (h, { props }) => (
    <div class="flex flex-col items-center flex-grow p-4">
      <Selected render={({ selected, select }) => (
        <div>
          <input type="number" onChange={e => select(e.target.value)} value={selected} />
          <CatList names={props.names} num={props.num} selected={selected} select={select} />
        </div>
      )}>
      </Selected>
    </div>
  )
}