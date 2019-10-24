<template>
  <circle
    :cx="cx"
    :cy="cy"
    :r="r"
    fill="pink"
    stroke="black"
    @click="e => $emit('click', obj)"
  ></circle>
</template>

<script>
export default {
  name: 'MyCircle',

  props: {
    obj: Object
  },

  data: () => ({
    cx: null,
    cy: null,
    r: null
  }),

  created () {
    this.cx = this.obj.cx
    this.cy = this.obj.cy
    this.r = this.obj.r
  }
}
</script>
