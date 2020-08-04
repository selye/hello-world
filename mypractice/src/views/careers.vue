<template>
  <div class="out_box">
      <div>
          <el-input v-focus v-model="input" placeholder="请输入内容" ></el-input>
          <!-- <input type="text" v-focus v-model="input"> -->
          <p>我是过滤器:{{searchInfo|searchFilter}}</p>
          <el-button type="primary" @click="deepAlive">清空缓存</el-button>
      </div>
      <div class="app">
          <div ref = "msgDiv">{{msg}}</div>
          <div v-if="msg1">Message to get outside $nextTick {{msg1}}</div>
          <div v-if="msg2">Message to get outside $nextTick {{msg2}}</div>
          <div v-if="msg3">Message to get outside $nextTick {{msg3}}</div>
          <el-button type="primary" @click="changeMsg">changeMessage</el-button>
      </div>
      <div v-if="myCount>1">
          <p>我是Store控制管理的</p>
      </div>
  </div> 
</template>

<script>
// import numberMath from "@/components/title.vue";
    import {state} from "../store/vxPrictice.js"

export default {
 name:"careers",
 data(){
     return{
         testInfo:{
             name:"qusj",
             number:100
         },
         searchInfo:"双枪,李向阳",
         radio:"",
         testName:"张三",
         testAge:"23",
         input:'',
         msg:"hello before",
         msg1:"",
         msg2:"",
         msg3:"",
     }
 },

 filters:{
     searchFilter(val){
         if(!val) return '';
         if(val.indexOf(',')>-1){
              return val.replace(/,/g,"")
         }
     }
 },
 methods:{
    changeMsg(){
        let self = this;
        self.msg = "hello After"
        self.msg1 = self.$refs.msgDiv.innerHTML
        self.$nextTick(()=>{
            self.msg2 = self.$refs.msgDiv.innerHTML
        })
        self.msg3 = self.$refs.msgDiv.innerHTML
    },
     deepAlive(){
         let self = this;
         let djIndex = self.$root.myKeeps.indexOf("About")
         self.$root.myKeeps.splice(djIndex,1)
     },
     radioCheck(){
         let self = this;
         console.log(self.radio)
     }
 },
 computed:{
     myCount(){
         return state.count
     }
 }

}
</script>

<style>
    .out_box{
        width: 800px;
        margin:0 auto
    }
    .radio_box{
        margin-top: 10px;
    }
    .app{
        margin-top: 15px;
    }
</style>