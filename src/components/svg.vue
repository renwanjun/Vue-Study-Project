<template>
    <div>
      <svg version="1.1"
           baseProfile="full"
           width="300" height="200"
           xmlns="http://www.w3.org/2000/svg">
        <rect width="100%" height="100%" fill="pink" />
        <circle cx="150" cy="100" r="90" fill="yellow" />
        大是大非上
      </svg>
    </div>
</template>
<style lang="less" scoped>
  svg{
    circle{
      cx:100;
      fill:red;
      border: solid 1px sandybrown;
    }
  }

</style>
<script>
    export default {
        name: "svgs"
    }
</script>
