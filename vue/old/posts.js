new Vue({
    el:"#app",
    data:{
        showform:false,
        postbtn:true
    },
    methods: {
        show(){
            this.showform=true;
            this.postbtn=false
        },
        removeform(){
            this.postbtn=true;
            this.showform=false;
        }
    },
})