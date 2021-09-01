import { Nglegena, Wyanjana, Swara, Sesigeg } from "./dictonary"

interface State {
  sesigeg: string
  nglegena: string
  wyanjana: string
  swara: string
}

const initialState = Object.freeze({
  sesigeg: '',
  nglegena: '',
  wyanjana: '',
  swara: '',
})

export default class Text {
  source: string
  _state: State
  _result: string

  constructor(src: string) {
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

  _isSpecialChar(char: string) {
    return /[^êéèåa-z0-9'#]/.test(char)
  }

  _isVowel(char: string) {
    return [...'aåiueêéèo#'].includes(char)
  }

  // check for NG NY DH GH KH SH TH ZH DZ TS
  _isDoubleChar(char: string) { 
    const { nglegena } = this._state

    return (nglegena === 'n' && [...'yg'].includes(char)) 
      || (char === 'h' && [...'dgkstz'].includes(nglegena))
      || (nglegena === 'd' && char === 'z')
      || (nglegena === 't' && char === 's')
  }

  toJavanese() {
    for (const char of this.source.trim().toLowerCase()) {
      if (this._state.swara) this._processSyllable()


      if (this._isVowel(char)) {
        if (!this._state.nglegena) {
          this._state.nglegena += 'h'
          this._state.swara += char
        } else {
          if ([...'rl'].includes(this._state.wyanjana) && char === 'ê') {
            this._state.wyanjana += char
            this._state.swara += 'a' // 'a' is ignored
          } else if ([...'rl'].includes(this._state.nglegena) && char === 'ê') {
            this._state.nglegena += char
            this._state.swara += 'a' // 'a' is ignored
          } else {
            this._state.swara += char
          }
        }
      
      } else if (this._isSpecialChar(char)) {
        if (!this._state.swara) {
          this._state.sesigeg += this._state.nglegena
          this._state.nglegena = ''
        }
        this._processSyllable()

      } else {
        if (!this._state.nglegena) {
          this._state.nglegena += char
        } else {
          if(this._isDoubleChar(char)) {
            this._state.nglegena += char
          } else if ([...'yrlwg'].includes(char) && ![...'rh'].includes(this._state.nglegena)) {
            this._state.wyanjana += char
          } else {
            this._state.sesigeg += this._state.nglegena
            this._state.nglegena = char
          }
        }
      }
    }

    if (this._trailingSyllable()) {
      if (!this._state.swara && this._result) { // ignore if start of text
        this._state.sesigeg += this._state.nglegena
        this._state.nglegena = ''
      }
      this._processSyllable()
    }

    return this._result
  }
}