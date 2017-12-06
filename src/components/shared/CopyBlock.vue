<template>
  <div :id="identifier" class="content">
    <div class="content-wrapper">
      <h2 class="body__text body__text--bold">{{ sectionTitle }}</h2>
      <ul class="list">
        <li v-for="item in items" :key="item.title" class="list__item body__text">
          <p class="list__description body__text--bold">{{ item.title }} <span class="body__text list__date">{{ item.date }}</span</p>
          <p v-for="value in item.description" :key="value" class="list__description list__item__text">{{ value}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    props: [
      'identifier',
      'items',
      'sectionTitle',
    ]
  }
</script>

<style lang="scss" scoped>
  .copy-block {
    border-bottom: 1px solid #f7ba3c;
    padding: 30px 0 25px;
  }
</style>
