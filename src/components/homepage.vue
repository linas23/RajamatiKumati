<template>
    <div class="homepage" v-if="showhomepage">
        <div class="top">
        <div class="right">
            <div class="card teal ">
                <div class="card-title center">
                    Log In to <br>
                    Rajamati Kumati
                </div>
                <div class="center red-text card-content">
                    <form @submit.prevent="signup">
                        <i class="material-icons">email</i>
                        <div class="input-field inline">
                            <input id="email" type="email" class="validate">
                            <label for="email">email</label>  
                        </div>
                        <br>
                        <i class="material-icons">lock</i>
                        <div class="input-field inline">
                            <input id="password" type="password" class="validate">
                            <label for="password">password</label>
                        </div>
                        <br>
                        <!-- <i class="material-icons">person</i>
                        <div class="input-field inline">
                            <input id="text" type="text" class="validate">
                            <label for="username">username</label>
                        </div> -->
                        <div class="card-actions">
                            <button class="btn blue darken-2 black-text" @click="logmein">
                                Login
                            </button>
                        </div>
                    </form>
                    <div class="signin">
                        <p class="black-text">If you are new here, sign up here</p>
                        <div class="card-actions">
                                <router-link to="signup">
                                    <div class="btn red" @click="signuppage">
                                        Sign up
                                    </div>
                                </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        <div class="details">
            <div class="aboutus">
                <div class="bck">
                    <img src="https://steemitimages.com/DQmdFEYymLvMqJUMHmdF8zvCo2kT65pKLrC9B5wFfMUkAzX/17834159_1507946962556946_1150372019156610703_o.jpg" alt="">
                </div>
                <div class="header center white-text">
                    <h2 >
                    Welcome to Rajamati Kumati 
                    </h2>
                    <p>
                        Rajamati Kumati is the platform we intend to provide for sharing 
                        photos within the community to help promoting the cultures, jatras,
                        anything worth saving for future generations. Here, you can share 
                        information, any content related for providing the viewers the detailed
                        knowledge of the practices in our community. 
                    </p>
                     <div class="links">
                         <li v-for="(link,index) in links" :key="index">
                             <a href="link.href">
                                 <i :class="link.icon"></i>
                             </a>
                         </li>
                     </div>
                </div>
            </div>
            <div class="photos">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore saepe atque voluptatum, hic libero tempora earum aliquam ipsa quis quasi ullam, neque exercitationem vitae modi. Accusamus dolor molestiae sit ea!
            </div>
        </div>
    </div>
</template>
<script>
/* eslint-disable no-console */
export default {
    data(){
        return{
            showhomepage:true,
            email:'',
            username:'',
            // password:'',
            links:[
                {
                    icon:"fab fa-4x fa-facebook",
                    href:'',
                },
                {
                    icon:"fab fa-4x fa-twitter",
                    href:'',
                }
            ]
        }
    },
    methods:{
        signuppage(){
            this.showhomepage=false;
            // console.log('logging you up');
            this.$router.push("/signup");
        },
        logmein(){
            this.showhomepage=false;
            console.log('logging user in')
        }
    }
}
</script>
<style lang="scss">
    
    .top{
        // padding: 100px;
        width: 100%;
        height:100vh;
        background-image: url('../assets/images/IMG_20170209_123257-3.jpg');
        background-size: 50% 100% ;
        background-repeat: no-repeat;
        background-position: fixed;
        // background-position-x: 100px;
        // background-position-y: 80px;
    }
    .right{
        width: 50%;
        height: 100%;
        padding: 100px;
        margin: 0  auto;
        // background: red;
        background-image: linear-gradient(to top, #fbc2eb 0%, #a6c1ee 100%);
        .card{
            margin: 0px;
            height: 550px;
            .card-title{
                padding: 20px;
                font-size: 2.3rem;
                font-family: 'Merienda One', cursive;
            }
        }
    }

    .signin{
        margin: 30px 0px;
        p{
            font-size: 1.3rem;
        }
        .btn{
            margin: 10px 0px;

        }
    }

    .details{
        width: 100%;
        // height: 60vh;
        // background-image: linear-gradient(to top, #dfe9f3 0%, white 100%); 

        .aboutus{
            // padding: 100px;
            position: relative;
            .bck{
                width: 100%;
                height: 100vh;
                // z-index: -1;
                img{
                    width:100%;
                    height: 100%;
                    // opacity: 0.7;
                }
            }
            .header{
                transition: all 0.5s ease;

                height: 100%;
                position: absolute;
                top: 0;
                // text-align: center;
                background: rgba($color: #817575, $alpha: 0.5);
                h2{
                    padding: 20px;
                    font-size: 5rem;
                    font-family: 'Cinzel', serif;
                    font-weight: 900;
                }
                p{
                    // z-index:1;
                    font-family: 'Neuton', serif;
                    font-weight: 400;
                    font-size: 2.3rem;
                    padding: 50px;
                    text-align: center;
                }
                .links{
                    li{
                        display: inline;
                        list-style-type: none;
                        padding: 0px 50px;
                        i{
                        color: rgb(255, 255, 255);
                            // font-size: 2rem;
                        }
                        i:hover{
                            color: rgb(7, 3, 20);
                        }
                    }
                }
            }
            .header:hover{
                transition: all 0.5s ease;
                background: rgba($color: #817575, $alpha: 0.2);
            }
        }
   }


</style>