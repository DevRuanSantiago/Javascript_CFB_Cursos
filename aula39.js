const caixa1 = document.querySelector("#caixa1");
const colecaoCurs = [...document.querySelectorAll(".curso")];
const c1_2 = document.querySelector(".c1_2");

c1_2.parentNode.parentNode.children[5].innerHTML = "abacate"; // substitui o conteúdo da div.c1_1

console.log(caixa1.hasChildNodes());
console.log(caixa1.children.length > 0 ? "POSSUI FILHOS" : "NÃO POSSUI FILHOS");

caixa1.children[1].innerHTML = "First child"; // altera o conteúdo do 2º elemento filho
console.log("Novo conteúdo:", caixa1.children[1].innerHTML);