
const porcentagem = (conta, gorgeta) =>{
    return parseFloat(conta * gorgeta) /100
}


const total = (porcentage, conta)=>{
    return porcentage + conta
}

const toValor = valor =>{
    return parseFloat(valor).toFixed(2)
}


module.exports = {
    porcentagem,
    total,
    toValor
}