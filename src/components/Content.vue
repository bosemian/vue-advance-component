<script>
export default {
  functional: true,
  render: (h, { children }) => (
    <div class="flex flex-col items-center flex-grow p-4">
      {children.filter((node) => node.tag)}
    </div>
  )
}
</script>