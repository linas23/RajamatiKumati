<template>
  <form ref="myForm" class="white pa-5" enctype="multipart/form-data">
    <v-text-field label="Title" v-model="post.title" counter="33"></v-text-field>
    <v-text-field label="Cover title" v-model="post.covertitle" counter="111"></v-text-field>
    <v-file-input accept="image/*" v-model="file" label="Cover image"></v-file-input>
    <!-- <input type="file" @change="onFileChange" /> -->
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
        description: "hello my content",
        covertitle: "this is a cover title"
      },
      file: null,
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
    createNew() {
      let formData = new FormData(this.$refs.myForm);
      formData.append("username", "Chris");
      console.log(formData);
      // formData.append("file", this.file);
      // formData.append("post", this.post);
      this.$store.dispatch("post/createPost", {
        formData
      });
    }
  }
};
</script>



