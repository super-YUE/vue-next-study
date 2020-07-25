'use strict'

module.exports = {
  template: `<div>
  <div v-for="i in 2000">
  <ul >
    <li>Test</li>
    <li>Test</li>
    <li>Test</li>
    <li>Test</li>
    <li>Test</li>
    <li>Test</li>
    <li v-for="j in name" >{{i}}--{{j}}</li>
  </ul>
  </div>
  </div>`,
  data(){
    return {
      name: ['py', '彭悦']
    }
  }
}