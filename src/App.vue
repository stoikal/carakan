<template>
  <div id="app">
    <textarea v-model="srcText" rows="8" cols="80"/>
    <br />
    <textarea id="result" :value="resultText" rows="8" cols="80" disabled/>
  </div>
</template>

<script>
import toJavaneseScript from './methods/toJavaneseScript'

export default {
  name: 'App',
  data() {
    return {
      srcText: ''
    }
  },
  computed: {
    resultText() {
      return toJavaneseScript(this.srcText)
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

textarea {
  font-size: 2em;
}

#result {
  font-size: 2em;
}
</style>
