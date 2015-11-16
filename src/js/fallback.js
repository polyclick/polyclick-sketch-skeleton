'use strict'

class Fallback {
  constructor() {
    let root = document.getElementsByTagName('html')[0];
    root.className += ' showing-fallback';
  }
}

export function showFallback() {
  return new Fallback()
}
