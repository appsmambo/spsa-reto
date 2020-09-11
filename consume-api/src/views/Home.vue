<template>
  <div class="home">
    <h1>Post obtenidos: {{posts.length}}
      <span class="button is-primary is-loading" v-if="loading">consultando...</span>
    </h1>
    <div class="row">
      <post v-for="post in posts" v-bind:key="post" :post="post"></post>
    </div>
  </div>
</template>

<script>
import Post from '@/components/Post.vue'
import axios from 'axios'

export default {
  name: 'Home',
  data() {
    return {
      search: {
        endpoint: 'https://jsonplaceholder.typicode.com/posts'
      },
      loading: false,
      posts: []
    }
  },
  components: {
    Post
  },
  mounted() {
    this.loading = true;
    axios.get(this.search.endpoint)
      .then(({
        data
      }) => {
        this.posts = data;
        this.loading = false
      })
      .catch(e => {
        console.log(e)
        this.loading = false
      })
  }
}
</script>
