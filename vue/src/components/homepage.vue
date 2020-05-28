<template>
  <div class="homepage" v-if="showhomepage">
    <div class="top">
      <div class="right form">
        <div class="card">
          <div class="card-title center">
            Log In to
            <br />Rajamati Kumati
          </div>
          <div class="center red-text card-content">
            <form @submit.prevent="logmein">
              <i class="material-icons">email</i>
              <div class="input-field inline">
                <input id="email" type="email" v-model="email" placeholder="enter email" />
              </div>
              <br />
              <i class="material-icons">lock</i>
              <div class="input-field inline">
                <input
                  id="password"
                  type="password"
                  v-model="password"
                  placeholder="enter password"
                />
              </div>
              <p v-if="feedback" v-html="feedback"></p>
              <div class="card-actions">
                <button class="btn blue darken-2 black-text" type="submit">Login</button>
              </div>
            </form>
            <div class="signin">
              <p class="black-text">If you are new here, sign up here</p>
              <div class="card-actions">
                <router-link to="signup">
                  <div class="btn red" @click="signuppage">Sign up</div>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="details">
      <div class="aboutus">
        <div class="header center white-text">
          <h2>Welcome to Rajamati Kumati</h2>
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
      <div class="rumpum">
        <div class="row">
          <div class="left side card">
            <img :src="rumpum1" alt />
          </div>
          <div class="photos card" :style="changecard">
            <img :src="rumpum" alt @mouseenter="swap" @mouseleave="swapagain" :style="stylerumpum" />
          </div>
          <div class="right side card">
            <img :src="rumpum1r" alt />
          </div>
        </div>
      </div>
      <div class="nanu">
        <div class="container">
          <img :src="nanu" alt />
          <div class="btn-floating white pulse center" v-if="showheart" @click="heartthis">
            <span>
              <i class="far fa-5x fa-heart red-text"></i>
            </span>
          </div>
        </div>
      </div>
      <div class="video">
        <div class="header center">
          <h2>Videos</h2>
        </div>
        <div class="videos">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/EkD7tkTiacQ"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/9GakoPmWIik?start=23"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/Lj8YtvG3m8I"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/5HpPviRXayo"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>

      <featuredposts></featuredposts>

      <Footer></Footer>
    </div>
  </div>
