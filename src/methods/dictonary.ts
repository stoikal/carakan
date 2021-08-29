interface Dictionary {
  _table: {
    [index: string]: string
  }

  get: (n: string) => string
}

interface SesigegDictionary extends Dictionary {
  _pangkon: string,
  _nglegena: Dictionary
}

export const Nglegena: Dictionary = {
  _table: {
    h: 'ꦲ', n: 'ꦤ', c: 'ꦕ', r: 'ꦫ', k: 'ꦏ',
    d: 'ꦢ', t: 'ꦠ', s: 'ꦱ', w: 'ꦮ', l: 'ꦭ',
    p: 'ꦥ', dh: 'ꦝ', j: 'ꦗ', y: 'ꦪ', ny: 'ꦚ',
    m: 'ꦩ', g: 'ꦒ', b: 'ꦧ', th: 'ꦛ', ng: 'ꦔ',

    a: 'ꦲ'
  },

  get(n: string) {
    return n && this._table[n] || ''
  } 
}

export const Wyanjana: Dictionary = {
  _table: {
    y: 'ꦾ', r: 'ꦿ', l: '꧀ꦭ', w: '꧀ꦮ', g: '꧀ꦒ'
  },

  get(n: string) {
    return n && this._table[n] || ''
  } 
}

export const Swara: Dictionary = {
  _table: {
    i: 'ꦶ', u: 'ꦸ', e: 'ꦺ', o: 'ꦺꦴ', a: ''
  },

  get(n: string) {
    return n && this._table[n] || ''
  } 
}

export const Sesigeg: SesigegDictionary = {
  _table: {
    ng: 'ꦁ', r: 'ꦂ', h: 'ꦃ'
  },

  _pangkon: '꧀',

  _nglegena: Nglegena,

  get(n: string) {
    if (n) return this._table[n] || this._nglegena.get(n) + this._pangkon
    return ''
  } 
}
