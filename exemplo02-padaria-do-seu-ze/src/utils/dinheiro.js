function formatarParaValorReal(valor){
    return Number(valor).toLocaleString('pt-BR', {style:'currency', currency:'BRL'});
}


function formatarParaEuro(valor){
    return "E"+valor;
}

const formatarDinheiro = {
    formatarParaValorReal,
    formatarParaEuro
}

export default formatarDinheiro;