</template>
<script>
/* eslint-disable no-console */
import { auth } from "@/firebase/init";
import heart from "@/assets/images/love-heart.jpg";
import rumpum1 from "@/assets/images/rumpum1.jpg";
import rumpum1r from "@/assets/images/rumpum1r.jpg";
import nanu from "@/assets/images/nanu.jpg";
import Footer from "@/components/header_footer/footer";
import featuredposts from "@/components/featuredposts";
// import indrajatra from 'https://www.nepalitimes.com/wp-content/uploads/2019/09/69867442_477637246149366_891990808171905024_n-2.jpg';
// import bhairab from 'http://assets-cdn.ekantipur.com/images/the-kathmandu-post/miscellaneous/15092016075754INDRA_JATRA_FESTIVAL_0009.jpg'
export default {
  components: {
    Footer,
    featuredposts
  },
  data() {
    return {
      showhomepage: true,
      email: "",
      // username:'',
      password: "",
      feedback: "",
      links: [
        {
          icon: "fab fa-4x fa-facebook",
          href: ""
        },
        {
          icon: "fab fa-4x fa-twitter",
          href: ""
        }
      ],
      rumpum: rumpum1,
      stylerumpum: {},
      changecard: {},
      rumpum1,
      rumpum1r,
      nanu,
      heart,
      showheart: true,
      videos: [
        {
          src: "https://www.youtube.com/watch?v=9GakoPmWIik"
        }
      ]
    };
  },
  methods: {
    swap() {
      setTimeout(() => {
        this.rumpum = rumpum1r;
      }, 500);
    },
    swapagain() {
      setTimeout(() => {
        this.rumpum = rumpum1;
      }, 500);
    },
    heartthis() {
      this.nanu = heart;
      this.showheart = false;
      setTimeout(() => {
        this.nanu = nanu;
        this.showheart = true;
      }, 1000);
    },
    signuppage() {
      this.showhomepage = false;
      this.$router.push("/signup");
    },
    logmein() {
      console.log("loggin you in");
      auth
        .signInWithEmailAndPassword(this.email, this.password)
        .then(() => {
          console.log("logged in successfully");
          this.$router.push({
            name: "profile",
            params: { username: this.username }
          });
        })
        .catch(err => {
          console.log(err);
          this.feedback = err;
        });
    }
  }
};
</script>
<style lang="scss">
.top {
  // padding: 100px;
  width: 100%;
  height: 100vh;
  background-image: url("../assets/images/IMG_20170209_123257-3.jpg");
  background-size: 50% 100%;
  background-repeat: no-repeat;
  background-position: fixe5;
  // background-position-x: 100px;
  // background-position-y: 80px;
}
.form {
  min-width: 50%;
  height: 100%;
  padding: 100px;
  margin: 0 auto;
  // background: red;
  background-image: linear-gradient(to top, #fbc2eb 0%, #a6c1ee 100%);
  .card {
    width: 100%;
    margin: 0px;
    height: 550px;
    box-shadow: 0px 0px 20px black;
    .card-title {
      padding: 20px;
      font-size: 2.3rem;
      font-family: "Merienda One", cursive;
    }
  }
}

.signin {
  margin: 30px 0px;
  p {
    font-size: 1.3rem;
  }
  .btn {
    margin: 10px 0px;
  }
}

.details {
  width: 100%;
  // height:200vh;
  // background-image: linear-gradient(to top, #dfe9f3 0%, white 100%);
  .aboutus {
    width: 100%;
    height: 100vh;
    background-image: url("https://steemitimages.com/DQmdFEYymLvMqJUMHmdF8zvCo2kT65pKLrC9B5wFfMUkAzX/17834159_1507946962556946_1150372019156610703_o.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    // background-attachment: fixed;
    background-blend-mode: darken;
    // overflow: visible;
    position: relative;
    .header {
      // height: 150vh;
      transition: all 0.6s ease;
      height: 100%;
      position: absolute;
      top: 0;
      // text-align: center;
      // background: rgba($color: #817575, $alpha: 0.5);
      h2 {
        padding: 20px;
        font-size: 5rem;
        font-family: "Cinzel", serif;
        font-weight: 900;
        margin-top: 30vh;
      }
      p {
        // z-index:1;
        font-family: "Neuton", serif;
        font-weight: 400;
        font-size: 2.3rem;
        padding: 50px;
        text-align: center;
      }
      .links {
        li {
          display: inline;
          list-style-type: none;
          padding: 0px 50px;
          i {
            color: rgb(255, 255, 255);
            // font-size: 2rem;
          }
          i:hover {
            color: rgb(7, 3, 20);
          }
        }
      }
    }
    .header:hover {
      transition: all 0.6s ease;
      background: black;
    }
  }
}

.rumpum {
  // height: 100vh;
  width: 100%;
  .row {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }
  .card {
    margin: 0 auto;
    width: 600px;
    padding: 50px;
    margin-top: 50px;

    img {
      height: 100%;
      width: 100%;
    }
  }
  .side {
    // padding: 10px ;
    width: 23vw;
    height: 60vh;
    padding: 20px;
    img {
      height: 100%;
      width: 100%;
    }
  }
}

.nanu {
  height: 100vh;
  position: relative;
  img {
    padding: 50px;
    width: 100%;
    max-height: 100%;
    transition: all 1s ease;
  }
  .pulse {
    position: absolute;
    bottom: 0;
    right: 20%;
    // padding: 5px;
  }
}
.video {
  height: 100vh;
  .header {
    h3 {
      margin: 0px;
    }
  }
}
.videos {
  // margin: 70px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  flex-wrap: wrap;
  iframe {
    width: 40%;
    padding: 10px;
  }
}
</style>