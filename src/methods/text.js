import { Nglegena, Wyanjana, Swara, Sesigeg } from "./dictonary"

const initialState = Object.freeze({
  nglegena: '',
  wyanjana: '',
  swara: '',
  sesigeg: ''
})

export default class Text {
  constructor(src) {
    this.source = src
    
    this._currentState = { ...initialState }
    this._result = ''
  }

  NGLEGENA = Nglegena
  WYANJANA = Wyanjana
  SWARA = Swara
  SESIGEG = Sesigeg

  processSyllable() {
    const { nglegena, swara } = this._currentState

    this._result += (
      this.NGLEGENA.get(nglegena) + this.SWARA.get(swara)
    )
    console.log('nglegena', nglegena, this.NGLEGENA.get(nglegena))
    this._currentState = { ...initialState }
  }

  isPunctuations(char) {
    return /[^a-zA-Z\d\s:]/.test(char)
  }

  isSwara(char) {
    return 'iueoa'.indexOf(char) > -1
  }

  toJavanese() {
    console.log('source', this.source)
    for (let char of this.source.toLowerCase()) {

      this._currentState.nglegena += char
      

      this.processSyllable()
    }

    return this._result
  }
}