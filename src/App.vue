<template>
  <div class="mainpage">
    <app-headername></app-headername>
    <app-mainapp></app-mainapp>
  </div>
</template>

<script>
  import mainapp from './components/mainapp.vue'
  import appheadername from './components/appheader.vue'
  import './assets/containers.css'
  import './assets/text.css';
  import './assets/orcid.css';

export default {
  name: 'app',
  components: {
    'app-mainapp': mainapp,
    'app-headername': appheadername,

  }
}

var oauthWindow;

function openORCID() {
    var oauthWindow = window.open("https://sandbox.orcid.org/oauth/authorize?client_id=[YOUR CLIENT ID]response_type=code&scope=/authenticate&show_login=false&redirect_uri=https://yourwebsite.edu/RedirectURI", "_blank", "toolbar=no, scrollbars=yes, width=500, height=600, top=500, left=500");
}

</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
