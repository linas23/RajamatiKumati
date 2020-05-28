<template>
    <div>
        <h2 class="center">edit your profile</h2>
        <div class="card ">
                    <form action="" @submit.prevent="updateprofile">
                        <div class="input-field">
                            <label for="username">Username</label>
                            <input type="text" v-model="profile.username">
                        </div>
                        <input type="file">
                        <div class="input-field">
                            <label for="Bio">Bio</label>
                            <input type="text" v-model="profile.bio">
                        </div>
                        <div class="input-field">
                            <label for="email">email</label>
                            <input type="email" v-model="profile.email">
                        </div>
                        <button class="btn"> 
                            update profile
                        </button>
                    </form>
        </div>
    </div>
</template>
<script>
/* eslint-disable no-console */
import {db,auth} from '@/firebase/init'
export default {
    data(){
        return{
            profile:{
                username:'',
                profileimg:'',
                bio:'',
                email:''
            },
        }
    },
    methods:{
        updateprofile(){
            var useremail = auth.currentUser.email;
            var user = auth.currentUser.uid;
            console.log('updating profile')
            db.collection("profile").doc(user).set({
                'username':this.profile.username,
                'profilemg':this.profile.profileimg,
                'bio':this.profile.bio,
                'email':useremail
            })
            .then(()=>{
                console.log('profile updated')
                    this.$router.push({name:'profile'})
            })
        }
    },
}
</script>
<style lang="scss" scoped>
    .card{
        width: 400px;
        margin: 0 auto;
        padding: 20px;
    }
</style>