localStorage.setItem('colorBlack', 'selected')


function criaQuadro(n) {
  const paiLinhas = document.getElementById('pixel-board');
  
  let quantidade = n

  if (n < 5) {
    quantidade = 5
  }
  else if (n > 50) {
    quantidade = 50
  }


  for(let index = 0; index < quantidade; index += 1) {
    let linha = document.createElement('div')
    linha.className = 'linha'
  
    paiLinhas.appendChild(linha);
  }
  
  const paiPixels = document.getElementsByClassName('linha');
  
  for(let jindex = 0; jindex < paiPixels.length; jindex += 1) {
    
    for(let p = 0; p < quantidade; p += 1){
      let pixel = document.createElement('div')
      pixel.className = 'pixel'
    
      paiPixels[jindex].appendChild(pixel);
    }
  }
}
criaQuadro(5)


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
    for (let i = linhas.length - 1; i >= 0 ; i -= 1){
      linhas[i].remove();
    }
    criaQuadro(input.value);
    tudoBranco();
  }
}

botaoVQV.addEventListener('click', redimensionaQuadro)


function corAleatoria1() {
  let caracteres = '0123456789ABCDEF';
  let color = '#';

    for (let i = 0; i < 6; i += 1) {
      color += caracteres[Math.floor(Math.random() * 16)];
    }
    localStorage.setItem('cor1', color);
}

function corAleatoria2() {
  let caracteres = '0123456789ABCDEF';
  let color = '#';

    for (let i = 0; i < 6; i += 1) {
      color += caracteres[Math.floor(Math.random() * 16)];
    }
    localStorage.setItem('cor2', color);
}

function corAleatoria3() {
  let caracteres = '0123456789ABCDEF';
  let color = '#';

    for (let i = 0; i < 6; i += 1) {
      color += caracteres[Math.floor(Math.random() * 16)];
    }
    localStorage.setItem('cor3', color);
}


function atribuiCor() {
  let paletas = document.querySelectorAll('.color')

  let cor1 = localStorage.getItem('cor1')
  paletas[1].style.backgroundColor = cor1

  let cor2 = localStorage.getItem('cor2')
  paletas[2].style.backgroundColor = cor2

  let cor3 = localStorage.getItem('cor3')
  paletas[3].style.backgroundColor = cor3
}


function selectedBlack() {
  let classeSelected = localStorage.getItem('colorBlack');
  let paletaPreta = document.getElementsByClassName('color')[0];

  paletaPreta.classList.add(classeSelected)
}

window.onload = function () {
  selectedBlack();
  corAleatoria1();
  corAleatoria2();
  corAleatoria3();
  atribuiCor();
}