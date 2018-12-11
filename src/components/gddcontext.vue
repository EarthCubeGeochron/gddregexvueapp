<template>
  <div>
    <div id='gddbox'>
      <div v-if="sentindx.title==null">{{ sentindx.word}}</div>
      <div v-for="sen in sent" id="gddwordlist"  v-on:click="pubindx=sen">
        {{ sen.word }}
      </div>
    </div>
    <div id="pubdiv">
      <h2>Publications</h2>
      <div class='pubbox'>
        Authors. <b>{{pubindx.year}}</b>. {{pubindx.title}}.  <b>{{pubindx.volume}}</b>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'sentences',
    data () {
      return {
        msg: 'Sentences rendered',
        sentindx: {word: 'Select a regular expression to begin.'},
        sent: '',
        pubindx: ''
      }
    },
    props: {
      regex: {
        type: Object,
        required: true
      }
    },
    watch: {
      regex: function(newRegex, oldRegex) {
        let self = this
        console.log(self.regex)
        fetch('http://localhost:3000/sentences/?q=' + self.regex.rid)
          .then((response) => { return response.json() })
          .then((data) => {
            /* Modifying the values and processing the inputs */
            this.sent = data.data
            if(data.data.length == 0) {
              this.sentindx = {word: 'Regular expression has no matches in the current set of records.'}
            } else {
              this.sentindx = data.data[0]
            }
        })
      }
    }
  }
</script>
