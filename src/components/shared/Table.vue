<template>
  <div id="projects-section" class="content">
    <div class="content-wrapper">
      <h2 class="body__text body__text--bold"><strong>Projects</strong></h2>
      <table>
        <tr>
          <th>Name</th>
          <th>Description</th>
          <th>Tech Used</th>
        </tr>
        <tr>
          <td>
            <a
              href="http://www.bbc.co.uk/programmes/p00rfvk1"
              class="body__link"
            >
              <i>500 Words Competiton</i>
            </a>
          </td>
          <td>BBC Radio 2 story writing competition for children aged 5-13</td>
          <td>php Laravel, Angular, JQuery, gulp, MySQL, phpunit, codeception</td>
        </tr>
        <tr>
          <td>Jisc Internal Applications</td>
          <td>Interfaces for use by Jisc Customers</td>
          <td>Node, express, react, redux, jest, mongo, D3, webpack</td>
        </tr>
        <tr>
          <td>
            <a
              href="https://careers.autotrader.co.uk"
              class="body__link"
            >
              <i>AutoTrader Careers Website</i>
            </a>
          </td>
          <td>New careers website for AutoTrader</td>
          <td>react, redux, flow, jest, D3, webpack</td>
        </tr>
        <tr>
          <td>Spotify Jukebox</td>
          <td>Shared Jukebox using Spotify</td>
          <td>express, react, redux, socket.io, Spotify web API</td>
        </tr>
        <tr>
          <td>Profile Site</td>
          <td>Personal website</td>
          <td>express, vue</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<style scoped>
  .content {
    padding: 0 0 50px 0;
    margin-bottom: 90px;
  }

  h2.body__text.body__text--bold {
    padding: 0 15px;
  }
  
  table, th, td {
    border: 2px solid #000;
    border-collapse: collapse;
  }

  table {
    color: #000;
    margin-top: 16px;
    width: 100%;
  }

  th {
    font-family: 'Signika', Helvetica, sans-serif;
    font-weight: 400;
    padding: 10px;
    text-align: left;
  }

  td {
    font-family: 'Signika', Helvetica, sans-serif;
    font-weight: 300;
    padding: 10px;
  }

  @media (min-width: 375px) {
    .content {
      padding: 0 15px 50px;
    }

    h2.body__text.body__text--bold {
      padding: 0;
    }

    table, th, td {
      border: 3px solid #000;
    }
  }
</style>