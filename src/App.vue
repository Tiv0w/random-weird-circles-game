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
    time: 10,
    timeout: null,
    timer: null,
    circles: {}
  }),

  created () {
    this.maxHeight = this.windowHeight - 60 // we give enough room for the scoreboard
    this.initGame()
    this.initTimeout()
  },

  mounted () {
    /////////////////////////////////////
    // Ca devient n'imp                //
    // J'ai testé des trucs mais bon   //
    // Triple ouille je manque de temps//
    /////////////////////////////////////
    this.timer = setInterval(() => {
      if (Date.now() - timeout > 10) {
        this.endGame()
      }
    }, 1000)
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

    initCircles (radius) {
      for (let i = 0; i < 5; i++) {
        this.circles[i] = this.createCircle(i, radius)
      }
    },

    initGame () {
      this.time = 10000
      this.score = 0
      const radius = this.rand(100, 300)
      this.initCircles(radius)
    },

    initTimeout () {
      this.timeout = Date.now()
    },

    circleClicked (circle) {
      this.score++
      this.removeCircle(circle)
    },

    removeCircle (oldCircle) {
      delete this.circles[oldCircle.id]
      if (Object.keys(this.circles).length === 0) {
        setTimeout(this.levelUp(oldCircle.r), 1000)
      }
    },

    levelUp (oldRadius) {
      this.circles = {}
      this.time = Math.floor(this.time * 0.75)
      this.initCircles(Math.floor(oldRadius * 0.75))
    },

    endGame () {
      console.log('lost')
      /* alert('You just lost, you\'re too slow, you\'re ugly. Score: ', this.score) */
      this.initGame()
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
