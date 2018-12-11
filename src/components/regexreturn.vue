<template>
  <div>
    <div class='regexholder'>
      <div v-for="i in this.regex"  class="regexlist">
        <small>{{i.regex}}</small>
      </div>
    </div>
  </div>
</template>

<!-- Here I need to add a router.push(xxx) if any of the items are clicked.
     this would then push the GDD rendering. -->

<script>

import '../assets/containers.css'

export default {
  name: 'regexdisplay',
  data () {
    return {
      msg: 'Common data rendered.',
      regex: null
    }
  },
  methods: {
    fetchData: function () {
      let self = this

      fetch('http://localhost:3000/regex/')
        .then((response) => { return response.json() })
        .then((data) => {
          /* Modifying the values and processing the inputs */
          self.regex = data.data

      })
    }
  },
  mounted() {
    this.fetchData();
  }
}
</script>
