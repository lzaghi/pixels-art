localStorage.setItem('colorBlack', 'selected')


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


const botaoPixel = document.getElementsByClassName('pixel')


function colocaCor(event) {
  let elementoSelecionado = document.getElementsByClassName('color selected')[0]
  let corSelecionada = window.getComputedStyle(elementoSelecionado).backgroundColor;
  event.target.style.backgroundColor = corSelecionada
}

for (let j = 0; j < botaoPixel.length; j += 1) {
  botaoPixel[j].addEventListener('click', colocaCor)
}


const botaoLimpar = document.getElementById('clear-board');

function tudoBranco() {
  for (let i = 0; i < botaoPixel.length; i += 1) {
    botaoPixel[i].style.backgroundColor = 'white';
  }
}

botaoLimpar.addEventListener('click', tudoBranco)


const botaoVQV = document.getElementById('generate-board');
const input = document.getElementById('board-size');
const linhas = document.getElementsByClassName('linha');

function redimensionaQuadro() {
  if (input.value === '') {
    alert('Board Inválido!')
  }
  else {
    let novoTamanho = input.value;
    
    for (let i = 0; i < botaoPixel.length; i += 1) {
      botaoPixel[i].style.width = novoTamanho + 'px'
      botaoPixel[i].style.height = novoTamanho + 'px'
    }

    for (let j = 0; j < linhas.length; j += 1) {
      linhas[j].style.height = novoTamanho + 'px'
    }
    tudoBranco();
  }
}

botaoVQV.addEventListener('click', redimensionaQuadro)


function selectedBlack() {
  let classeSelected = localStorage.getItem('colorBlack');
  let paletaPreta = document.getElementsByClassName('color')[0];

  paletaPreta.classList.add(classeSelected)
}

window.onload = selectedBlack();