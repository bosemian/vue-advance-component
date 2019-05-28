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

const CatList = {
  functional: true,
  render: (h, { props }) => (
    <div>
      {props.names
        .map((name) => `https://robohash.org/${name}?set=set${props.num}`)
        .map(((url, i) => <img 
          class={props.selected == i ? 'bg-blue-500' : ''} 
          src={url}
          onClick={event => props.select(i)} />))
      }
    </div>
  )
}

export default {
  functional: true,
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