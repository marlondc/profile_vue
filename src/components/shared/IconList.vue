<template>
  <ul class="list">
    <li class="list__item">
      <a href="http://github.com/marlondc">
        <img
          alt='github icon'
          src='../../assets/images/github.svg'
          class='icon'
        />
      </a>
    </li>
    <li class="list__item">
      <a href="http://twitter.com/marlondc">
        <img
          alt='twitter icon'
          src='../../assets/images/twitter.svg'
          class='icon'
        />
      </a>
    </li>
    <li class="list__item">
      <a href="mailto:hello@marlondc.com">
        <img
          alt='email icon'
          src='../../assets/images/email.svg'
          class='icon'
        />
      </a>
    </li>
    <li class="list__item">
      <a href="https://www.linkedin.com/in/marlon-date-chong-1179a144/">
        <img
          alt='linkedin icon'
          src='../../assets/images/linkedin.svg'
          class='icon'
        />
      </a>
    </li>
  </ul>
</template>

<style scoped>
  .list {
    display: inline-block;
    margin: 0;
  }

  .list__item {
    display: inline-block;
    margin: 0 5px;
  }

  .list__item:first-of-type {
    margin-left: 0
  }

  .list__item:last-of-type {
    margin-right: 0;
  }

  .icon:hover {
    opacity: 0.4;
  }
</style>