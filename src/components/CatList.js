export default {
  functional: true,
  render: (h, { props }) => (
    <div>
      {props.names
        .map((name) => `https://robohash.org/${name}?set=set${props.num}`)
        .map((url, i) => <img
          class={props.selected == i ? 'bg-blue-500' : ''} 
          src={url}
          onClick={event => props.select(i)} />)
      }
    </div>
  )
}
