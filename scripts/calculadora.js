function somar(){
let nume1 = document.getElementById("num1").value;
let nume2 = document.getElementById("num2").value;
let somar = parseFloat(nume1)+parseFloat(nume2);
document.getElementById("resultado").innerHTML = "resultado: " + somar;
}

