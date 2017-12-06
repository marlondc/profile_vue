<template>
  <div class="banner">
    <div class="banner__content">
      <HeaderComponent title="Marlon"></HeaderComponent>
      <p class="body__text">Hello. I am a full-stack javascript developer checking out Canada.</p>
      <Skills></Skills>
      <ContentNavigator></ContentNavigator>
    </div>
  </div>
</template>

<script>
  import ContentNavigator from './ContentNavigator.vue';
  import HeaderComponent from './Header.vue';
  import Skills from './Skills.vue';

  export default {
    components: {
      ContentNavigator,
      HeaderComponent,
      Skills,
    },
  }
</script>

<style scoped>
  .banner {
    background: #f8f8f8;
    padding: 25px 15px 20px;
    width: 100%;
  }

  .banner__content {
    margin: 0 auto;
    max-width: 768px;
  }

  @media (min-width: 768px) {
    .banner {
      padding-top: 55px;
    }
  }
</style>