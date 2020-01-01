<template>
    <footer class="page-footer  ">
            <div class="header">
                Rajamati &copy;
            </div>
            <div class="links">
                    <li v-for="(link,index) in links" :key="index">
                        <a href="link.href">
                            <i :class="link.icon"></i>
                        </a>
                    </li>
            </div>
    </footer>
</template>

<script>
export default {
    data(){
        return{
            links:[
                {
                    icon:"fab fa-3x fa-facebook",
                    href:'',
                },
                {
                    icon:"fab fa-3x fa-twitter",
                    href:'',
                }
            ]
        }
    }
}
</script>

<style lang="scss">
    .page-footer{
        background: linear-gradient(to left, #bdc3c7, #2c3e50);
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: 20px 100px;
        align-items: center;
        font-family: 'Mountains of Christmas', cursive;
        .header{
            padding: 0 100px;
            font-size: 3rem;
        }
        .links{
            // padding: 100px;
            display: flex;
            li{
                list-style-type: none;
                padding: 0px 50px;
                i{
                color: rgb(24, 24, 65);
                    // font-size: 2rem;
                }
                i:hover{
                    color: rgb(7, 3, 20);
                }
            }
        }

    }
</style>