<template>
  <div id="app">
    <div id="nav">
      <router-link to="/Home">主页</router-link> |
      <router-link to="/">登陆</router-link>|
      <router-link to="/careers">还没想好名字</router-link>
      <router-link to="/vxpractice">Vue中文社区</router-link>
      <div class="nowTime">
        <p>{{dataNow|formate }}</p>
      </div>
    </div>
    <keep-alive :include="myKeep">
      <router-view v-if="$route.meta.keepAlive" />
    </keep-alive>
      <router-view v-if="!$route.meta.keepAlive" />

  </div>
</template>
<script>
export default {
  name:"App",
  data(){
    return{
      dataNow:Date.now()
    }
  },
  computed:{
    myKeep(){
      return this.$root.myKeeps
    }
  },
  filters:{
    formate(val){
      console.log(val)
      let time = Date(val);
      return time.toString()
    }
  }
}
</script>>
<style lang="scss">
*{
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
// .router-link-active{
//   color:#42b983 !important;
// }

#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    padding: 0 10px;

    &.router-link-exact-active {
      color: #42b983;
    } 
  } 
}
ul li {
  list-style: none;
}
</style>
