<template>
  <section>
    <h2 class="text-primary text-left">
      {{ post.title }}
    </h2>
    <p class="text-left">
      {{post.body}}
    </p>
    <h3 class="text-info text-left">
      Comments <small>({{ comments.length }})</small>
      <a class="button is-primary is-loading" v-if="loading.comments">
        ...
      </a>
    </h3>
    <comment v-for="comment in comments" v-bind:key="comment" :comment="comment"></comment>
  </section>
</template>
<script>
  import Comment from '@/components/PostComment.vue'
  import axios from 'axios'
  export default {
    name: 'post-detail',
    props: ['postId'],
    components: {
      Comment
    },
    data() {
      return {
        post: {},
        comments: [],
        loading: {
          post: false,
          comments: false
        }
      }
    },
    mounted() {
      this.getPostDetails()
    },
    methods: {
      getPostDetails() {
        this.loading.post = true
        const endpoint = "http://jsonplaceholder.typicode.com/posts/" + this.postId
        axios.get(endpoint)
          .then(({
            data
          }) => {
            this.loading.post = false
            this.post = data
            this.getComments()
          })
          .catch(e => {
            this.loading.post = false
            console.log(e)
          })
      },
      getComments() {
        this.loading.comments = true
        const endpoint = "http://jsonplaceholder.typicode.com/posts/" + this.postId + "/comments"
        axios.get(endpoint)
          .then(({
            data
          }) => {
            this.loading.comments = false
            this.comments = data
          })
          .catch(e => {
            this.loading.comments = false
            console.log(e)
          })
      }
    }
  }

</script>
