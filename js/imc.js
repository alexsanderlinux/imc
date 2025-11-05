
function calcularImc(peso, altura){

    let avalicaco = null;
    let recPeso = peso;
    let recAltura = altura;
    const quatroCasas = 10000;

    let resultadoImc = recPeso / (recAltura * recAltura) * quatroCasas; 

    let formatacaoImc = resultadoImc.toFixed(2);

    if(resultadoImc < 18.5){

        avalicaco = `O valor do seu IMC é ${formatacaoImc} e você esta com baixo peso.`;
    
    }else if(resultadoImc > 18.6 && resultadoImc < 24.9){

        avalicaco = `O valor do seu IMC é ${formatacaoImc} e você esta com peso normal.`;

    }else if(resultadoImc > 25 && resultadoImc < 29.9){

        avalicaco = `O valor do seu IMC é ${formatacaoImc} e você esta com sobrepeso.`;

    }else if(resultadoImc > 30 && resultadoImc < 34.9){

        avalicaco = `O valor do seu IMC é ${formatacaoImc} e você esta com obesidade grau I.`;

    }else if(resultadoImc > 35 && resultadoImc < 39.9){

        avalicaco = `O valor do seu IMC é ${formatacaoImc} e você esta com obesidade grau II.`;

    }else if(resultadoImc > 40){

        avalicaco = `O valor do seu IMC é ${formatacaoImc} e você esta com obesidade grau III.`;

    }

    return avalicaco;
}


function mostrarImc(){

    //Entrada de dados
    let peso = document.getElementById("peso").value;
    let altura = document.getElementById("altura").value;

    //Processamento
    let recCalcularImc =  calcularImc(peso, altura);


    //Saída
    console.log(recCalcularImc);
    

}

