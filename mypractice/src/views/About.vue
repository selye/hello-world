<template>
  <div class="head_top">
    <login v-if="loginShow" @closeNow="closeNow"></login>
    <div class="head">
      <div>VUEX</div>
      <div>
        <el-button type="primary" @click.native="loginShow = true">登陆</el-button>
        <el-button type="primary" @click.native="goOut">注销</el-button>
      </div>
    </div>
    <div class="loginInfo" >
      <div class="head_img">
        <div class="userHeadImg">
          <img :src="userHeadImg" alt="headimg" >
        </div>
        <p>{{userNick}}</p>
        <p>当前状态：{{ islogin === 1?'已登录':'未登陆'}}</p>
      </div>
    </div>

    <div class="search_banner" v-show="checkLogin">
      <div class="search_logo">
        <img alt="Vue logo" src="../assets/logo.png" />
        热门书籍
        <p>作者:{{username}}</p>
      </div>
      <book-search></book-search>
    </div>
    
</div>
</template>

<script>
import bookSearch from "@/components/book/bookSearch.vue";
import login from "@/components/login.vue";
import { mapState,mapMutations } from "vuex";
export default {
  components: {
    bookSearch,
    login
  },
  name: "About",
  data() {
    return {
      radio:'radioCheck',
      username: "shijie",
      checkLogin: false,
      buttonShow:false,
      loginShow: false,
      nodeIndex:null,
      dataInfo:{},
     
    };
  },
   computed: {
    ...mapState(["islogin",'userHeadImg','userNick','isLoginShow']),

  },
  watch:{
    $route(){
      if(this.$route.query.goLogin==true){
        this.loginShow = true
      }
    }
  },
  methods: {
    ...mapMutations(["cancellation"]),
    goOut(){
      if(this.islogin==1){
       this.cancellation()
        //已登陆
      }
    },
    closeNow(data) {
      this.loginShow = data;
      this.$router.push({
        path:"/"
      })
    },
    getIndex(index,item){
      let self = this;
      if(self.radio == index){
        self.radio = "";
        console.log("未选中:"+self.radio)
      }else{
        self.checkData = item;
        self.radio = index;
        console.log("选中了:"+self.radio)
      }
        // console.log(self.checkData)
    },
   
  },
  created(){
    if(this.$root.myKeeps.indexOf('About')<0){
      console.log(this.$root.myKeeps.indexOf('About'))
          this.$root.myKeeps.push('About')
        }
  },
  activated(){
    console.log("ok")
  },
  mounted(){
     let myArr = [
       {id:"19931124",name:"Vue"},
       {id:"19941124",name:"React"},
       {id:"19951124",name:"Angular"},
     ];
     let myId = "19941124";
     let myResult = "";
      let myIndex = myArr.findIndex(info=>info.id === myId);
      myIndex == -1 ? myResult = "没有值" : myResult = myArr[myIndex].name;
      console.log(myResult)
   

  },
 
};
</script>



<style>
@import "../assets/css/app.css";
@import "../assets/css/login.css";
.dataInfo{
    display: flex;
    align-items: center;
    justify-content: space-between;
     width: 250px;
    padding: 0 10px;
    margin: 10px auto;
    cursor: pointer;
}
.dataInfo p {
    text-align: left;
}
.dataRight{
    width: calc(100% - 40px);
}
.circle{
    width: 15px;
    border: 1px solid #26a2ff;
    height: 15px;
    border-radius: 40px;
    position: relative;
}
.ischecked{background: #fff;}
.ischecked:after{
    position: absolute;
    top: 50%;
    margin-top: -2px;
    left: 1px;
    width: 10.5px;
    height: 5.5px;
    border: 2px solid #26a2ff;
    border-bottom-width: 0px;
    border-left-width: 0px;
    content:"";
    transform:translateY(-50%) rotate(135deg)
}
.el-radio__label{display: none;}
</style>
