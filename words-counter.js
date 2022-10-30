'use strict'

let saveEl = document.getElementById('save-el')
let countEl = document.getElementById('count-el')
let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
  let countAll = count + ' - '
  saveEl.textContent += countAll
  countEl.textContent = 0
  count = 0
  console.log(count)
}




