<template>
  <div id='content'>
    <div id='sidebar'>
      <div>
        <div>
          <h2>Regex Search</h2>
          <div>
            <input v-model="message" placeholder="edit me">
          </div>
        </div>
      </div>
      <div>
        <div id='regextitle'>Regular Expressions</div>
        <div id='regexholder'>
          <div v-for="i in this.regex"  id="regexlist" v-on:click="indx=i">
            <small>{{i.regex}}</small>
          </div>
        </div>
      </div>
      <div id='regextitle'>Expression Summary</div>
      <div id='regexsumm'>
        Regex:
        <div class="summlines"><small>{{ indx.regex }}</small></div>
        Description:
        <div class="summlines"><small>{{ indx.description }}</small></div>
        Author:
        <div class="summlines"><small>{{ indx.firstname }} {{ indx.familyname }}</small></div>
      </div>
        <button id="connect-orcid-button" onclick="openORCID()"><img id="orcid-id-icon" src="https://orcid.org/sites/default/files/images/orcid_24x24.png" width="24" height="24" alt="ORCID iD icon"/>Register or Connect your ORCID iD</button>
    </div>
    <div id='gddresult'>
      <h2>GeoDeepDive Results</h2>
      <app-context :regex="indx"></app-context>
    </div>
  </div>
</template>


<script>
  var things = [{'regex': 'select regex', 'description': 'Describes the regular expression.', 'author': 'Expression author'}]

  import '../assets/containers.css'
  import gddcontext from './gddcontext.vue'

  export default {
    name: 'regexselect',
    data() {
      return {
        message: '',
        msg: 'Common data rendered.',
        title: things,
        site: null,
        regex: null,
        indx: null
      }
    },
    components: {
      'app-context': gddcontext
    },
    methods: {
      fetchData: function () {
        let self = this

        fetch('http://localhost:3000/regex/')
          .then((response) => { return response.json() })
          .then((data) => {
            /* Modifying the values and processing the inputs */
            self.regex = data.data
            self.indx = data.data[0]
        })
      }
    },
    mounted() {
      this.fetchData();
      var indx = this.regex[0]
    }
  }

</script>
