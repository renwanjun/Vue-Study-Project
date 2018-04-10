<template>
  <!DOCTYPE html>
  <html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=0">
    <title>弹窗</title>
    <style>
    body {
        margin: 0;
        padding: 0;
    }
    /* Эти стили отключат прокрутку на странице */
    body.scroll-locked {
        position: fixed;
        left: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;
    }

    /* Пример стилей для блока поверх страницы */
    .modal {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,.5);
        z-index: 1000;
        overflow: auto;
        -webkit-overflow-scrolling: touch;
        display: none;
    }

    .modal-inner {
        position: absolute;
        width: 300px;
        height: 150px;
        background: #ffd600;
        top: 0; right: 0; bottom: 0; left: 0;
        margin: auto;
    }

    body.scroll-locked .modal {
        display: block;
    }
    </style>
</head>
<body>
    <div class="container">
        <p>1231231321321321</p>
        <p>123123fdsaf21321321</p>
        <p>1231231321321321</p>
        <p>1231231321321321</p>
        <p>123123fasdfv321321</p>
        <p>1231231321321321</p>
        <p>1231231321321321</p>
        <p>1231231321321321</p>
        <p>1231231321321321</p>
        <p>1231231hyhjh321321321</p>
        <p>1231231321mnbvc321321</p>
        <p>1231231321321321</p>
        <p>123123132nnnhbnb1321321</p>
        <p>1231231321321321</p>
        <p>1231231321321321</p>
        <p>123123132dsavsav1321321</p>
        <p>123123132yuikjyte1321321</p>
        <p>1231231321321321</p>
        <p>1231231321321321</p>
        <p>12312313ddadsa21321321</p>
        <p>1231231321321321</p>
        <p>1231231321321321</p>
        <p>1231231321321321</p>
        <p>1231231321vvdvsa321321</p>
        <p>1231231321321321</p>
        <p>1231231321321321</p>
        <p>1231231321321321</p>
        <p>1231231321321321</p>
        <p>1231231321321321</p>
        <p>1231231321321321</p>
        <p>123123fdsaf21321321</p>
        <p>1231231321321321</p>
        <p>1231231321321321</p>
        <p>123123fasdfv321321</p>
        <p>1231231321321321</p>
        <p>1231231321321321</p>
        <p>1231231321321321</p>
        <p>1231231321321321</p>
        <p>1231231hyhjh321321321</p>
        <p>1231231321mnbvc321321</p>
        <p>1231231321321321</p>
        <p>123123132nnnhbnb1321321</p>
        <p>1231231321321321</p>
        <p>1231231321321321</p>
        <p>123123132dsavsav1321321</p>
        <p>123123132yuikjyte1321321</p>
        <p>1231231321321321</p>
        <p>1231231321321321</p>
        <p>12312313ddadsa21321321</p>
        <p>1231231321321321</p>
        <p>1231231321321321</p>
        <p>1231231321321321</p>
        <p>1231231321vvdvsa321321</p>
        <p>1231231321321321</p>
        <p>1231231321321321</p>
        <p>1231231321321321</p>
        <p>1231231321321321</p>
        <p>1231231321321321</p>
    </div>
    <div class="modal">
        <div class="modal-inner">
            <p>弹窗</p>
            <input type="text" id="input">
        </div>
    </div>
    <script>
    var body = document.getElementsByTagName('body')[0];
    var bodyScrollTop = null;
    var locked = false;

    // Заблокировать прокрутку страницы
    function lockScroll(){
        if (!locked) {
            bodyScrollTop = (typeof window.pageYOffset !== 'undefined') ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
            body.classList.add('scroll-locked');
            body.style.top = `-${bodyScrollTop}px`;
            locked = true;
        };
    }

    // Включить прокрутку страницы
    function unlockScroll(){
        if (locked) {
            body.classList.remove('scroll-locked');
            body.style.top = null;
            window.scrollTo(0, bodyScrollTop);
            locked = false;
        }
    }
    </script>

  <script src="https://cdn.bootcss.com/jquery/3.2.1/jquery.min.js"></script>
  <script>
    $('#input').click(function(e) {
      e.stopPropagation();
    })
    $('.modal').click(function () {
      if($(this).attr('id') !== 'input') {
        unlockScroll()
      }
    })
    $('.container').click(function () {
      lockScroll()
    })
  </script>
  </body>
  </html>
</template>

<script>
    export default {
        name: "ios11-input-bug"
    }
</script>

<style scoped>

</style>
