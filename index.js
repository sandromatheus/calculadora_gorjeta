const express = require('express')
const app = express()
const path = require('path')
const calcular = require('./lib/calcular')

app.set('views', path.join(__dirname, 'views'))
app.set('view engine','ejs')
app.use(express.static(path.join(__dirname,'public')))


app.get('/', (req,res)=>{
    res.render('home')
})


app.get('/receber',(req,res)=>{
    const {conta, gorgeta} = req.query
    if(conta && gorgeta){
        const resultado = calcular.porcentagem(conta,gorgeta)
        const resultadoSoma = calcular.total(conta, resultado)
    res.render('receber',{
        error: false,
        resultado: calcular.toValor(resultado),
        resultadoSoma: calcular.toValor(resultadoSoma),
        conta: calcular.toValor(conta),
        gorgeta 
    })} 
    
    else{
        res.render('receber',{
            error: 'Valores Inválidos'
        })
    }
})






app.listen(3000, (erro)=>{
    if(erro){
        console.log('Servidor Inativo')
    } else{
        console.log('Servidor Online')
    }
})