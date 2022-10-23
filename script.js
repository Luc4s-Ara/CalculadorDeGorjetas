function calcular(event){
    event.preventDefault();
    let conta = document.getElementById("conta").value;
    let servico = document.getElementById("servico").value;
    let pessoas = document.getElementById("pessoas").value;

    if(conta == "" | servico == 0){
        alert("Por favor, preencha os Valores")
        return;
    }

    if(pessoas == "" | pessoas <=1){
        pessoas = 1;
        document.getElementById("each").style.display = "none";
    }else{
        document.getElementById("each").style.display = "block";
    }

    let total = (conta * servico) / pessoas;
    total = total.toFixed(2);
    document.getElementById("tip").innerHTML = total;
    document.getElementById("total").style.display="block";
}

document.getElementById("total").style.display="none";
document.getElementById("each").style.display="none";

document.getElementById("tipsform").addEventListener("submit", calcular);