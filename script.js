localStorage.setItem('colorBlack', 'selected');

function criaQuadro(n) {
  const paiLinhas = document.getElementById('pixel-board');
  const quantidade = n;
  for (let index = 0; index < quantidade; index += 1) {
    const linha = document.createElement('div');
    linha.className = 'linha';

    paiLinhas.appendChild(linha);
  }
  const paiPixels = document.getElementsByClassName('linha');

  for (let jindex = 0; jindex < paiPixels.length; jindex += 1) {
    for (let p = 0; p < quantidade; p += 1) {
      const pixel = document.createElement('div');
      pixel.className = 'pixel';

      paiPixels[jindex].appendChild(pixel);
    }
  }
}
criaQuadro(5);

const botaoPaleta = document.getElementsByClassName('color');

function defineClasse(event) {
  for (let i = 0; i < botaoPaleta.length; i += 1) {
    if (botaoPaleta[i].classList.value === 'color selected') {
      botaoPaleta[i].classList.remove('selected');
    }
  }
  event.target.classList.add('selected');
}

for (let i = 0; i < botaoPaleta.length; i += 1) {
  botaoPaleta[i].addEventListener('click', defineClasse);
}

const botaoPixel = document.getElementsByClassName('pixel');

function colocaCor(event) {
  const elementoSelecionado = document.getElementsByClassName('color selected')[0];
  const corSelecionada = window.getComputedStyle(elementoSelecionado).backgroundColor;
  event.target.style.backgroundColor = corSelecionada;
}

for (let j = 0; j < botaoPixel.length; j += 1) {
  botaoPixel[j].addEventListener('click', colocaCor);
}

const botaoLimpar = document.getElementById('clear-board');

function tudoBranco() {
  for (let i = 0; i < botaoPixel.length; i += 1) {
    botaoPixel[i].style.backgroundColor = 'white';
  }
}

botaoLimpar.addEventListener('click', tudoBranco);

const botaoVQV = document.getElementById('generate-board');
const input = document.getElementById('board-size');
const linhas = document.getElementsByClassName('linha');

function redimensionaQuadro() {
  if (input.value === '') {
    alert('Board Inválido!');
  } else {
    for (let i = linhas.length - 1; i >= 0; i -= 1) {
      linhas[i].remove();
    }
    criaQuadro(input.value);
    tudoBranco();
  }

  for (let j = 0; j < botaoPixel.length; j += 1) {
    botaoPixel[j].addEventListener('click', colocaCor);
  }
}

botaoVQV.addEventListener('click', redimensionaQuadro);

function corAleatoria() {
  const caracteres = '0123456789ABCDEF';
  let color = '#';

  for (let i = 0; i < 6; i += 1) {
    color += caracteres[Math.floor(Math.random() * 16)];
  }
  return color;
}

function corAleatoriaInicial() {
  for (let i = 1; i <= 3; i += 1) {
    const color = corAleatoria();
    localStorage.setItem(`cor${i}`, color);
  }
}

function atribuiCor() {
  const paletas = document.querySelectorAll('.color');

  const cor1 = localStorage.getItem('cor1');
  paletas[1].style.backgroundColor = cor1;

  const cor2 = localStorage.getItem('cor2');
  paletas[2].style.backgroundColor = cor2;

  const cor3 = localStorage.getItem('cor3');
  paletas[3].style.backgroundColor = cor3;
}

const botaoResetar = document.getElementById('reset-pallete');

function resetaPaleta() {
  corAleatoriaInicial();
  atribuiCor();
}

botaoResetar.addEventListener('click', resetaPaleta);

function selectedBlack() {
  const classeSelected = localStorage.getItem('colorBlack');
  const paletaPreta = document.getElementsByClassName('color')[0];

  paletaPreta.classList.add(classeSelected);
}

window.onload = () => {
  selectedBlack();
  corAleatoriaInicial();
  atribuiCor();
};
