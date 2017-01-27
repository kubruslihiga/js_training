var objeto = {
    nome : 'Mauricio',
    idade : 20,
    denunciar : function() {
        console.log('Meu nome é', this.nome, 'tenho', this.idade, 'anos de idade.');
    }
}

objeto.denunciar();