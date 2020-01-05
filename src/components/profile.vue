<template>
    <div>
        <compHeader></compHeader>
        <div class="card container profile">
            <div class="left">

                <div class="profileimg ">
                    <i class="material-icons">person</i>
                </div>
            </div>
            <div class="right">

            <div class="email">
                Email: desemaru77@gmail.com
            </div>
            <div class="username">
                Username: linas23
            </div>
            <div class="noofposts">
                No of posts: 23
            </div>
            </div>
        </div>
        <div class="createnewpost">
                <div class="btn red" @click="createnewpost">
                    create new post
                </div>
        </div>
        <div class="posts container">
            <div class="header">
                <h3>posts</h3>
            </div>
            <div class="post" v-for="post in posts" :key="post.title">
                <div class="card">
                    {{post.id}}
                    <div class="card-title">
                        {{post.title}}
                    </div>
                    <div class="img">
                        <img src="https://assets-cdn.kathmandupost.com/uploads/source/news/2019/lifestyle/INDRA_JATRA_LAST_DAY_09282018_06A9686.jpg" alt="">
                        <!-- <img src="" alt=""> -->
                    </div>
                    <div class="card-content">
                        
                        <div class="time">
                            {{post.time}}
                        <span class="like">
                            <div class="material-icons" title="like">star</div>
                        </span>
                        </div>
                        <div class="content">
                            <p v-html="post.content">
                                <!-- {{}} -->
                            </p>
                        </div>
                        <hr>
                        <commentsection></commentsection>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
/* eslint-disable no-console */

import {db} from '@/firebase/init'
import commentsection from '@/components/commentsection.vue'
import compHeader from '@/components/header_footer/header.vue'
export default {
    data(){
        return{
            posts:[],
            // email:auth.currentUser.email,
            username:this.$route.params.username
        }
    },
    created(){
        /* db.collection("posts").orderBy("time").get().then(querySnapshot=>{
            console.log(querySnapshot.docs);
            querySnapshot.forEach(doc=>{
                console.log(doc.id);
                console.log(doc.data())
                this.posts.push(doc.data());
            })
        })
        .then(()=>{
                console.log('document submitted');
                this.posts.reverse();
            }) */
        // console.log(auth.currentUser.email)
        db.collection("posts").orderBy("time").get()
        .then(querySnapshot=>{
            console.log(querySnapshot);
            querySnapshot.forEach(doc=>{
                this.posts.push(doc.data());
            })
        })
    },
    methods:{
        createnewpost(){
            this.$router.push({name:'create'});
        }
    },
    components:{
        compHeader,
        commentsection,
    }
}
</script>

<style lang="scss">
    .profile{
        width: 400px;
        height: 250px;
        margin: 0 auto;
        margin-top: 10vh;
        display: flex;
        flex-direction: column;
        padding: 30px;
        justify-content: space-evenly;
    }
    .createnewpost{
        text-align: center;
        // width: ;
        width: 200px;
        margin: 0 auto;
        margin-top: 10px;
    }
    .post{
        // height: 100vh;
        max-width: 100%;
        .card{
            padding: 20px;
            box-shadow: 00px 0px 15px black;
            margin:10px 0;
            .img{
                // padding: 20px;
                width: 100%;
                img{
                    width: 100%;
                    height: 100%;
                }
            }
            .card-content{
                width: 100%;
                padding: 10px;
                .time{
                    font-size: 1.3rem;
                }
                .like{
                    // font-size: px;
                    padding: 10px;
                    cursor: pointer;
                    // text-align: center;
                }
                .like:hover{
                    color: red;
                }
                .content{
                    p{
                    padding: 5px;
                    font-size: 1.5rem;
                    text-align:justify;
                    }
                }
                
            }
        }
    }
</style>