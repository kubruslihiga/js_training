function Classe(nomeParam, idadeParam) {
    this.nome = nomeParam;
    this.idade = idadeParam;
    this.denunciar = function() {
        console.log('Meu nome é', nomeParam, 'tenho', this.idade, 'anos de idade.');
    }
}

var objeto = new Classe('Mauricio', 20);
objeto.denunciar();
console.log(objeto.nome);
console.log(objeto.idade);
console.log(objeto.nomeParam);