<template>
  <div id="wrapper" class="clearfloat">
    <div id="imgs" class="clearfloat">
      <ul class="clearfloat">
        <li>
          <a href=""><img alt="loading" :src="imgs[imgs.length-1].src"></a>
        </li>
        <li v-for="item in imgs">
          <a href=""><img alt="loading" :src="item.src"></a>
        </li>
        <li>
          <a href=""><img alt="loading" :src="imgs[0].src"></a>
        </li>
      </ul>
    </div>
    <div id="nav" class="clearfloat">
      <ul class="clearfloat">
        <!--<li><a class="current">1</a></li>-->
        <li v-for="(item, index) in imgs">
          <a :class="{current:index==currentIndex,hidden:index!=currentIndex}">{{index+1}}</a>
        </li>
      </ul>
    </div>
    <div id="preous" @click="prev"><</div>
    <div id="next" @click="next">></div>
  </div>
</template>
<style lang="less" scoped>
  @pic-width: 1000px;
  #wrapper {
    margin: 0 auto;
    width: @pic-width;
    background: antiquewhite;
    height: 700px;
    position: relative;
    #imgs {
      width: @pic-width;
      height: 100%;
      overflow: hidden;
      float: left;
      position: relative;
      ul {
        position: absolute;
        z-index: 1;
        width: @pic-width*6;
        height: 100%;
        left: -@pic-width;
        li {
          float: left;
          width: @pic-width;
          overflow-x: hidden;
          img {
            width: 100%;
          }
        }
      }
    }

    #nav {
      /*width: 100px;*/
      height: 20px;
      float: left;
      position: absolute;
      right: 10px;
      bottom: 10px;
      z-index: 5;
      ul li {
        width: 20px;
        height: 20px;
        line-height: 20px;
        display: inline-block;
        background: #FFF;
        border-radius: 10px;
        margin-right: 5px;
        text-align: center;
        font-size: 12px;
        a.current {
          background: red;
          color: #FFF;
        }
        a.hidden {
          background: #FFF;
          color: #000;
        }
      }
    }

    #preous, #next {
      width: 100px;
      background: #000;
      font-size: 20px;
      font-weight: 900;
      text-align: center;
      height: 80px;
      line-height: 80px;
      position: absolute;
      top: 50%;
      color: #FFF;
      z-index: 3;
    }
    #preous {
      left: 0px;
    }
    #next {
      right: 0px;
    }
  }


</style>
<script>
  import img1 from '../../assets/images/01.jpg'
  import img2 from '../../assets/images/02.jpg'
  import img3 from '../../assets/images/03.jpg'
  import img4 from '../../assets/images/04.jpg'

  export default {
    name: 'PictureCarousel',
    data () {
      return {
        currentIndex: 0,
        imgs: [
          {
            href: '/assets/images/01.jpg',
            src: img1
          },
          {
            href: '',
            src: img2
          },
          {
            href: '',
            src: img3
          },
          {
            href: '',
            src: img4
          }
        ]
      }
    },
    methods: {
      _roll: function (direction) {
        var imgs_div = document.getElementById('imgs')
        var nav_div = document.getElementById('nav')
        // 获取到图片轮播的ul对象数组
        var imgsUl = imgs_div.getElementsByTagName('ul')[0]

        // 判断当前轮播位置
        let offset = parseInt(imgsUl.offsetLeft)
        if (direction < 0) {
          if (offset < 0) {
            offset += 1000
          } else {
            offset = -1000 * (this.imgs.length - 1)
          }
          this.currentIndex = --this.currentIndex < 0 ? this.imgs.length - 1 : this.currentIndex
        } else {
          if (offset > -1000 * (this.imgs.length + 1)) {
            offset -= 1000
          } else {
            offset = -1000 * 2
          }
          this.currentIndex = ++this.currentIndex >= this.imgs.length ? 0 : this.currentIndex
        }
        imgsUl.style.left = offset + 'px'
      },
      prev: function () {
        var imgs_div = document.getElementById('imgs')
        var nav_div = document.getElementById('nav')
        // 获取到图片轮播的ul对象数组
        var imgsUl = imgs_div.getElementsByTagName('ul')[0]

        // 判断当前轮播位置
        var offset
        if (parseInt(imgsUl.offsetLeft) < 0) {
          offset = parseInt(imgsUl.offsetLeft) + 1000
        } else {
          offset = -1000 * (this.imgs.length - 1)
        }
        imgsUl.style.left = offset + 'px'
        // --this.currentIndex
        this.currentIndex = --this.currentIndex < 0 ? this.imgs.length - 1 : this.currentIndex
      },
      next: function () {
        var imgs_div = document.getElementById('imgs')
        var nav_div = document.getElementById('nav')
        // 获取到图片轮播的ul对象数组
        var imgsUl = imgs_div.getElementsByTagName('ul')[0]

        var offset
        if (parseInt(imgsUl.offsetLeft) > -1000 * (this.imgs.length + 1)) {
          offset = parseInt(imgsUl.offsetLeft) - 1000
        } else {
          offset = -1000 * 2
        }

        imgsUl.style.left = offset + 'px'
        // imgsUl.scrollTo(-offset,0)
        // ++this.currentIndex
        this.currentIndex = ++this.currentIndex >= this.imgs.length ? 0 : this.currentIndex
      }
    },
    mounted () {
      // var imgs_div = document.getElementById('preous')
      // console.log(imgs_div.getBoundingClientRect(), imgs_div.offsetTop)
      // console.log(window.innerHeight, window,document.documentElement.clientHeight, document.documentElement.scrollTop,document.documentElement.scrollHeight)
      // console.log(document.body.scrollHeight,document.body.scrollWidth,document.body.clientWidth,document.body.offsetWidth,window.screen.availWidth)
      // console.log(imgs_div.offsetHeight,imgs_div.offsetWidth)
      // console.log(imgs_div.offsetLeft,imgs_div.offsetTop)
      // console.log(imgs_div.clientLeft,imgs_div.clientTop)
      // console.log(imgs_div.clientWidth,imgs_div.clientHeight,imgs_div.offsetParent)

      // if (!window.requestAnimationFrame) {
      //   window.requestAnimationFrame = function (fn) {
      //     // setTimeout(fn, 17)
      //     setInterval(fn, 2000)
      //   }
      // }
      // requestAnimationFrame(function () {
      //   document.getElementById('next').click()
      // })

      // 自动播放

    }
  }
</script>
