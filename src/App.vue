<template>
  <div id="app">
    <svg :width="windowWidth" :height="windowHeight - 60">
      <template
        v-for="(circle, index) in circles"
      >
        <MyCircle
          :key="index"
          :obj="circle"
          @click="circleClicked"
        ></MyCircle>
      </template>
    </svg>
  </div>
</template>

<script>
import MyCircle from './components/MyCircle.vue'

export default {
  name: 'app',

  components: {
    MyCircle
  },

  data: () => ({
    maxHeight: null,
    score: 0,
    circles: []
  }),

  mounted () {
    this.maxHeight = this.windowHeight - 60 // we give enough room for the scoreboard
    this.initCircles()
  },

  methods: {
    rand (low, up) {
      return Math.floor(Math.random() * (up - low)) + low
    },

    createCircle (radius) {
      const cx = this.rand(1, this.windowWidth - radius)
      const cy = this.rand(1, this.maxHeight - radius)

      return {
        cx: cx,
        cy: cy,
        r: radius
      }
    },

    initCircles () {
      const radius = this.rand(100, 300)
      for (let i = 0; i < 5; i++) {
        this.circles.push(this.createCircle(radius))
      }
    },

    circleClicked (circle) {
      console.log(circle)
      this.score++
      this.removeCircle(circle)
    },

    removeCircle (oldCircle) {
      const index = this.circles.indexOf(oldCircle)
      if (index > -1) {
        this.circles.splice(index, 1)
      }
    }
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
