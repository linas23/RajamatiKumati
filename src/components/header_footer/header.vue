<template>
    <nav class="header" >
        <div class="nav-wrapper ">
            <div class=" brand-logo left">
                RajamatiKumati
            </div>
            <div >
                <ul id="nav-mobile" class="right hide-on-med-and-down" >
                    <li v-for="(navlink,index) in navlinks" :key="index">
                        <router-link :to="navlink.linkTo">{{navlink.name}}</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>
<script>
export default {
    data(){
        return{
            navlinks:[
                {
                    name:'profile',
                    linkTo:'profile',
                },
                {
                    name:'posts',
                    linkTo:'posts'
                },
                {
                    name:'search',
                    linkTo:'search'
                }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
    nav{
        font-family: 'Mountains of Christmas', cursive;
        width:100%;
        background: linear-gradient(to right, #c31432, #240b36);
        position: sticky;
        top: 0;
        z-index: 1;
        .left{
            font-weight: 900;
            padding: 0 100px;
            font-size: 2.8rem;
            letter-spacing: 0.3em;
        }

        ul{
            padding: 0 100px;
            li{
                padding: 0 20px;
                a{
                font-size: 2rem;
                }
            }
        }
    }
    
</style>