<template>
  <div>
      <header class="public-header">
          <div class="public-content clearfloat">
              <div class="header-logo">
                  <a href=""></a>
              </div>
              <ul class="header-nav">
                <li class="item" v-for="item in list">
                  <a href="#">{{item}}</a>
                </li>
                  <!-- <li class="item"><a href="">Our Story</a></li>
                  <li class="item"><a href="">Menu</a></li>
                  <li class="item"><a href="">Peservations</a></li>
                  <li class="item"><a href="">News</a></li>
                  <li class="item"><a href="">Rviews</a></li> -->
              </ul>
          </div>
      </header>

    <div class="over1">
      你懂不懂我的心，其实我就是想试试两行要怎么解决你懂不懂我的心，其实我就是想试试两行要怎么解决你懂不懂我的心，其实我就是想试试两行要怎么解决你懂不懂我的心，其实我就是想试试两行要怎么解决你懂不懂我的心，其实我就是想试试两行要怎么解决你懂不懂我的心，其实我就是想试试两行要怎么解决你懂不懂我的心，其实我就是想试试两行要怎么解决你懂不懂我的心，其实我就是想试试两行要怎么解决
    </div>

    <div class="over2">
      你懂不懂我的心，其实我就是想试试两行要怎么解决你懂不懂我的心，其实我就是想试试两行要怎么解决你懂不懂我的心，其实我就是想试试两行要怎么解决你懂不懂我的心，其实我就是想试试两行要怎么解决你懂不懂我的心，其实我就是想试试两行要怎么解决你懂不懂我的心，其实我就是想试试两行要怎么解决你懂不懂我的心，其实我就是想试试两行要怎么解决你懂不懂我的心，其实我就是想试试两行要怎么解决
    </div>

    <div style="width: 100px;height: 100px;">
      <div class="zxx_text_overflow" >
        <div class="zxx_con" >这是一段比较长的文字，用来测试是否文字溢出时会用省略号显示。</div>
        <div class="zxx_dotted" >…</div>
      </div>
    </div>



    <!--<starry-sky></starry-sky>-->
    <!--<picture-carousel></picture-carousel>-->

      <div class="public-content index-banner"></div>
      <div class="public-content index-list"></div>
      <div class="public-content index-panel">
          <div class="index-panel-header">FEATURED DISHES</div>
      </div>
      <div class="public-content index-panel">
          <div class="index-panel-header">THE GALLERY</div>
      </div>
      <footer class="public-footer">
          <div class="public-content">

          </div>
      </footer>
  </div>
</template>
<style lang="less" scoped>
  .over1{
    background: antiquewhite;
    margin: 20px;
    /*padding: 20px;*/
    width: 100px;
    /*border:solid 1px red;*/
    /*white-space:nowrap;*/
    overflow: hidden;
    -o-text-overflow: ellipsis;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 6;
    -webkit-box-orient: vertical;
    word-break: break-all;
    max-height: 156px;
  }

  .over2{
    background: antiquewhite;
    margin: 20px;
    /*padding: 20px;*/
    width: 100px;
    overflow: hidden;
    word-break: break-all;
    max-height: 156px;
    &:after{
      position: absolute;
      bottom: 0;
      right: 0;
      padding:0 5px 1px 45px;
      content: '...';
      /*!*background:url(ellipsis_bg.png) repeat-y;*!*/
      background:-webkit-linear-gradient(left,transparent,#fff55%);
      background:-o-linear-gradient(right,transparent,#fff55%);
      background:-moz-linear-gradient(right,transparent,#fff55%);
      background:linear-gradient(toright,transparent,#fff55%);
    }

    .zxx_text_overflow{
      width:100px;
      height:1.3em;
      overflow:hidden;
      zoom:1;
    }
    .zxx_text_overflow .text_con{float:left; height:1.3em; margin-right:3em; overflow:hidden;}
    .zxx_text_overflow .text_dotted{width:3em; height:1.31em; float:right; margin-top:-1.3em;}
  }

</style>
<script>
import StarrySky from './animation/starry_sky'
import PictureCarousel from './animation/picture_carouse'

export default {
  components: {
    StarrySky,
    PictureCarousel
  },
  name: 'Main',
  data () {
    return {
      msg: 'dd',
      list: ['Apple', 'Banana']
    }
  }
}
</script>


