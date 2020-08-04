<template>
  <div class="container">
      <div class="box1">
          <p><span>漫画名称</span><span>{{userInfo.bookName|bookFilter}}</span></p>
          <p><span>用户名</span><span>{{userInfo.name}}</span></p>
          <p><span>性别</span><span>{{userInfo.sex}}</span></p>
        <div v-if="userInfo.skil">
          <p><span>技能</span><span>{{userInfo.skil}}</span></p>
        </div>
      </div>
          <el-button type="primary" @click="addSkil">添加技能</el-button>
    <div class="box2">
        <ul>
            <li v-for="(item,index) in list" :key="index">
                <p>{{item}}</p>
            </li>
        </ul>
        <el-button type="primary" @click="addPerson">添加人物</el-button>  
    </div>  
    <div class="box2">
        <test-title :title.sync="Maptitle" ></test-title>
        <div @click="setCount">
            {{count}}
        </div>
        <div @click="personChange">
            <p>人物名称:{{heroName}}</p>
            <template v-if="heroName=='亚索'">
                <p>技能:狂风绝息斩</p>
            </template>
        </div>
        <div @click="getFilters">
            <p>过滤器方法</p>
            <p>英雄名称:{{boy|personFilter}}</p>
            <p>过滤器英雄:{{girlHero}}</p>
        </div>

    </div>
  </div>
</template>

<script>
import testTitle from "../../components/title.vue"
import {state,mutations} from "../../store/vxPrictice.js"
export default {
    name:"vxpractice",
    components:{
        testTitle
    },
    data(){
        return{
            boy:'01',
            heroName:"瑞雯",
            Maptitle:"面如霜下雪",
            userInfo:{
                bookName:"01",
                name:"张楚岚",
                sex:"男"
            },
            songWord :"天青色等烟雨而我在等你",
            list:["张三","李四"],
            demo:{
                name:""
            },
            value:"",
            girlHero:""
        }
    },
    computed:{
        count(){
            return  state.count
        }
    },
   watch:{
       heroName(newVal){
           console.log("她的羁绊:"+newVal)
       }
   },
   filters:{
       personFilter(val){
           console.log(val)
           let map = new Map();
           map.set("01","瑞雯");
           map.set("02","亚索");
           let res = map.get(val);
           console.log(res)
           return res
       }
   },
    methods:{
        getFilters(){
            let self = this;
            self.girlHero = self.$options.filters["personFilter"]('02')
            console.log(self.$options.filters.personFilter)
        },
        setCount(){
           mutations.SET_COUNT(2);
        },
        personChange(){
            let self = this;
            self.heroName = "亚索"
        },

        addSkil(){
            let self = this;
            if(self.userInfo.skil=="雷法"){
                self.$set(self.userInfo,"skil","金光咒")
            }else{
                self.$set(self.userInfo,"skil","雷法")
            }
        },
        addPerson(){
            let self = this;
            // let numLength = self.songWord.length;
            // let num = Math.floor(Math.random()*numLength);
            // let res = self.songWord.substr(num,2)
            // self.list.push(res)
            // self.list[1] = "王五"
            self.$set(self.list,3,"王五")
            console.log(self.list)
            //添加随机名字
        },
       
    }
}
</script>

<style lang="scss">
.box1{
    max-width: 80%;
    margin: 0 auto;
    p{
        display: flex;
        justify-content: space-between;
        span{
            font-size: 14px;
        }
    }
}
.box2{
    margin-top: 20px;
}
</style>