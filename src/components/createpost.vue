<template>
    <div class="createPost container">
        <div class="card center">
            <div class="card-title">
                <h3>
                Create a new post 
                </h3>
            </div>
            <div class="card-content">
                <!-- <span>Title</span>  -->
                <form @submit.prevent="createthis" >
                    <div class="btn">
                        <i class="material-icons">title</i>
                    </div>
                    <div class="input-field inline">
                        <input type="text"  placeholder="enter title" v-model="title">
                    </div>
                    <br>
                    <div class="btn">
                        <i class="material-icons">create</i>
                    </div>
                    <div class="input-field inline content">
                        <textarea name="content" v-model="content"></textarea>
                    </div>
                    <br>
                    <div class="btn">
                        <input type="file" accept="image/*">
                    </div>
                    <br>
                    <div class="center">
                        <button class="btn red" type="submit">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
/* eslint-disable no-console */
import {db} from '@/firebase/init'
import slugify from 'slugify'
import moment from 'moment'
export default {
    data(){
        return{
            title:null,
            content:null,
            slug:null,
            time:null,
        }
    },
    methods:{
        createthis(){
            console.log(this.title,this.content)
            this.slug=slugify(this.title,{
                replacement: '-',    // replace spaces with replacement
                remove: null,        // regex to remove characters
                lower: true,         // result in lower case
            });
            console.log(this.slug);
            db.collection("posts").doc(this.slug).set({
                title:this.title,
                content:this.content,
                time:moment(Date.now()).format('llll'),
            }).then(()=>{
                console.log('data sent.')
                this.$router.push({name:'profile'});
            })
        }
    }
}
</script>
<style lang="scss">
    .createPost{
         margin-top: 30px;
         .card{
             padding: 10px;
            min-height: 600px;

            .card-content{
                width: 100%;
                text-align: left;
                input[type="text"]{
                    width: 400px;
                }
                .btn{
                    margin: 10px;
                }
                .content{
                    width: 80%;
                    textarea{
                        width: 100%;
                        height: 300px;
                    }
                }
            }
         }
    }
</style>