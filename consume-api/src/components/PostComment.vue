<template>
  <article class="bg-secondary p-2 mb-2 text-white text-left">
    <p>
      {{ comment.email }} said...<br>
      {{ comment.body }}
    </p>
  </article>
</template>
<script>
  export default {
      name: 'post-comment',
      props: ['comment'],
      data() {
          return {}
      }
  }

</script>
