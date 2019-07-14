<script>
export default {
  functional: true,
  render: (h, context) => {
    console.log(context)
    return (
      <div class="flex flex-col items-center flex-grow p-4">
        {
          context.props.names.map((n) => {
            let handleClick = context.listeners.handleClick
            return (
              <div onClick={event => handleClick(n)}>{ n }</div>
            )
          })
        }
      </div>
    )
  }
}
</script>
