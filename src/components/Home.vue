<template>
  <main id="main-content">
    <section aria-label="title banner">
      <Banner></Banner>
    </section>
    <section aria-label="content">
      <div class="body">
        <CopyBlock
          sectionTitle="Work"
          identifier="work-section"
          v-bind:items="
          [
            {
              title: 'Developer',
              date: 'Sep 2016 - Nov 2017',
              description: [
                'Full stack developer specialising in Javascript, Node-express backend and React/Redux frontend.',
                'Built web applications from graphics and UX/UI designs based on client requirements.',
                'Used kanban boards within scrum teams Reduced technical debt by thorough designing, use of best practices, pair programming, and practising TDD.',
              ]
            },
            {
              title: 'Optometrist',
              date: 'Jul 2013 - Apr 2016',
              description: [
                'Performed eye examinations to the public in a primary care setting',
                'Communicated effectively with both patients and healthcare professionals',
                'Worked as part of a team to provide the greatest level of care to patients.',
              ]
            },
          ]"
        ></CopyBlock>
        <CopyBlock
          sectionTitle="Education"
          identifier="education-section"
          v-bind:items="
          [
            {
              title: 'Makers Academy',
              date: 'Apr 2016 - Jul 2017',
              description: [
                'London’s leading 12 week coding Bootcamp.',
                'Technologies learnt: Ruby and Javascript.',
              ]
            },
            {
              title: 'City University London',
              date: 'Sep 2010 - Jul 2013',
              description: [
                '2:1 BSc Hons Optometry.',
                'Violinist and Double Bassist in University Orchestra.',
              ]
            },
            {
              title: 'Godalming College',
              date: 'Sep 2008 - Jul 2010',
              description: [
                'A - Maths, Chemistry and Biology A2.',
                'A - Further Maths AS.',
              ]
            },
          ]"
        ></CopyBlock>
        <SpareTime></SpareTime>
      </div>
      <TableComponent></TableComponent>
    </section>
  </main>
</template>

<script>
  import Banner from './shared/Banner.vue';
  import CopyBlock from './shared/CopyBlock.vue';
  import HeaderComponent from './shared/Header.vue';
  import SpareTime from './shared/SpareTime.vue';
  import TableComponent from './shared/Table.vue';
  
  export default {
    components: {
      Banner,
      CopyBlock,
      HeaderComponent,
      SpareTime,
      TableComponent,
    },
  }
</script>
