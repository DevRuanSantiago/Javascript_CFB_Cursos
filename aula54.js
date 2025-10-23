const caixa = document.querySelector("#caixa")

let mapa = new Map()
mapa.set("curso", "javascript")
mapa.set("curso2", "CSS")
mapa.set("curso3", "java")
console.log(mapa)


mapa.forEach((el) => {
    console.log(el)
})