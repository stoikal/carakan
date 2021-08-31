<template>
  <div id="app">
    <h1>Aksara Latin ke Aksara Jawa (simplified)</h1>
    <textarea id="input-text" :value="inputText" rows="5" @input.prevent="handleInputChange"/>
    <br />
    <textarea id="output-text" :value="outputText" rows="8" disabled/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import toJavaneseScript from './methods/toJavaneseScript'

export default Vue.extend({
  name: 'App',
  data() {
    return {
      inputText: 'Sabên umat manungsa lair kanthi hak-hak kang padha'
    }
  },
  computed: {
    outputText(): string {
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
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans&display=swap');

@font-face {
    font-family: 'Noto Sans Javanese';
    src: url('./assets/NotoSansJavanese-Regular.woff2') format('woff2'),
         url('./assets/NotoSansJavanese-Regular.woff') format('woff'),
         url('./assets/NotoSansJavanese-Regular.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'Tuladha Jejeg';
    src: url('./assets/TuladhaJejeg.woff2') format('woff2'),
         url('./assets/TuladhaJejeg.woff') format('woff'),
         url('./assets/TuladhaJejeg.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;

}

* {
  box-sizing: border-box;
}

#app {
  font-family: 'Noto Sans Javanese', 'Noto Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  max-width: 1000px;
  margin: 0 auto;
}

textarea {
  width: 100%;
  max-width: 800px;
  resize: vertical;
  padding: 0.5em;
}

#input-text {
  font-size: 1.5em;
}

#output-text {
  font-family: 'Noto Sans Javanese', 'Noto Sans', 'Tuladha Jejeg', sans-serif;
  font-size: 2em;
}
</style>
