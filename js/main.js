const toggleList = document.getElementById('toggleList')
const listDiv = document.querySelector('.list')
const descriptionInput = document.querySelector('input.description')
const descriptionP = document.querySelector('p.description')
const descriptionButton = document.querySelector('button.description')
const listUl = listDiv.querySelector('ul')
const addItemInput = document.querySelector('input.addItemInput')
const addItemButton = document.querySelector('button.addItemButton')


function attachListItemButtons (li) {
  let remove = document.createElement('button')
  remove.className = 'remove'
  remove.textContent = 'remove'
  li.appendChild(remove)
}

listUl.addEventListener('click', (event) => {
  if (event.target.tagName == 'BUTTON') {
    if (event.target.className == 'remove') {
      let li = event.target.parentNode
      let ul = li.parentNode
      ul.removeChild(li)
    }
  }
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

descriptionButton.addEventListener('click', () => {
  descriptionP.innerHTML = descriptionInput.value
  descriptionInput.value = ''
})

addItemButton.addEventListener('click', () => {
  let ul = document.getElementsByTagName('ul')[0]
  let li = document.createElement('li')
  li.textContent = addItemInput.value
  attachListItemButtons(li)
  ul.appendChild(li)
  addItemInput.value = ''
})


