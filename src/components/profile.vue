<template>
    <div>
        <div class="card profile">
            <div class="profileimg">
                <i class="material-icons">person</i>
            </div>
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
        <div class="createnewpost">
                <div class="btn red">
                    create new post
                </div>
        </div>
        <div class="posts container">
            <div class="header">
                <h3>posts</h3>
            </div>
            <div class="post">
                <div class="card">
                    <div class="card-title">
                        hello woorld
                    </div>
                    <div class="img">
                        <img src="https://assets-cdn.kathmandupost.com/uploads/source/news/2019/lifestyle/INDRA_JATRA_LAST_DAY_09282018_06A9686.jpg" alt="">
                    </div>
                    <div class="card-content">
                        <div class="date">

                        </div>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, doloremque temporibus. Quos fugit expedita officiis,
                         veritatis atque in sunt! Soluta ratione dolores quod consectetur voluptate aliquid! Atque sapiente incidunt id?
                    </div>
                </div>
            </div>
            <div class="post" v-for="post in posts" :key="post.title">
                <div class="card">
                    <div class="card-title">
                        {{post.title}}
                    </div>
                    <div class="img">
                        <img src="" alt="">
                    </div>
                    <div class="card-content">
                        <div class="time">
                            {{post.time}}
                        </div>
                        <div class="content">
                            <p>
                                {{post.content}}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
/* eslint-disable no-console */

import {db} from '@/firebase/init'
export default {
    data(){
        return{
            posts:[]
        }
    },
    created(){
        db.collection("posts").get().then(querySnapshot=>{
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
            })
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
        width: 100%;
        .card{
            padding: 20px;
            box-shadow: 00px 0px 15px black;
            margin:10px 0;
            .img{
                padding: 20px;
                width: 100%;
                img{
                    width: 100%;
                    height: 100%;
                }
            }
        }
    }
</style>