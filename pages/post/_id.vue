<template>
  <div>
    <v-card tile height="100vh">
      <v-img
        transition
        height="100%"
        cover
        position="center center"
        class="align-center text-center"
        src="https://images.unsplash.com/photo-1586100345684-a135906ef03c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
      >
        <v-card-text class="display-1 white--text">{{post.title}}</v-card-text>
        <v-card-subtitle class="white--text">{{post.coverTitle}}</v-card-subtitle>
      </v-img>
    </v-card>
    <v-card tile>
      <v-img src="/texture_paper.svg">
        <v-container>
          <v-card-title>
            <v-row>
              <v-col cols="6">
                <v-avatar class="profile" color="grey" size="70">
                  <v-img src="https://cdn.vuetifyjs.com/images/profiles/marcus.jpg"></v-img>
                </v-avatar>
                <!-- if no photo of the user -->
                <!-- <v-avatar color="indigo">
        <v-icon dark>mdi-account-circle</v-icon>
                </v-avatar>-->

                <span class="title">Marcus Obrien</span>
              </v-col>
            </v-row>
          </v-card-title>
          <v-card-title>{{post.description}}</v-card-title>
          <!-- images  -->
          <v-img
            src="https://live.staticflickr.com/3557/3459574190_7d2ce3085e_b.jpg"
            contain
            height="300"
          ></v-img>
          <!-- description -->
          <v-card-text>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem dolore sed reprehenderit fuga, temporibus quis. Dolore eos ut deserunt quo reprehenderit, corporis itaque necessitatibus nostrum placeat quaerat et veritatis voluptatum, similique harum delectus laborum totam! Soluta temporibus velit modi, quidem odit architecto enim sapiente explicabo aliquid aspernatur consequatur blanditiis reprehenderit aut accusantium dicta maxime quos mollitia error consequuntur corrupti! Totam reprehenderit eveniet hic. Sapiente, unde illum. Exercitationem odit iusto magnam nesciunt beatae eaque qui enim odio eos, quia ea aliquam facere quo, deserunt iste ullam natus consectetur cupiditate deleniti rem officia. Eos, est eveniet, deleniti quam modi neque quae magni doloremque pariatur maiores cupiditate aspernatur magnam recusandae optio ex non officia excepturi sunt eum quaerat assumenda quas facilis ea minus. Sed aut saepe officia quis. Repudiandae magni aliquid, animi quasi beatae dolore eos voluptas ab debitis facilis, sint nostrum. Sequi animi, corporis illo dolorum natus nostrum! Suscipit velit iure obcaecati distinctio asperiores dolorum aperiam quae. Earum, ipsa porro incidunt similique, explicabo accusamus maxime tempora quisquam sequi sunt beatae itaque ea aspernatur at cupiditate quam ut ratione consequatur optio. Numquam ipsa rerum quia perspiciatis accusamus inventore dignissimos eum eos tenetur placeat hic, nostrum aspernatur animi esse aut vel nesciunt quo! Similique asperiores libero ducimus optio reprehenderit culpa sed quos sequi cumque recusandae voluptate nemo at labore reiciendis, veniam quod sit aspernatur voluptates debitis explicabo? Aliquam assumenda magni quasi ea alias quia. Qui doloremque blanditiis eum assumenda, voluptatibus voluptate, voluptates laboriosam praesentium neque nostrum architecto optio. Harum neque minima laudantium tempora. Odit quaerat saepe dolores adipisci dolor nam quidem, enim, quisquam itaque in tenetur quae. Amet nobis odio nostrum enim nihil et sapiente cum ad libero, quam minima corrupti ipsum. Laboriosam vel optio ducimus libero! Ipsa, ut harum quaerat nulla nihil repellendus alias illo, suscipit beatae, maxime neque blanditiis totam atque aliquid quasi nobis omnis. Alias doloribus repudiandae id nulla optio pariatur molestiae dignissimos perspiciatis ut dolores animi totam vitae laboriosam, iure, esse cumque minus similique earum fuga ipsa quis omnis. Soluta earum neque suscipit.</v-card-text>
        </v-container>
      </v-img>
    </v-card>
    <!-- speed dial links -->
    <speedDial></speedDial>

    <!-- scroll to top -->
    <compScroll></compScroll>

    <!-- recommended posts -->
    <v-container>
      <v-row>
        <v-col cols="12" sm="6" md="4" v-for="(post,index) in recommends" :key="index">
          <postCard :post="post"></postCard>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import speedDial from "~/components/speedDial";
import compScroll from "~/components/scrollTop";
import postCard from "~/components/postCard";
export default {
  components: {
    speedDial,
    compScroll,
    postCard
  },
  data() {
    return {
      recommends: [
        {
          id: 1,
          img:
            "https://thehimalayantimes.com/wp-content/uploads/2017/04/Sindoor-Jatra-450x320.jpg",
          text: "lorem ipsum"
        },
        {
          id: 2,
          img:
            "https://thehimalayantimes.com/wp-content/uploads/2017/04/Sindoor-Jatra-450x320.jpg",
          text: "lorem ipsum"
        },
        {
          id: 3,
          img:
            "https://thehimalayantimes.com/wp-content/uploads/2017/04/Sindoor-Jatra-450x320.jpg",
          text: "lorem ipsum"
        },
        {
          id: 3,
          img:
            "https://thehimalayantimes.com/wp-content/uploads/2017/04/Sindoor-Jatra-450x320.jpg",
          text: "lorem ipsum"
        }
      ]
    };
  },
  async asyncData(ctx) {
    let { post } = await ctx.store.dispatch("post/getPost", ctx.params.id);
    return { post };
  }
};
</script>

<style>
</style>