<template>
  <div>
      <compHeader></compHeader>
      <div class="container">
          dsklfjlksdaf
      </div>
  </div>
</template>

<script>
/* eslint-disable no-console */
import compHeader from '@/components/header_footer/header'
import {db} from '@/firebase/init'
export default {
    data(){
        return{
            posts:[]
        }
    },
    components:{
        compHeader
    },
    created(){
        db.collection("posts").get().then(querySnapshot=>{
            // console.log(querySnapshot)
            querySnapshot.forEach(doc=>{
                console.log(doc.data())
                this.posts.push(doc.data());
            })
        })
    }
}
</script>

<style>
    .container{
        border: 1px solid grey;
        height: 100vh;
        padding: 10px;
    }
</style>