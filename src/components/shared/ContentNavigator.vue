<template>
  <ul class="list">
    <li class="list__item body__text">
      <a class="body__link" href="#work-section">Work</a>
    </li>
    <li class="list__item body__text">
      <a class="body__link" href="#education-section">Education</a>
    </li>
    <li class="list__item body__text">
      <a class="body__link" href="#spare-time-section">Spare Time</a>
    </li>
    <li class="list__item body__text">
      <a class="body__link" href="#projects-section">Projects</a>
    </li>
  </ul>
</template>

<script>
</script>

<style lang="scss" scoped>
  .list {
    margin: 0 0 20px;
    text-align: center
  }

  .list__item {
    border-right: 1px solid #000;
    display: inline-block;
    padding: 0 10px;
  }

  .list__item:first-of-type {
    padding-left: 0;
  }

  .list__item:last-of-type {
    border: 0;
    padding-right: 0;
  }

  .body__text {
    font-size: 14px;
  }

  @media (min-width: 375px) {
    .body__text {
      font-size: 16px;
    }
  }
</style>