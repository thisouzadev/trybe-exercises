
/*
Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
- document.getElementById()
- document.getElementsByClassName()
- document.getElementsByTagName()
1. Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
2. Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
3. Crie uma função que mude a cor do quadrado vermelho para branco.
4. Crie uma função que corrija o texto da tag <h1>.
5. Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
6. Crie uma função que exiba o conteúdo de todas as tags <p> no console.
*/
//Exercício 1
function mudeTexto() {
  const FistParagraph = document.getElementsByTagName('p')[0];
  FistParagraph.innerHTML = 'como você se vê daqui a 2 anos';
}
mudeTexto();
//Exercício 2
function changeSquareToGreen() {
  const squareYellow = document.getElementsByClassName('main-content')[0];
  squareYellow.style.background = 'rgb(76,164,109)';
}
changeSquareToGreen();
//Exercício 3
function changeSquareToRed() {
  const squareRed = document.getElementsByClassName('center-content')[0];
  squareRed.style.background = 'white'
}
changeSquareToRed();

//Exercício 4
function corrigiTexto() {
  const title = document.getElementsByClassName('title')[0];
  title.innerHTML = 'Exercício 5.1 - JavaEScript.'
}
corrigiTexto();

//Exercício 5
function changeToUpperCase() {
  for (let i = 0; i < 3; i++) {
  const textUppercase = document.getElementsByTagName('p')[i]
  textUppercase.innerHTML = textUppercase.innerHTML.toUpperCase();
  }
}
changeToUpperCase();
//Exercício 6
function todasAsTags() {
  let view = document.getElementsByTagName('p');
  for (let i = 0; i < view.length; i++) {
  console.log(view[i].innerText);
  }
};
todasAsTags();








/* function changeSquareToGreen() {
  let squareYellow = document.getElementsByClassName('main-content')[0];
  squareYellow.style.background = "rgb(76,164,109)";
}
changeSquareToGreen();
//Exercício 3
function changeSquareToWhite() {
  let squareRed = document.getElementsByClassName('center-content')[0];
  squareRed.style.background = "white";
}
changeSquareToWhite();
//Exercício 4
function correctTitle() {
  let title = document.getElementsByTagName('h1')[0];
  title.innerHTML = "Exercício 5.1 - JavaScript";
}
correctTitle();
//Exercício 5
function paragraphUpperCase() {
  let paragraph = document.getElementsByTagName('p')[0];
  paragraph.innerHTML = paragraph.innerHTML.toUpperCase();
}
paragraphUpperCase();
//Exercício 6
function showParagraphs() {
  let paragraphs = document.getElementsByTagName('p');
  for (let index = 0; index < paragraphs.length; index += 1) {
    console.log(paragraphs[index].innerHTML);
  }
}
showParagraphs(); */