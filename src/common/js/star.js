let stars = {},
  particleIndex = 0,
  settings = {
    r: 1400, // 根据是设计稿确定的轨迹半径
    height: 260, // 露出的圆弧的高度
    density: 300,
    maxLife: 100,
    groundLevel: 1000,
    leftWall: 0,
    rightWall: 1910,
    alpha: 0.0,
    maxAlpha: 1
  }

const getMinRandom = () => {
  let rand = Math.random()
  // step的大小决定了星星靠近地球的聚拢程度，
  // step = Math.ceil(2 / (1 - rand))就聚拢很明显
  let step = Math.ceil(1 / (1 - rand))
  let arr = []
  for (let i = 0; i < step; i++) {
    arr.push(Math.random())
  }
  return Math.min.apply(null, arr)
}

function Star (width, height) {
  // this.canvas = {
  //   width: width,
  //   height: height
  // }
  //
  this.width = 1920
  this.height = 1000
  // 圆的轨迹方程式为：(x-a)²+(y-b)²=r²
  // 因此，已知x, 则y = Math.sqrt(r² - (x-a)²) + b;
  // 其中，圆心是(a, b)
  // 在本例子中
  // 圆心坐标是(this.canvas.width/2, this.canvas.height - 600 + r);
  let a = this.width / 2,
    b = this.height - settings.height + settings.r
  // 因此，已知横坐标随机
  this.x = Math.floor(Math.random() * this.width)
  // 纵坐标需要在圆弧以上
  // 越往上，越稀疏
  this.offsety = getMinRandom() * (this.height - settings.height)
  this.y = b - Math.sqrt(settings.r * settings.r - (this.x - a) * (this.x - a)) - this.offsety

  this.vx = Math.random() * 0.05 + 0.025 // 水平偏移，也是移动速度

  // 星星的尺寸
  this.particleSize = 0.5 + (Math.random() + 0.1 / 4)
  particleIndex++
  stars[particleIndex] = this
  this.alpha = 0.0
  this.maxAlpha = 0.2 + (this.y / this.height) * Math.random() * 0.8
  this.alphaAction = 1
}

Star.prototype.draw = () => {
  // console.log(this.canvas)
  // let canvas = this.canvas
  // 横坐标移动
  this.x += this.vx
  // 根据切线方向进行偏移
  // y坐标
  this.y = this.height - settings.height + settings.r - Math.sqrt(settings.r * settings.r - (this.x - this.width / 2) * (this.x - this.width / 2)) - this.offsety
  console.log(this.y)
  // 透明度慢慢起来
  if (this.alphaAction === 1) {
    if (this.alpha < this.maxAlpha) {
      this.alpha += 0.005
    } else {
      this.alphaAction = -1
    }
  } else {
    if (this.alpha > 0.2) {
      this.alpha -= 0.002
    } else {
      this.alphaAction = 1
    }
  }

  if (this.x + (this.particleSize * 2) >= settings.rightWall) {
    // x到左侧
    this.x = this.x - settings.rightWall
  }

  // 绘制星星
  // context.beginPath()
  // context.fillStyle = 'rgba(255,255,255,' + this.alpha.toString() + ')'
  // context.arc(this.x, this.y, this.particleSize, 0, Math.PI * 2, true)
  // context.closePath()
  // context.fill()
}

module.exports = Star
