<template>
  <div>
      <div class="flag">
          <img :src="Nepal" alt="">
      </div>
      <div class="flag2">
          <img :src="Nepal" alt="">
      </div>
      <compHeader></compHeader>
      <div class="container">
        <div class="posts">
            <div class="post" v-for="post in posts" :key="post.title">
                    <div class="user">
                        <div class="material-icons">person</div>
                        {{post.email}}
                    </div>
                    <div class="card-title">
                        {{post.title}}
                    </div>
                    <div class="img">
                        <img src="https://assets-cdn.kathmandupost.com/uploads/source/news/2019/lifestyle/INDRA_JATRA_LAST_DAY_09282018_06A9686.jpg" alt="">
                        <!-- <img src="" alt=""> -->
                    </div>
                    <div class="card-content">
                        <span class="time">
                            {{post.time}}
                        </span>
                        <span class="material-icons" title="like"> <h5> star </h5></span>
                        <div class="content">
                            <p>
                                {{post.content}}
                            </p>
                        </div>
                        <hr>
                        <commentsection></commentsection>
                    </div>
                    <hr>
            </div>
        </div>
      </div>
  </div>
</template>

<script>
/* eslint-disable no-console */
import compHeader from '@/components/header_footer/header'
import commentsection from '@/components/commentsection.vue'
import Nepal from '@/assets/images/Animated-Flag-Nepal.gif';
import {db} from '@/firebase/init'
export default {
    data(){
        return{
            posts:[],
            Nepal
        }
    },
    components:{
        compHeader,
        commentsection
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

<style lang="scss" scoped>

    .flag{
        position: fixed;
        top:40%;
    }
    .flag2{
        position: fixed;
        top:40%;
        right: 0px;
        transform: rotateY(180deg);
    }

    .container{
        border: 1px solid grey;
        // height: 100vh;
        padding: 15px;
    }
    .post{
        width: 100%;
        .img{
            width: 100%;
            height: 500px;
            padding: 0px 100px;
            img{
                border: 1px solid blue;
                border-radius: 10px;
                width: 100%;
                height: 100%;
                cursor: pointer;
            }
        }
        .card-title{
            padding: 10px;
            font-size: 1.8rem;
        }
        .card-content{
            width: 100%;
            span{
                padding: 10px;
                font-size: 16px;
                h5{
                    margin: 0;
                }
                h5:hover{
                    color: red;
                }
            }
            .content{
                padding: 0px 10px;
                font-size: 1.5rem;
                font-weight: 600;
                text-align: justify;
                word-wrap: break-word;
            }
        }
    }

</style>