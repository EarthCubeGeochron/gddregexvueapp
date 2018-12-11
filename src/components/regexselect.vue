<template>
  <div>
    <h2>Regex Search</h2>
    <div>
      <input v-model="message" placeholder="edit me">
    </div>
  </div>
</template>

<script>

export default {
  name: 'regexselect',
  data() {
    return {
      message: null
    }
  },
  props: {
    msg: String
  }
}
</script>
