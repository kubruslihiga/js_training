var funcoesDinamicas = {
    nome : 'Mauricio',
    idade : 20,
    denunciar : function() {
        console.log('Meu nome é', this.nome, 'tenho', this.idade, 'anos de idade.');
    }
}

funcoesDinamicas.novaFuncao = function() {
    console.log('Criei um novo método na instância \'funcoesDinamicas\'.');
};

funcoesDinamicas.novaFuncao();