let colecaoSignos = [
    {"nome": "Aquário", "dataInicio": "01-20", "dataFim": "02-18"},
    {"nome": "Peixes", "dataInicio": "02-19", "dataFim": "03-20"},
    {"nome": "Áries", "dataInicio": "03-21", "dataFim": "04-19"},
    {"nome": "Touro", "dataInicio": "04-20", "dataFim": "05-20"},
    {"nome": "Gêmeos", "dataInicio": "05-21", "dataFim": "06-21"},
    {"nome": "Câncer", "dataInicio": "06-22", "dataFim": "07-23"},
    {"nome": "Leão", "dataInicio": "07-24", "dataFim": "08-22"},
    {"nome": "Virgem", "dataInicio": "08-23", "dataFim": "09-22"},
    {"nome": "Libra", "dataInicio": "09-23", "dataFim": "10-22"},
    {"nome": "Escorpião", "dataInicio": "10-23", "dataFim": "11-21"},
    {"nome": "Sagitário", "dataInicio": "11-22", "dataFim": "12-21"},
    {"nome": "Capricórnio", "dataInicio": "12-22", "dataFim": "01-19"},
];

const verificaDataRange = (data,dataInicioSigno,dataFimSigno,tipo_comparacao) => {
    if ( tipo_comparacao == "and"){
        return( data >= dataInicioSigno && data <= dataFimSigno );
    } else if (tipo_comparacao == "or"){
        return (data >= dataInicioSigno || data <= dataFimSigno);
    };
};

const retornaSigno = (signos, data) => {

   let ano = data.getFullYear();

    for (const signo of signos){

        let dataInicioSigno = new Date (ano + "-" + signo.dataInicio + " 00:00:00 ");

        let dataFimSigno = new Date(ano + "-" + signo.dataFim + " 23:59:59 ");

        let tipo_comparacao = signo["DataInicio"] == "12-22" ? "or" : "and";

        if (verificaDataRange(data,dataInicioSigno,dataFimSigno,tipo_comparacao)){
            return signo.nome;
        };
    };
};

let dataAtual = new Date()

const nomeSigno = retornaSigno(colecaoSignos, dataAtual);

console.log("O signo de hoje é: ", nomeSigno);


