<template>
  <div>
    <div class='regexsumm'>
      <div class='regextitle'><strong>{{ title[0].title }}</strong></div>
      <div>{{ title[0].regex }}</div>
      <div>{{ title[0].description }}</div>
      <div>{{ title[0].author }}</div>
    </div>
  </div>
</template>

<script>

var things = [{'title': 'Regex One', 'regex': '[[abc]]', 'description': 'Whatever it does.', 'author': 'Simon Goring'}]

import '../assets/containers.css'

export default {
  name: 'regexselect',
  data () {
    return {
      msg: 'Common data rendered.',
      title: things,
      site: null
    }
  },
}
</script>
