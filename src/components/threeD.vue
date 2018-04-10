<template>
<div class="stage">
  <div class="poker">
    <div>
    <img src="../assets/images/cardKingClub.jpeg" alt="" width="142" height="200" />
    <img src="../assets/images/cardKingClub.jpeg" alt="" width="142" height="200" />
    </div>
    <div>
    <img src="../assets/images/cardKingClub.jpeg" alt="" width="142" height="200" />
    <img src="../assets/images/cardKingClub.jpeg" alt="" width="142" height="200" />
    </div>
  </div>

 <div class="threeD-box">
   <div class="wrapper w2">
     <div class="cube">
       <div class="side  front">1</div>
       <div class="side   back">6</div>
       <div class="side  right">4</div>
       <div class="side   left">3</div>
       <div class="side    top">5</div>
       <div class="side bottom">2</div>
     </div>
   </div>
   <div class="wrapper w1">
     <div class="cube">
       <div class="side  front">1</div>
       <div class="side   back">6</div>
       <div class="side  right">4</div>
       <div class="side   left">3</div>
       <div class="side    top">5</div>
       <div class="side bottom">2</div>
     </div>
   </div>
 </div>


</div>
</template>

<script>
    export default {
      name: 'three-d'
    }
</script>

<style lang="less" scoped>
  .stage{
    .poker{
      /*display: none;*/
      div {
        width: 500px;
        height: 300px;
        margin: 30px auto;
        position: relative;
        background: url(../assets/images/bg_grid.jpeg) no-repeat center center;
        background-size: 100% 100%;
      }
      div img {
        position: absolute;
        top: 50%;
        left: 50%;
        margin-left: -71px;
        margin-top: -100px;
        /*transform-origin: bottom center;*/
      }
      div img:nth-child(1){
        opacity: .5;
        z-index: 1;
      }
      div img:nth-child(2){
        z-index: 2;
        transform: rotateX(45deg);
      }
      div:nth-of-type(2){
        perspective: 500px;
      }
    }

    .threeD-box{
      height: 400px;
      .wrapper {
        width: 50%;
        float: left;
      }
      .cube {
        font-size: 4em;
        width: 2em;
        margin: 1.5em auto;
        transform-style: preserve-3d;
        transform: rotateX(-40deg) rotateY(32deg);
      }
      .side {
        position: absolute;
        width: 2em;
        height: 2em;
        background: rgba(255, 99, 71, 0.6);
        border: 1px solid rgba(0, 0, 0, 0.5);
        color: white;
        text-align: center;
        line-height: 2em;
      }
      .front {
        transform: translateZ(1em);
      }
      .top {
        transform: rotateX(90deg) translateZ(1em);
      }
      .right {
        transform: rotateY(90deg) translateZ(1em);
      }
      .left {
        transform: rotateY(-90deg) translateZ(1em);
      }
      .bottombottom {
        transform: rotateX(-90deg) translateZ(1em);
      }

      .back {
        transform: rotateY(-180deg) translateZ(1em);
      }
      .w1 {
        perspective: 100px;
      }
      .w2{
        perspective: 1000px;
      }
    }


  }
</style>
