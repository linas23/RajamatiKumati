new Vue({
    el:"#app",
    data:{
        navbarBrand:'RK.com',
        links:{
            navItems:['home','Posts','Blog','Gallery','You'],
            navlinks:['one','two','three','four']
        },
        heading:'Welcome to the RajamatiKumati.com',
        details:`This is a social platform initiated mainly to help promote
                and preserve the cultures specifically around the community.
                Here, you can share photos, videos, blogs as a contribution to us and 
                wellfare of the heritages. Let's step ahead to promote our cultures 
                internationally.`,
        subheading:'subscribe for the popular and interesting shares around the community',
        showcontact:false,
        subscribeform:true,
    },
    methods:{
        showContact(){
            console.log('it was clicked.')
            this.showcontact=true;
        },
        removepopups(){
            console.log('popups are removed.')
            this.showcontact=false;
        },
        showsubscribe(){
            this.subscribeform= false;
        }
    }
})