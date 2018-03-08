<template>
  <div id="spare-time-section" class="content">
    <div class="content-wrapper">
      <h2 class="body__text body__text--bold">{{ mainTitle }}</h2>
      <ul class="list">
        <li class="list__item body__text">
          <p class="list__description body__text--bold"><a href="www.codefirstgirls.org.uk" class="body__link">Code First: Girls</a> - Feb 2017 - Apr 2017</p>
          <p class="list__description">
            Instructor on the ruby course at Manchester University
          </p>
          <p class="list__description">
            Course included intro to the ruby language and used Sinatra framework
          </p>
        </li>
        <li class="list__item body__text">
          <p class="list__description body__text--bold">Hackathon</p>
          <p class="list__description">
            Joint 1<sup>st</sup> place Manchester City Football Hackathon
          </p>
          <p class="list__description">
            Finalist for mediaburst challenge at Hack Manchester
          </p>
        </li>
        <li class="list__item body__text">
          <p class="list__description body__text--bold">Sports</p>
          <p class="list__description">
            3x Marathon finisher
          </p>
          <p class="list__description">
            Manchester United Fan
          </p>
          <p class="list__description">
            Football participator
          </p>
        </li>
        <li class="list__item body__text">
          <p class="list__description body__text--bold">Music</p>
          <p class="list__description">
            Grade 8 Pianist and Violinist
          </p>
          <p class="list__description">
            Grade 6 Double Bassist
          </p>
          <p class="list__description">
            Current Tune on repeat: Something Soon (Car Seat Headrest)
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        mainTitle: 'Spare Time',
      }
    }
  }
</script>
