<template>
    <div class="out_box" @scroll="onscroll($event)">
        <ul class="datalist">
            <li v-for="(item,index) in ddataList" :key="index">
                <p>姓名:{{item.name}}----技能:{{item.skil}}</p>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name:"vxpractice2",
    data(){
        return{
            ddataList:[
                {
                    name:"张楚岚",
                    skil:"金光咒"
                },
                {
                    name:"张楚岚",
                    skil:"金光咒"
                },
                {
                    name:"张楚岚",
                    skil:"金光咒"
                },
                {
                    name:"张楚岚",
                    skil:"金光咒"
                },{
                    name:"张楚岚",
                    skil:"金光咒"
                },
                {
                    name:"张楚岚",
                    skil:"金光咒"
                },
                {
                    name:"张楚岚",
                    skil:"金光咒"
                },{
                    name:"张楚岚",
                    skil:"金光咒"
                },{
                    name:"张楚岚",
                    skil:"金光咒"
                },{
                    name:"张楚岚",
                    skil:"金光咒"
                },{
                    name:"张楚岚",
                    skil:"金光咒"
                },{
                    name:"张楚岚",
                    skil:"金光咒"
                },{
                    name:"张楚岚",
                    skil:"金光咒"
                },{
                    name:"张楚岚",
                    skil:"金光咒"
                }
            ],
            reachBottomDistance:50,
            isReachBottom: false,
        }
    },
    methods:{
        onscroll(e){
            //可视高度   固定区域的高度
            let offsetHeight = Math.ceil(e.target.getBoundingClientRect().height);
            //滚动高度 表示滚动距离顶部的距离
            let scrollTop = e.target.scrollTop;
            //实际高度 区域内所有内容的高度
            let scrollHeight = e.target.scrollHeight;
            
            let currentHeight = offsetHeight + scrollTop + this.reachBottomDistance;

            if(currentHeight < scrollHeight && this.isReachBottom){
                this.isReachBottom = false
            }
            if(this.isReachBottom){
                return
            }
            if(currentHeight >= scrollHeight){
                this.isReachBottom = true;
                console.log("到底部了")
            }
            

        }
    }
}
</script>

<style lang="scss" scoped>
    .out_box{
        width: 80%;
        height: 400px;
        border: 1px solid red;
        overflow: auto;
    }
    .datalist{
        li{
             height: 40px;
             border-bottom: 1px solid #ccc;
             p{
                 font-size: 20px;
                 height: 100%;
                 line-height: 40px;
             }
        }
       
        
    }
</style>