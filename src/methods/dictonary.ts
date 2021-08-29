interface Dictionary {
  _map: {
    [index: string]: string
  }

  get: (n: string) => string
}

interface SesigegDictionary extends Dictionary {
  _pangkon: string,
  _nglegena: Dictionary
}

export const Nglegena: Dictionary = {
  _map: {

    h: 'ꦲ', n: 'ꦤ', c: 'ꦕ', r: 'ꦫ', k: 'ꦏ',
    
    d: 'ꦢ', t: 'ꦠ', s: 'ꦱ', w: 'ꦮ', l: 'ꦭ',

    p: 'ꦥ', dh: 'ꦝ', j: 'ꦗ', y: 'ꦪ', ny: 'ꦚ',

    m: 'ꦩ', g: 'ꦒ', b: 'ꦧ', th: 'ꦛ', ng: 'ꦔ',

    a: 'ꦲ'
  },

  get(n: string) {
    return n && this._map[n] || ''
  } 
}

export const Wyanjana: Dictionary = {
  _map: {

    y: 'ꦾ', r: 'ꦿ', l: '꧀ꦭ', w: '꧀ꦮ', g: '꧀ꦒ'

  },

  get(n: string) {
    return n && this._map[n] || ''
  } 
}

export const Swara: Dictionary = {
  _map: {

    a: '', å: '',

    i: 'ꦶ', u: 'ꦸ',

    ê: '', e: '', é: 'ꦺ', è: 'ꦺ',

    o: 'ꦺꦴ', 

  },

  get(n: string) {
    return n && this._map[n] || ''
  } 
}

export const Sesigeg: SesigegDictionary = {
  _map: {

    ng: 'ꦁ', r: 'ꦂ', h: 'ꦃ'

  },

  _pangkon: '꧀',

  _nglegena: Nglegena,

  get(n: string) {
    if (n) return this._map[n] || this._nglegena.get(n) + this._pangkon
    return ''
  } 
}
