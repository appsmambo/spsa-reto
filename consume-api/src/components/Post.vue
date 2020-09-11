<template>
  <div class="col-3 mb-4">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title text-primary text-left">{{ post.title }}</h5>
        <p class="card-text text-justify">{{ post.body }}</p>
        <router-link :to="{ name: 'ver-comentarios', params: { postId: post.id}}" class="btn btn-info">
          Ver comentarios
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'Post',
    data() {
      return {}
    },
    props: ['post']
  }

</script>
