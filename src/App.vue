<template>
  <div id="app">
    <h1>Aksara Latin ke Aksara Jawa (simplified)</h1>
    <textarea :value="inputText" rows="8" cols="60" @input.prevent="handleInputChange"/>
    <br />
    <textarea :value="resultText" rows="8" cols="60" disabled/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import toJavaneseScript from './methods/toJavaneseScript'

export default Vue.extend({
  name: 'App',
  data() {
    return {
      inputText: ''
    }
  },
  computed: {
    resultText(): string {
      return toJavaneseScript(this.inputText)
    }
  },
  methods: {
    handleInputChange(e: Event) {
      const { value } = e.currentTarget as HTMLInputElement;

      this.inputText = value.replaceAll('#', 'ê')
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
