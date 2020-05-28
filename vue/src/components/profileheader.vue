<template>
    <div>
        <div  v-if="!profile[0]" class="center">
            <h2>edit profile first</h2>
        </div>

        <div class="card container profile" v-else>
            <div class="left">
                <div class="profileimg ">
                    <i class="material-icons">person</i>
                </div>
            </div>
            <div class="right">
            <div class="email">
                Email:{{profile[0].email}}
            </div>
            <div class="username">
                Username: {{profile[0].username}}
            </div>
            <div class="bio">
               Bio: {{profile[0].bio}}
            </div>
            </div>
        </div>
        
    </div>
</template>
<script>
/* eslint-disable no-console */

import {db,auth} from '@/firebase/init'
export default {
    data(){
        return{
            profile:[],
        }
    },
    created(){
        var user = auth.currentUser.uid;
        db.collection("profile").doc(user).get()
        .then(querysnapShot=>{
            this.profile.push(querysnapShot.data());
        }).catch(err=>{
            console.log(err)
        })
    }
}
</script>
