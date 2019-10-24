<template>
  <div id="app">
    <svg :width="windowWidth" :height="windowHeight - 60">
      <template
        v-for="circle in circles"
      >
        <MyCircle
          :key="circle.id"
          :obj="circle"
          @click="circleClicked"
        ></MyCircle>
      </template>
    </svg>

    <Counter msg="Score" :count="score"></Counter>

    <!-- <Counter msg="Time"></Counter> -->
  </div>
</template>

<script>
import MyCircle from './components/MyCircle.vue'
import Counter from './components/Counter.vue'

export default {
  name: 'app',

  components: {
    MyCircle,
    Counter
  },

  data: () => ({
    maxHeight: null,
    score: 0,
    circles: {}
  }),

  created () {
    this.maxHeight = this.windowHeight - 60 // we give enough room for the scoreboard
    this.initCircles()
  },

  methods: {
    rand (low, up) {
      return Math.floor(Math.random() * (up - low)) + low
    },

    createCircle (index, radius) {
      const cx = this.rand(1, this.windowWidth - radius)
      const cy = this.rand(1, this.maxHeight - radius)

      return {
        id: index,
        cx: cx,
        cy: cy,
        r: radius
      }
    },

    initCircles () {
      const radius = this.rand(100, 300)
      for (let i = 0; i < 5; i++) {
        this.circles[i] = this.createCircle(i, radius)
      }
    },

    circleClicked (circle) {
      this.score++
      this.removeCircle(circle)
    },

    removeCircle (oldCircle) {
      delete this.circles[oldCircle.id]
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
