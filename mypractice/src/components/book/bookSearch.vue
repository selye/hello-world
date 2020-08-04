<template>
  <div class="search_input">
         <el-input
            placeholder="请输入内容"
            v-model="input4">
            <i slot="prefix" class="el-input__icon el-icon-search" @click="searchBoos()"></i>
        </el-input>
        <div class="search_result">
                <div class="search_result_global">
                    <ul class="search_result_global_list">
                        <li v-for="(item,index) in dataList" :key="index" class="search_result_global_item">    
                            <div class="search_result_global_bookBlock">
                                <div class="wr_bookCover search_result_global_bookCover">
                                    <img :src="item.bookInfo.cover" class="wr_bookCover_img">
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
  </div>
</template>

<script>
export default {
    name:"bookSearch",
    props:['bookName'],
    data(){
        return{
            input4:"",
            dataList:""
        }
    },
    methods:{
        searchBoos(){
            let self = this;
            self.$http.AjaxBookImg({
                keyword:self.input4,
                fragmentSize:120,
                count:20
            }).then(res=>{
                console.log(res.data.books)
                self.dataList = res.data.books
            })
        }
    }
}
</script>

<style>
    .search_input{
        margin-top: 50px;
        }
    .el-input__inner{
        height:52px;
        font-size: 16px;
        border-radius: 26px;
        }

</style>
