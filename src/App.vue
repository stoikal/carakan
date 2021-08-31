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
@font-face {
  font-family: "NotoSansJavanese";
  src: url("./assets/NotoSansJavanese-Regular.ttf");
}

@font-face {
  font-family: "TuladhaJejeg";
  src: url("./assets/TuladhaJejeg_gr.ttf");
}

* {
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  max-width: 1000px;
  margin: 0 auto;
}

textarea {
  font-size: 2em;
  width: 100%;
  max-width: 800px;
  resize: vertical;
}

#input-text {
  font-size: 1.5em;
}

#output-text {
  font-family: TuladhaJejeg, sans-serif;
}
</style>
