var Pessoa = new Schema({
    idPessoa: ObjectId,
    dataCadastro: Date    
});

var PessoaFissica = new Schema({
    idPessoa: ObjectId,
    cpf: String,
    nome: String,
    dataNasc: String,
    RG: String,
    endereco: [{
        endereco: String,
        numero: String,
        complemento: String,
        bairro: String,
        cep: String,
        cidade: String,
        uf: String,
        pais: String,
        tipoEndereco: String        
    }],
    telefone: [{
        codigoPais: int,
        ddd: int,
        numero: int,        
        tipoTelefone: String,
        contato: String
    }],    
    email : [{
        email: String,
        tipoEmail: String
    }]
});

var PessoaJuridica = new Schema({
    idPessoa: ObjectId,
    cnpj: String,
    razaoSocial: String,
    nomeFantasia: String,
    inscEstadual: String,
    endereco: [{
        endereco: String,
        numero: String,
        complemento: String,
        bairro: String,
        cep: String,
        cidade: String,
        uf: String,
        pais: String,
        tipoEndereco: String        
    }],
    telefone: [{
        codigoPais: int,
        ddd: int,
        numero: int,        
        tipoTelefone: String,
        contato: String
    }],    
    email : [{
        email: String,
        tipoEmail: String
    }]
});

var Usuario = new Schema({
    idUsuario: ObjectId,
    nome: String,
    email: String,
    senha: String,
    uidFacebook: String,
    userFacebook: String,
    linkFacebook: String,
    dataCadastro: Date,
    idPessoa: ObjectId
});

var Produto = new Schema({
	idProduto: ObjectId,
	nome: String,
    descricao: String,
    dataCompra: Timestamp,
    valorCompra: Double,
    preco: Double,
    largura: Double,
    comprimento: Double,
    altura: Double,
    peso: Double,
    tamanho: String,
    cor: String,
    estadoProduto: String,
    possuiNotaFiscal: String,
    possuiEmbalagem: String,
    dataCadastro: Timestamp,
    dataAlteracao: Timestamp,
    idCategoriaProd: ObjectId,
    idUsuario: ObjectId,
    duvidas: [{
        idUsuario: ObjectId,
        mensagem: String,
        dataMensagem: Date
    }],
    feedbacks: [{
        idUsuario: ObjectId,
        mensagem: String,
        nota: int,
        dataRecomendacao: Date
    }]     
});

var CategoriaProduto = new Schema({
	idCategoriaProd: ObjectId,
	Categoria: String
});

var Servico = new Schema({
    idServico: ObjectId,
    nome: String,
    descricao: String,
    servicoRelacionado: [{
        idServico: ObjectId        
    }],
    duvidas: [{
        idUsuario: ObjectId,
        mensagem: String,
        dataMensagem: Date
    }],
    feedbacks: [{
        idUsuario: ObjectId,
        mensagem: String,
        nota: int,
        dataRecomendacao: Date
    }],
    idUsuario: ObjectId    
});

var Interesse = new Schema({
    idInteresse: ObjectId,
    dataInteresse: Date,
    descricao: String,
    produtoInteressado: [{
        idProduto: ObjectId
    }],
    categoriaProdInteressado: [{
        idCategoriaProd: ObjectId
    }],
    servicoInteressado: [{
        idServico: ObjectId
    }]    
});

var Troca = new Schema({
    idTroca: ObjectId,
    dataTroca: Date,
    dataEfetivacao: Date,
    produtoOrigem: [{
        idProduto: ObjectId
    }],
    servicoOrigem: [{
        idServico: ObjectId
    }],
    produtoDestino: [{
        idProduto: ObjectId
    }],
    servicoDestino: [{
        idServico: ObjectId
    }],
    mensagem: [{
        idUsuario: ObjectId,
        mensagem: String,
        dataMensagem: Date  
    }],
    status: String
});

