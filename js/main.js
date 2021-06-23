const toggleList = document.getElementById('toggleList')
const listDiv = document.querySelector('.list')
const addItemInput = document.querySelector('input.addItemInput')
const addItemButton = document.querySelector('button.addItemButton')

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
  let li = document.createElement('li')
  li.textContent = addItemInput.value
})

