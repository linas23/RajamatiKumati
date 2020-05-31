<template>
  <v-card>
    <form enctype="multipart/form-data">
      <v-card-title>{{title}}</v-card-title>
      <v-card-text>
        <v-text-field label="Title" v-model="post.title" counter="33"></v-text-field>
        <v-text-field label="Cover title" v-model="post.covertitle" counter="111"></v-text-field>
        <v-file-input
          multiple
          v-model="file"
          ref="file"
          accept="image/*"
          @change="onFileChange"
          label="Cover image"
        ></v-file-input>
        <quill-editor ref="editor" v-model="post.description" :options="editorOption" />
        <v-combobox v-model="post.tags" small-chips multiple label="Enter tags for the post"></v-combobox>
      </v-card-text>
      <v-card-actions>
        <v-btn @click="createNew">Create</v-btn>
      </v-card-actions>
    </form>
  </v-card>
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
        covertitle: "this is a cover title",
        coverImage: null
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
  // mounted() {
  //   console.log(
  //     "App inited, the Quill instance object is:",
  //     this.$refs.editor.quill
  //   );
  //   setTimeout(() => {
  //     this.content = "I was changed!";
  //   }, 3000);
  // },
  methods: {
    onFileChange(e) {
      const file = e;
      this.coverImage = file;
    },
    createNew() {
      console.log(this.post);
      this.$store.dispatch("post/createPost", { post: this.post });
    }
  }
};
</script>

<style>
/* #editor-container {
  min-height: 375px;
} */
</style>

/* @blur="onEditorBlur($event)"
        @focus="onEditorFocus($event)"
      @ready="onEditorReady($event) 
    onEditorBlur(editor) {
      console.log("editor blur!", editor);
    },
    onEditorFocus(editor) {
      console.log("editor focus!", editor);
    },
    onEditorReady(editor) {
      console.log("editor ready!", editor);
    }, 
    */