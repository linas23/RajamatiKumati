<template>
<div class="login">
    <div class="image">
            <!-- <img src="https://royalmt.com.np/blog/wp-content/uploads/sites/2/2017/05/Nava-Durga-Festival-Panauti.jpg" alt=""> -->
            <!-- <img src="https://scontent-lga3-1.cdninstagram.com/vp/36e6fd9fdaee8a20c131d3f22b83b103/5E292795/t51.2885-15/sh0.08/e35/s640x640/71324476_102695261073600_6995059177733327522_n.jpg?_nc_ht=scontent-lga3-1.cdninstagram.com&_nc_cat=100" alt=""> -->
            <!-- <img src="https://farm5.staticflickr.com/4264/35042780100_e2496c01eb_b.jpg" alt=""> -->
            <img src="https://1hu9t72zwflj44abyp2h0pfe-wpengine.netdna-ssl.com/wp-content/uploads/2018/01/Navadurga-Naach.jpg" alt="">
            <img src="https://1hu9t72zwflj44abyp2h0pfe-wpengine.netdna-ssl.com/wp-content/uploads/2018/01/Navadurga-naach4.jpg" alt="">
        </div>
     <div class="card white-text ">
                <div class="card-title center">
                     <h5>
                         Log In to    
                     </h5>
                     <h4>
                    Rajamati Kumati
                     </h4>
                </div>
                <div class="center card-content">
                    <form @submit.prevent="logmein">
                        <i class="material-icons">email</i>
                        <div class="input-field inline">
                            <input id="email" type="email" v-model="email" placeholder="enter email">
                        </div>
                        <br>
                        <i class="material-icons">lock</i>
                        <div class="input-field inline">
                            <input id="password" type="password" v-model="password" placeholder="enter password">
                        </div>
                        <p v-if="feedback" v-html="feedback"></p>
                        <div class="card-actions">
                            <button class="btn blue darken-2 black-text" type="submit">
                                Login
                            </button>
                        </div>
                    </form>
                </div>
     </div>
</div>
</template> 
<script>
/* eslint-disable no-console */
import {auth} from '@/firebase/init'
export default {
    created(){
        this.email=this.$route.params.email;
    },
    data(){
        return{
            email:'',
            password:'',
            feedback:null
        }
    },
    methods:{
        logmein(){
            console.log('loggin you in')
            auth.signInWithEmailAndPassword(this.email,this.password)
            .then(()=>{
                console.log('logged in successfully');
                this.$router.push({name:'profile'});
            })
            .catch(err=>{
                console.log(err);
                this.feedback=err;
            })
        }
    }
}
</script>

<style lang="scss">
    .login{
    // height: 100vh;
    width:100%;
    // background: red;
    padding:150px ;
    overflow: hidden;
    .image{
        position: absolute;
        // z-index: -1;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        display: flex;
        justify-content:space-between;
        img{
            height: 100%;
            max-width: 50%;
        }
    }
    .card{
        width: 400px;
        margin: 0 auto;
        background: transparent;
        border: 1px solid white;
        border-radius: 5px;
        box-shadow: 0px 0px 15px  white;
        .card-title,.btn{
            font-family: Merienda;
        }
        input{
            color: white;
        }
    }
}
</style>