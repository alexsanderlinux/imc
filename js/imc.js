function calcularImc(peso, altura){

    let recPeso = peso;
    let recAltura = altura;
    const quatroCasas = 10000;
    let classificacao = null;
    let arrayResultado = [];
       
    let resultadoImc = recPeso / (recAltura * recAltura) * quatroCasas; 

    let formatacaoImc = resultadoImc.toFixed(2);

    if(resultadoImc < 18.5){

        `${arrayResultado.push(formatacaoImc)}. ${arrayResultado.push(classificacao = "baixo peso.")}`;
    
    }else if(resultadoImc > 18.6 && resultadoImc < 24.9){

        `${arrayResultado.push(formatacaoImc)}. ${arrayResultado.push(classificacao = "baixo normal.")}`;

    }else if(resultadoImc > 25 && resultadoImc < 29.9){
        
        `${arrayResultado.push(formatacaoImc)}. ${arrayResultado.push(classificacao = "sobrepeso.")}`;
    
    }else if(resultadoImc > 30 && resultadoImc < 34.9){

        `${arrayResultado.push(formatacaoImc)}. ${arrayResultado.push(classificacao = "obesidade grau I.")}`;

    }else if(resultadoImc > 35 && resultadoImc < 39.9){

        `${arrayResultado.push(formatacaoImc)}. ${arrayResultado.push(classificacao = "obesidade grau II.")}`;

    }else if(resultadoImc > 40){

        `${arrayResultado.push(formatacaoImc)}. ${arrayResultado.push(classificacao = "obesidade grau III.")}`;

    }

    return arrayResultado;
}


function mostrarImc(){

    //Entrada de dados
    let peso = document.getElementById("peso").value;
    let altura = document.getElementById("altura").value;

    //Processamento
    let recCalcularImc =  calcularImc(peso, altura);

    //Saída
    document.getElementById("valorImc").textContent = `Resultado IMC: ${recCalcularImc[0]}`;
    document.getElementById("classificacao").textContent = `Classificacão IMC: ${recCalcularImc[1]}`;
    
    

}

