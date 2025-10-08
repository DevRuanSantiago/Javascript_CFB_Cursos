const caixa1 = document.querySelector("#caixa1");
const btn_c1 = document.querySelector("#c1");
const coleçaoCurs = [...document.querySelectorAll(".curso")]
caixa1.addEventListener("click", (evt) => {

    console.log(evt.target)
})

btn_c1.addEventListener("click", (evt) => {
    evt.stopPropagation()
    console.log("clicou c1")

})

coleçaoCurs.map((ele) => {
    ele.addEventListener("clcik", (evt) => {
        evt.stopPropagation()
    })

})

console.log(caixa1.hasChildNodes());
console.log(btn_c1[0].hasChildNodes());