'use strict'

import $ from 'jquery'

export class Info {
  constructor() {
    this.$info = $('.info')
    this.$trigger = this.$info.find('button.trigger')
    this.$sidebar = this.$info.find('section.sidebar')

    this.init()
  }

  init() {
    this.$trigger.click((event) => {
      event.preventDefault()
      this.open()
    })

    this.$sidebar.click((event) => {
      this.close()
    }).find('a').click(function(event) {
      event.stopPropagation()
    })
  }

  open() {
    this.$info.addClass('opened')
  }

  close() {
    this.$info.removeClass('opened')
  }
}

export function info() {
  return new Info()
}
