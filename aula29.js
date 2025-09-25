function aluno(nome, nota) {
    this.nome = nome;
    this.nota = nota;

    this.dados_anonimo = function () {
        setTimeout(() => {
            console.log(this.nome)
            console.log(this.nota)
        }, 2000)

    }



}
const al1 = new aluno("joao", 50)
aluno("bruno", 100)