document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector('form')
  form.addEventListener('submit', (e) => {
    e.preventDefault()
    handleInput(e.target[0].value)
    form.reset()
  })
});

function handleInput(task){
  const p = document.createElement('p')
  p.innerText = `${task} `
  const btn = document.createElement('button')
  btn.addEventListener('click', deleteButton)
  btn.innerText = ' X '
  p.appendChild(btn)
  document.querySelector('#list').appendChild(p)
}

function deleteButton(e) {
  e.target.parentNode.remove()
}