<template>
  <div class="header">
    <canvas :id=canvas.id v-bind:width=canvas.width v-bind:height=canvas.height></canvas>
  </div>
</template>
<style lang="less" scoped>
  .header {
    position: relative;
    background: url(../../assets/images/earth.jpg) center center no-repeat;
    height: 1000px;
    overflow: hidden;
  }

  .header > canvas {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 50%;
    margin-left: -960px;
  }
</style>
<script>
  import Star from '../../common/js/star'
  export default {
    name: 'StarrySky',
    data () {
      return {
        canvas: {
          id: 'starCanvas',
          width: 1920,
          height: 1000
        }
      }
    },
    methods: {},
    mounted () {
      const canvas = this.canvas
      let context = document.getElementById(this.canvas.id).getContext('2d')
      let stars = [],
        particleIndex = 0,
        settings = {
          r: 1400, // 根据是设计稿确定的轨迹半径
          height: 260, // 露出的圆弧的高度
          density: 300,
          maxLife: 100,
          groundLevel: canvas.height,
          leftWall: 0,
          rightWall: canvas.width,
          alpha: 0.0,
          maxAlpha: 1
        }
      //
      const redraw = () => {
        context.clearRect(0, 0, canvas.width, canvas.height)
        context.fillStyle = 'rgba(0,0,0,0)'
        context.fillRect(0, 0, canvas.width, canvas.height)
      }
      //
      const render = () => {
        redraw()

        // 星星的数目
        // IE下CUP性能有限，数目小
        let length = 400
        if (!history.pushState) {
          // IE9
          length = 200
        } else if (document.msHidden !== undefined) {
          // IE10+
          length = 300
        }

        if (Object.keys(stars).length > length) {
          settings.density = 0
        }

        for (let i = 0; i < settings.density; i++) {
          if (Math.random() > 0.97) {
            stars.push(new Star(this.canvas.width, this.canvas.height))
          }
        }

        // 星星实时移动
        for (let i in stars) {
          stars[i].draw()
        }

        requestAnimationFrame(render)
      }

      if (!window.requestAnimationFrame) {
        window.requestAnimationFrame = function (fn) {
          setTimeout(fn, 17)
        }
      }

      render()
    }
  }
</script>
