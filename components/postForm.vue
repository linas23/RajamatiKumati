<template>
  <form ref="myForm" class="white pa-5">
    <v-text-field label="Title" v-model="post.title" counter="33"></v-text-field>
    <v-text-field label="Cover title" v-model="post.coverTitle" counter="111"></v-text-field>
    <!-- <v-file-input accept="image/*" @change="onFileChange" label="Cover image"></v-file-input> -->
    <!-- <input type="file" accept="image/*" @change="handleImage" /> -->
    <quill-editor ref="editor" v-model="post.description" :options="editorOption" />
    <v-combobox v-model="post.tags" small-chips multiple label="Enter tags for the post"></v-combobox>
    <v-btn @click="createNew">Create</v-btn>
  </form>
</template>

<script>
export default {
  props: {
    title: {
      type: String
    }
  },
  data() {
    return {
      post: {
        title: "Bisket jatra",
        tags: ["bisket", "dashain"],
        description:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit ea maiores iusto aut quaerat. Aspernatur error recusandae dignissimos reprehenderit adipisci asperiores, eos, vel debitis eaque iure architecto, sint labore tenetur",
        coverTitle: "this is a cover title"
      },
      coverImage: "",
      editorOption: {
        // Some Quill options...
        theme: "snow",
        modules: {
          toolbar: [
            ["bold", "italic", "underline", "strike"],
            ["blockquote", "code-block"],
            [{ header: [1, 2, 3, 4, 5, 6, false] }],
            ["link", "image", "video"]
          ]
        }
      }
    };
  },

  methods: {
    /* handleImage(e) {
      const selectedFile = e.target.files[0];
      this.createBase64Image(selectedFile);
    },
    createBase64Image(fileObject) {
      console.log(fileObject);
      const reader = new FileReader();
      reader.onload = e => {
        this.coverImage = e.target.result;
      };
      reader.readAsBinaryString(fileObject);
      console.log(this.coverImage);
    }, */
    createNew() {
      this.$store.dispatch("post/createPost", this.post);
    }
  }
};
</script>



