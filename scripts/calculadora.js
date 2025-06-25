function somar(){
let nume1 = document.getElementById("num1").value;
let nume2 = document.getElementById("num2").value;
let somar = parseFloat(nume1)+parseFloat(nume2);
document.getElementById("resultado").innerHTML = "resultado: " + somar;
}

function subtracao(){
    let nume1 = document.getElementById("num1").value;
    let nume2 = document.getElementById("num2").value;
    let subtração = parseFloat(nume1)-parseFloat(nume2);
    document.getElementById("resultado").innerHTML = "resultado: " + subtração;
    }
    

    function multiplicacao(){
        let nume1 = document.getElementById("num1").value;
        let nume2 = document.getElementById("num2").value;
        let multiplicacao = parseFloat(nume1)*parseFloat(nume2);
        document.getElementById("resultado").innerHTML = "resultado: " + multiplicacao;
        }
        
        function divisao(){
            let nume1 = document.getElementById("num1").value;
            let nume2 = document.getElementById("num2").value;
            let divisao = parseFloat(nume1)/parseFloat(nume2);
            document.getElementById("resultado").innerHTML = "resultado: " + divisao;
            }
            