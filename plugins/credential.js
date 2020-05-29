export default function ({ $axios }) {
    $axios.setBaseURL(process.env.BASE_URL)
}
// // Change URL only for client
// if (process.client) {
//     this.$axios.setBaseURL('http://api.example.com')
//   }

//   // Change URL only for server
//   if (process.server) {
//     this.$axios.setBaseURL('http://api.example.com')
//   }