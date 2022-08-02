const botaoPaleta = document.getElementsByClassName('color')

function defineClasse(event) {
  for (let i = 0; i < botaoPaleta.length; i += 1) {
    if (botaoPaleta[i].classList = 'color selected') {
      botaoPaleta[i].classList.remove('selected')
    }
  }
  event.target.classList.add('selected')
}

for (let i = 0; i < botaoPaleta.length; i += 1) {
  botaoPaleta[i].addEventListener('click', defineClasse)
}