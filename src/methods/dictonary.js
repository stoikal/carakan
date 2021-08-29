export const Nglegena = {
  _table: {
    h: 'ꦲ', n: 'ꦤ', c: 'ꦕ', r: 'ꦫ', k: 'ꦏ',
    d: 'ꦢ', t: 'ꦠ', s: 'ꦱ', w: 'ꦮ', l: 'ꦭ',
    p: 'ꦥ', dh: 'ꦝ', j: 'ꦗ', y: 'ꦪ', ny: 'ꦚ',
    m: 'ꦩ', g: 'ꦒ', b: 'ꦧ', th: 'ꦛ', ng: 'ꦔ',

    a: 'ꦲ'
  },

  get(n) {
    return n && this._table[n] || ''
  } 
}

export const Wyanjana = {
  _table: {
    y: ' ꦾ', r: ' ꦿ', l: ' ꧀ꦭ', w: ' ꧀ꦮ'
  },

  get(n) {
    return n && this._table[n] || ''
  } 
}

export const Swara = {
  _table: {
    i: ' ꦶ', u: ' ꦸ', e: ' ꦺ', o: ' ꦺꦴ', a: ''
  },

  get(n) {
    return n && this._table[n] || ''
  } 
}

export const Sesigeg = {
  _table: {
    ng: '', r: '', l: '', h: ''
  },

  _pangkon: ' ꧀',

  _nglegena: Nglegena,

  get(n) {
    if (n) return this._table[n] || this._nglegena.get(n) + this._pangkon
    return ''
  } 
}
