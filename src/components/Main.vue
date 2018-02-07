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

    <starry-sky></starry-sky>

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
<style type="text/css">

</style>
<script>
import StarrySky from './animation/starry_sky'

export default {
  components: {StarrySky},
  name: 'Main',
  data () {
    return {
      msg: 'dd',
      list: ['Apple', 'Banana']
    }
  }
}
</script>


