<template>
  <p>
     <span @click="changeTitle">{{title}}</span> 
  </p>
</template>

<script>
export default {
 name:"Maptitle",
 props:{
   title:String
 },
data(){
    return{
      
    }
},
methods:{
    changeTitle(){
      let self = this;
      self.$emit("update:title","吻如雪上霜")
        console.log(self.title)
    }
}

}
</script>

<style>

</style>