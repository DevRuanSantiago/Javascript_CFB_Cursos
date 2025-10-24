class pessoa {

    constructor(nome, endereço, idade) {

        this.nome = nome;
        this.endereço = endereço;
        this.idade = idade;
    }
}


let pessoa1 = new pessoa("bruno", "juiz de fora", 20);

console.log(pessoa1.endereço)