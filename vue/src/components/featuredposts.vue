<template>
  <div class="featuredposts ">
          <div class="posts">
              <div class="card" v-for="(post,index) in featuredposts" :key="index">
                      <div class="card-title">
                          <!-- hello world -->
                          {{post.title}}
                      </div>
                      <div class="img">
                          <img src="@/assets/images/love-heart.jpg" alt="">
                      </div>
                      <div class="card-content">
                        <div class="user">
                            <div class="material-icons">person</div>
                            <span>{{post.email}}</span>
                            <div>
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
            email:null,
            featuredposts:[],
        }
    },
    created(){
        db.collection("posts").limit(6).get()
        .then(querySnapshot=>{
            querySnapshot.forEach(doc=>{
                console.log(doc.data());
                this.featuredposts.push(doc.data());
            })
            
        })
    }
}
</script>

<style style="scss" scoped>
    .featuredposts{
        /* padding: 10px; */
        height: 150vh;
    }
    .posts{
        /* padding: 20px; */
        height: 90%;
        display: flex;
        flex-direction: row;
        /* align-items: center; */
        justify-content: space-evenly;
        flex-wrap: wrap;
    }
    .card{
        width: 400px;
        height:50%;
        margin:20px;
        overflow: hidden;
    }
    .img{
        padding: 20px;
        width: 100%;
    }
    .img img{
        width: 100%;
        }
</style>