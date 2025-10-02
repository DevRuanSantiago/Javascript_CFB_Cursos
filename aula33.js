const divtodos = [...document.getElementsByTagName("div")]
const cursosc1 = [...document.getElementsByClassName("c1")]
const cursosc2 = [...document.getElementsByClassName("c2")]
const cursoEspecial = document.getElementById("c11")
const querydivtodas = [...document.querySelectorAll("div")]
const todoscursos = [...document.querySelectorAll(".curso")]
const c1cursos = [...document.querySelectorAll(".c1")]
const c2cursos = [...document.querySelectorAll(".c2")]
console.log("todos os cursos")
todoscursos.map((ele) => {
    ele.innerHTML = "texto alterado de todos que possuem a classe curso"
})
console.log(todoscursos)

console.log("todos os divs")
console.log(querydivtodas)
console.log(querydivtodas.innerHTML = "SOU A  primeira div")
console.log("query divs ^^")
console.log(cursoEspecial.innerHTML)
console.log(divtodos)
console.log(cursosc2)
cursosc1.map((ele) =>
    ele.classList.add("destaque"))
