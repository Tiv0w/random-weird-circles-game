<template>
  <span> {{ msg }} : {{ count }} </span>
</template>

<script>
export default {
  name: 'Counter',

  props: ['msg', 'count']
}
</script>

<style scoped>
span {
  color: red;
}
</style>
