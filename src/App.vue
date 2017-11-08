<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
  </div>
</template>

<script>
class Foo {
  constructor () {
    this.type = 'point'
  }
  static area () {
    return 12
  }
}
let foo1 = new Foo()
export default {
  name: 'app'
}
console.log(foo1)
</script>
<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>


