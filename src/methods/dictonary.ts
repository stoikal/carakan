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
    // missing: ha, dha, tha, sya,

    b: 'ꦧ', 
    
    c: 'ꦕ', 
    
    d: 'ꦢ', dh: 'ꦝ', dz: 'ꦢ꦳',
    
    f: 'ꦥ꦳', 
    
    g: 'ꦒ', gh: 'ꦒ꦳', 
    
    h: 'ꦲ',
    
    j: 'ꦗ', 
    
    k: 'ꦏ', kh: 'ꦏ꦳',

    l: 'ꦭ', lê: 'ꦊ',
    
    m: 'ꦩ',
    
    n: 'ꦤ', ng: 'ꦔ', ny: 'ꦚ', ŋ: 'ꦔ',
    
    p: 'ꦥ', 

    q: 'ꦐ',
    
    r: 'ꦫ', rê: 'ꦉ',
    
    s: 'ꦱ', sh: 'ꦰ꦳',
    
    t: 'ꦠ', th: 'ꦛ', ts: 'ꦱ꦳',
    
    v: 'ꦮ꦳',
    
    w: 'ꦮ',
    
    x: 'ꦑ꦳',
    
    y: 'ꦪ',

    z: 'ꦗ꦳', zh: 'ꦝ ꦳',

    a: 'ꦲ',

    "'": 'ꦔ꦳' // 'ain
  },

  get(n: string) {
    return n && this._map[n] || ''
  } 
}

export const Wyanjana: Dictionary = {
  _map: {

    y: 'ꦾ', r: 'ꦿ', l: '꧀ꦭ', w: '꧀ꦮ', g: '꧀ꦒ', rê: 'ꦽ', lê: '꧀ꦊ'

  },

  get(n: string) {
    return n && this._map[n] || ''
  } 
}

export const Swara: Dictionary = {
  _map: {

    a: '', å: '',

    i: 'ꦶ', u: 'ꦸ',

    ê: 'ꦼ', e: 'ꦺ', é: 'ꦺ', è: 'ꦺ',

    o: 'ꦺꦴ', 

  },

  get(n: string) {
    if (n === '#') n = 'ê'
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
