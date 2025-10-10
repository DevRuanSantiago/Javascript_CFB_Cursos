const idades = [ 15,21,44,12,50,60,55,30,18]
const maior18 = idades.filter((valor)=>{

    if(valor > 18);
    {
        return valor;
    }
})
console.log(maior18)

const menor18 = idades.filter((valor)=>{
    if(valor < 18);
    {
        return valor;
    }
})
const igual18 = idades.filter((valor)=>{
    if(valor === 18)
    {
        return valor;
    }
})

console.log(maior18)
console.log(menor18)
console.log(igual18)
