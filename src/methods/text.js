import { Nglegena, Wyanjana, Swara, Sesigeg } from "./dictonary"

const initialState = Object.freeze({
  sesigeg: '',
  nglegena: '',
  wyanjana: '',
  swara: '',
})

export default class Text {
  constructor(src) {
    this.source = src
    
    this._state = { ...initialState }
    this._result = ''
  }

  _SESIGEG = Sesigeg
  _NGLEGENA = Nglegena
  _WYANJANA = Wyanjana
  _SWARA = Swara

  _clearState() {
    this._state = { ... initialState }
  }

  _trailingSyllable() {
    const { sesigeg, nglegena, wyanjana, swara } = this._state

    return Boolean(sesigeg || nglegena || wyanjana || swara)
  }

  _processSyllable() {
    const { sesigeg, nglegena, wyanjana, swara } = this._state

    this._result += (
      this._SESIGEG.get(sesigeg) + this._NGLEGENA.get(nglegena) + this._WYANJANA.get(wyanjana) + this._SWARA.get(swara)
    )

    this._clearState()
  }

  _isSpecialChar(char) {
    return /[^êéèåa-z0-9]/.test(char)
  }

  _isVowel(char) {
    return 'iueoa'.includes(char)
  }

  // check for NG NY TH DH
  _isDoubleChar(char) { 
    const { nglegena } = this._state

    return (nglegena === 'n' && 'yg'.includes(char)) || (char === 'h' && 'td'.includes(nglegena))
  }

  toJavanese() {

    for (let char of this.source.trim().toLowerCase()) {

      if (this._state.swara) this._processSyllable()

      const { nglegena } = this._state

      if (this._isVowel(char)) {
        if (!nglegena) {
          this._state.nglegena += 'h'
        }
        this._state.swara += char
      
      
      } else if (this._isSpecialChar(char)) {
        if (!this._state.swara) {
          this._state.sesigeg += this._state.nglegena
          this._state.nglegena = ''
        }
        this._processSyllable()
      } else {
        if (!nglegena) {
          this._state.nglegena += char
        } else {
          if(this._isDoubleChar(char)) {
            this._state.nglegena += char
          } else if ('yrlw'.includes(char)) {
            this._state.wyanjana += char
          } else {
            this._state.sesigeg += nglegena
            this._state.nglegena = char
          }
        }
      }
    }

    if (this._trailingSyllable()) {
      if (!this._state.swara && this._result) {
        this._state.sesigeg += this._state.nglegena
        this._state.nglegena = ''
      }
      this._processSyllable()
    }

    return this._result
  }
}