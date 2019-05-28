<template>
  <div class="flex flex-col h-screen">
    <slot name="header">
      <h1 class="text-red-500">Please add some header</h1>
    </slot>
    <slot name="content">
      <h1 class="text-red-500 flex-grow">Please add some content</h1>
    </slot>
    <slot name="footer">
      <h1 class="text-red-500">Please add some footer</h1>
    </slot>
  </div>
</template>
