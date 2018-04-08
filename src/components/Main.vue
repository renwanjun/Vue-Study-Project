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


    <!--<starry-sky></starry-sky>-->
    <!--<picture-carousel></picture-carousel>-->
    <!--<test></test>-->
      <!--<svgs>< /svgs>-->
    <three-d></three-d>

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


</style>
<script>
import StarrySky from './animation/starry_sky'
import PictureCarousel from './animation/picture_carouse'
import Test from './test'
import Svgs from './svg'
import ThreeD from './threeD'
export default {
  components: {
    StarrySky,
    PictureCarousel,
    Test,
    Svgs,
    ThreeD
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


