<template>
<div class="login">
  登录界面
  <form action="#">
    <label for="username">用户名：</label><input type="text" name="username" placeholder="用户名" v-model="login.username">
    <label for="password">密码：</label><input type="password" name="password" placeholder="密码" v-model="login.password">
    <label for="code">验证码：</label><input type="text" name="code" placeholder="验证码" v-model="login.code">
    <button type="submit" @click="_login">登录</button>
  </form>
</div>
</template>
<script>
export default {
  name: 'Login',
  data () {
    return {
      login: {
        username: 'admin',
        password: 'admin',
        code: 'cdjh'
      }
    }
  },
  methods: {
    // 用户登录
    _login () {
      if (!this.login.username || !this.login.password) {
        alert('用户名密码不能为空')
        return false
      }
      // this.$store.dispatch();

      this._http.fetch('post', this.$urls.login, this.login)
        . then(res => {
          console.log(res)
          return false
        })
        . catch(err => {
          console.log(err)
          return false
        })
    }
  }
}
</script>

<style lang="less" scoped>
@main-background:grey;
 .login{
   width: 100%;
   height: 100%;
   overflow: hidden;
   position: relative;
   background-color:@main-background;
 }
</style>

