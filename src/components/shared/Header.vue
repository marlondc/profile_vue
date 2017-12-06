<template>
  <div class="header">
    <h1 class="header__title">
      {{title}}
    </h1>
    <div class="icons">
      <IconList></IconList>
    </div>
  </div>
</template>

<script>
  import IconList from './IconList.vue';
  export default {
    components: {
      IconList,
    },
    props: ['title'],
  }
</script>

<style scoped>
  .header__title {
    color: #000;
    display: inline-block;
    font-family: 'Enriqueta', Helvetica, serif;
    font-size: 60px;
    margin: 0 20px 0 0 ;
  }

  .icons {
    display: inline-block;
  }
</style>