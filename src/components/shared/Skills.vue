<template>
  <div>
    <h2 class="body__text body__text--bold">
      {{ title }}
    </h2>
    <div>
      <ul class="list">
        <li v-for="skill in skills" :key="skill.title" class="skill">
          <h4 class="body__text body__text--bold">{{ skill.title }}</h4>
          <ul class="list">
            <li v-for="detail in skill.details" :key="detail" class="list__item">
              <p class="body__text">{{ detail }}</p>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        title: 'Skills',
        skills: [
          {
            title: 'Comfortable Tech Stack',
            details: [
              'React', 'Redux', 'Node', 'Express', 'Mongo', 'ES6', 'Jest', 'Webpack', 'ESLint', 'Github'
            ]
          },
          {
            title: 'Fast Learner, always learning',
            details: [
              'Ready and willing to try the next big thing. Started my journey into developing with ruby, ruby on rails, relational databases, OOP and MVC patterns, saw how php does it with Laravel. I then took a hard right to decoupled front and back end systems with javascript, node, non-relational databases, react, redux and FP patterns.'
            ]
          },
          {
            title: 'Passionate',
            details: [
              'I really enjoy what I do. There is a great sense of accomplishment and enjoyment when finishing a product, but it is the sense of magic I get when a change gets rendered that keeps me coming back. That feeling of joy when you find the bug causing the issue. That feeling of teamwork when you get a design from the design team and complete it into a web application. As sad as it sounds, this is what I do in my spare time.'
            ]
          }
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
  ul, p, h3, h4 {
    margin: 0;
  }

  .list__item {
    display: inline-block;
    margin-right: 10px;
  }

  .skill {
    padding-top: 15px;
  }

  .skill:last-of-type {
    padding-bottom: 50px;
  }
</style>