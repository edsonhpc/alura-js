
var titulo = document.querySelector(".titulo");
    titulo.textContent = "Aparecida Nutricionista";



var paciente = document.querySelector("#primeiro-paciente");
var tdNome   = paciente.querySelector(".info-nome").textContent;
var tdPeso   = paciente.querySelector(".info-peso").textContent;
var tdAltura = paciente.querySelector(".info-altura").textContent;
var tdImc    = paciente.querySelector(".info-imc");

tdImc.textContent = (tdPeso / (tdAltura * tdAltura));

console.log(tdNome + '  -> IMC = ' + (tdPeso / (tdAltura * tdAltura)));



console.log(paciente);
console.log(tdPeso);
console.log(tdAltura);
