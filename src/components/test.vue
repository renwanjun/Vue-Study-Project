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

  .root{
    margin:20px;
    padding: 20px;
    /*width: 300px;*/
    border:solid 1px black;
    position: relative;
    .div-common(){
      /*height: 30px;*/
      text-align: left;
      background: antiquewhite;
      border:solid 1px black;
    }
    .c1{
      .div-common;
      /*height: 1.5em;*/
      /*font-size:10em;*/
      /*display: inline;*/
      /*position: absolute;*/
    }
    .c2{
      .div-common;
      /*display: inline;*/
      /*position: absolute;*/
    }
    .user{
      img{
        vertical-align: middle;
      }
      span{
        width: 210px;
        vertical-align: middle;
        display: inline-block;
        /*font-size:0.1em ;*/
      }
    }

    .comment{
      width: 200px;
      height: 90px;
      resize: none;
      border-radius: 7px;
      background: #fff;
      padding: 7px;
      border: 1px solid #ccc;
      outline: 0;
      font-size: 15px;
      color:#528ac1;

    }

    ::selection{
      background-color:lavender;
    }

  }

</style>
<template>
  <div class="root">
    father
    <div class="c1 user">
        <img src="../assets/images/oldman.png">
      急哦大家发 i 哦是的风景哦ID是减肥 i 的送积分 i 哦的设计方式都 if 集散地哦佛教圣地哦佛教圣地哦饭店送飞机上的
        <!--<span>你说的很快的很快的很快</span>-->
        <!--<span>-->
          <!--你说的很快乐的很快的很快的很快的很快的很快的很快的很快的很快的很快你说的很快乐的很快的很快的很快的很快的很快的很快的很快的很快的很快你说的很快乐的很快的很快的很快的很快的很快的很快的很快的很快的很快-->
          <!--你说的很快乐的很快的很快的很快的很快的很快的很快的很快的很快的很快你说的很快乐的很快的很快的很快的很快的很快的很快的很快的很快的很快你说的很快乐的很快的很快的很快的很快的很快的很快的很快的很快的很快-->
          <!--<div>dfsdfdfd</div>-->
          <!--<p>-->
            <!--sdssdsds-->
          <!--</p>-->
        <!--</span>-->
    </div>
    <div style="background: lavender;">
      <span style="position: relative;display:inline-block;"></span>
    </div>
    <div>
      <div style="float: left;width:30px;height: 50px;border: #006dcc solid 1px;"></div>
      xjhGJg手机壳大叔的空间撒都会撒娇的环境卡上的的回家阿克索德回家啊上课
    </div>
    <p>这是一行普通的文字，这里有个xem<em>em</em>标签</p>
    <div>
      <!--<textarea v-model="text" class="comment" placeholder="请输入评论内容"></textarea>-->
      <input type="button" value="按钮">
      <button type="button">按钮</button>

       </div>
  </div>
</template>
<script>
  // import oldman from '../assets/images/oldman.png'
  export default {
    name: 'test',
    data () {
      return {
        text: '😣😢😢😜😢😆😰😀速度速度😁😂'
      }
    }
  }
</script>
