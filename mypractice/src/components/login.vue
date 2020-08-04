<template>
  <div class="login_box">
      <i class="el-icon-circle-close close_icon" @click="closeNow"></i>
      <div class="login_inner">
          <div class="div_input">
              <el-input placeholder="请输入账号" v-model="username"></el-input>
          </div>
          <div class="div_input">
              <el-input placeholder="请输入密码" v-model="password" show-password></el-input>
          </div>
           <el-button type="primary" @click="login">登陆</el-button>
      </div>
  </div>
</template>

<script>
import {mapGetters, mapMutations } from 'vuex'
export default {
    name:"login",
    data(){
        return{
            show:false,
            username:"",
            password:"",
           
        }
    },
     computed:{
       ...mapGetters(['testUserInfo'])
    },
    methods:{
        ...mapMutations(["loginIn"]),
        closeNow(){
            this.$emit('closeNow',this.show)
        },
        login(){
             let userInfo = this.testUserInfo(this.username);
             if(!userInfo)return alert('用户名不存在');
             if(this.username==userInfo.account&&this.password==userInfo.password){
                 this.loginIn(userInfo);
                 this.$emit('closeNow',this.show)
             }
        }
           
    },
   
}
</script>

<style>
    .login_box{
        width: 100%;
        height: 100%;
        position: fixed;
        left: 0;
        top: 0;
        background: rgba(0, 0,0, .7);
        z-index:100;
    }
    .close_icon{
        position: absolute;
        right: 10px;
        top: 10px;
        font-size: 35px;
        color: #fff;
        cursor: pointer;
    }
    .login_inner{
        max-width: 500px;
        margin: 0 auto;
        margin-top: 100px;
    }
    .div_input{
        overflow: hidden;
    }
    .div_input div{
        margin-bottom: 30px;
    }
    .vueXscount{
        color:#fff;
        margin-bottom: 5px;
    }
</style>