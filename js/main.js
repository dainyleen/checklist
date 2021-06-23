const toggleList = document.getElementById('toggleList')
const listDiv = document.querySelector('.list')
const listUl = listDiv.querySelector('ul')
const addItemInput = document.querySelector('input.addItemInput')
const addItemButton = document.querySelector('button.addItemButton')
const deleteItemButton = document.querySelector('button.deleteItemButton')

listUl.addEventListener('click', (event) => {
  if (event.target.tagName == 'BUTTON')
    let li = event.target.parentNode
    let ul = li.parentNode
    ul.removeChild(li)
})

toggleList.addEventListener('click', () => {
  if (listDiv.style.display == 'none') {
    toggleList.textContent = 'HIDE LIST'
    listDiv.style.display = 'block'
  } else {
    toggleList.textContent = 'SHOW LIST'
    listDiv.style.display = 'none'
  }
})

addItemButton.addEventListener('click', () => {
  let ul = document.getElementsByTagName('ul')[0]
  let li = document.createElement('li')
  li.textContent = addItemInput.value
  ul.appendChild(li)
  addItemInput.value = ''
})

deleteItemButton.addEventListener('click', () => {
  let ul = document.getElementsByTagName('ul')[0]
  let li = document.querySelector('li:last-child')
  ul.removeChild(li)
})


