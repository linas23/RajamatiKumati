<template>
  <div>
      <div class="container">
      <h5>
          Add comments
      </h5>
          <form @submit.prevent="addcomment">
          <div class="input_field">
              <label for="comment"  ></label>
              <input type="text" v-model="comment" placeholder="enter new comment">
          </div>
              <button class="btn" type="submit">
                    post   
              </button>
          </form>
      </div>
      <div v-if="commentsuccess" class="center">
          <div class="red-text">your comment was posted.</div>
      </div>
      <div class="container comment"> 
          <div v-if="comments.length">
                <h4>Earlier comments</h4>  
          </div>
          <div v-else>
              <h4>No comments yet</h4>
          </div>
          <div >
            <div class="card" v-for="(comment,index) in comments" :key="index">
              <div class="card-title">
                <div class="material-icons person">person</div>
                <span class="email">{{comment.email}}</span><br>
                <span class="time">{{comment.time}}</span>
              </div>
              <div class="card-content">
                    <p>
                        {{comment.comment}}
                    </p>
                  <!-- <div class="btn"> -->
                      <!-- <div class="material-icons">reply</div><span>reply</span> -->
                  <!-- </div> -->
                  <div class="btn" @click="starthis">
                      <div class="material-icons">star</div><span>{{comment.like}}</span>
                  </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
/* eslint-disable no-console */
import {db,auth} from '@/firebase/init'
import moment from 'moment'
export default {
    data(){
        return{
            comment:'',
            user:auth.currentUser.uid,
            // email:auth.currentUser.email,
            comments:[],
            commentsuccess:false
        }
    },
    methods:{
        addcomment(){
            console.log('adding comment')
            // console.log(this.comment)
            // console.log(this.user)
            db.collection("comments").add({
                'comment':this.comment,
                'id':this.user,
                'email':auth.currentUser.email,
                'like':0,
                'time':moment(Date.now()).format('llll')
            }).then(()=>{
                this.comment=null;
                this.commentsuccess=true;
                setTimeout(()=>{
                    this.commentsuccess=false;
                },3000)
            })
        },
        starthis(){
            console.log('starring it')
            // this.comment.like +=1;
        }
    },
    created(){
        db.collection("comments").get().then((querySnapshot)=>{
                // console.log(querySnapshot)
                querySnapshot.forEach(doc=>{
                    // console.log(doc.data())
                    this.comments.push(doc.data())
                })
        })
    }
}
</script>

<style lang="scss">
    .container{
        .comment{
        margin-top: 30px;
            height: 60vh;
            overflow: auto;
            .card{
                padding: 10px;
                margin: 15px;
                .card-title{
                    padding: 0px;
                }
                .person{
                    // font-size: 23px;
                    padding: 10px;
                }
                .email{
                    // text-transform: uppercase;
                    padding: 5px;
                }
                .btn{
                    margin: 10px 20px;
                }
                .card-content{
                    padding:0px;
                    p{
                        padding: 5px 20px;
                    }
                }
            }
        }
    }
</style>