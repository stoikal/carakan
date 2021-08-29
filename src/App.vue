<template>
  <div id="app">
    <textarea v-model="srcText" rows="8" cols="60"/>
    <br />
    <textarea id="result" :value="resultText" rows="8" cols="60" disabled/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import toJavaneseScript from './methods/toJavaneseScript'

export default Vue.extend({
  name: 'App',
  data() {
    return {
      srcText: ''
    }
  },
  computed: {
    resultText(): string {
      return toJavaneseScript(this.srcText)
    }
  }
})
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
</style>
