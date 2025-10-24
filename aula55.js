const caixa = document.querySelector("#caixa")


let sete = new Set(["musica1", "musica2", "musica3"])
sete.add("musica4")
sete.add("musica1")
sete.add(20)
console.log(sete)
console.log(sete.has("musica1"))
console.log(sete.size)

console.log("teste")
for (m of sete) {

    console.log(m)
}