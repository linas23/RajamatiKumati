<template>
  <div>
      <!-- <createpost></createpost> -->
      
      <div class="flag">
          <img :src="Nepal" alt="">
      </div>
      <div class="flag2">
          <img :src="Nepal" alt="">
      </div>
      <compHeader></compHeader>
      <!-- <createpost></createpost> -->
      <div class="createnewpost">
                <div class="btn red">
                    <router-link to="create">
                        <span class="white-text">
                         create new post
                        </span>
                    </router-link>
                </div>
        </div>
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
                    <div class="img" title="click to view full image">
                        <a href="https://assets-cdn.kathmandupost.com/uploads/source/news/2019/lifestyle/INDRA_JATRA_LAST_DAY_09282018_06A9686.jpg" data-lightbox="image" :data-title="post.title" >
                            <img src="https://assets-cdn.kathmandupost.com/uploads/source/news/2019/lifestyle/INDRA_JATRA_LAST_DAY_09282018_06A9686.jpg" alt="">
                        </a>
                        <a href="https://www.nepalitimes.com/wp-content/uploads/2019/09/69867442_477637246149366_891990808171905024_n-2.jpg" data-lightbox="image" :data-title="post.title">
                            <img src="https://www.nepalitimes.com/wp-content/uploads/2019/09/69867442_477637246149366_891990808171905024_n-2.jpg" alt="">
                        </a>
                    </div>
                    <div class="card-content">
                        <span class="time">
                            {{post.time}}
                        </span>
                        <span class="material-icons" title="like" @click="starthis"> <h5> star </h5></span><span>{{post.star}}</span>
                        <div class="content">
                            <p>
                                {{post.content}}
                            </p>
                        </div>
                        <hr>
                        <commentsection :postid="post.id"></commentsection>
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
        commentsection,
    },
    created(){
        db.collection("posts").get().then(querySnapshot=>{
            querySnapshot.forEach(doc=>{
                console.log(doc.data())
                this.posts.push(doc.data());
            })
        })
    },
    methods:{
        starthis(){
            console.log('starring it')
        }
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
        border-left: 1px solid grey;
        border-right: 1px solid grey;
        // height: 100vh;
        padding: 15px;
    }
    .post{
        cursor: pointer;
        width: 100%;
        .img{
            width: 80%;
            margin: 0 auto;
            height:100%;
            overflow: hidden;
            max-height: 500px;
            border: 1px solid blue;
            border-radius: 10px;
            img{
                width: 100%;
                cursor: pointer;
                transform: scale(1.1);
                overflow: none;
                transition: all 1s ease;
            }
            img:hover{
                transition: all 1s ease;
                transform: scale(1)
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