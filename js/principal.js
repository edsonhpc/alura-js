
  var titulo = document.querySelector(".titulo");
      titulo.textContent = "Aparecida Nutricionista";

  var pacientes = document.querySelectorAll(".paciente");


for( var i=0; i<pacientes.length; i++){

     var paciente = pacientes[i];

    //  var paciente = document.querySelector("#primeiro-paciente");
      var tdPeso   = paciente.querySelector(".info-peso");
      var peso     = tdPeso.textContent;

      var tdAltura = paciente.querySelector(".info-altura");
      var altura   = tdAltura.textContent;

      var tdImc    = paciente.querySelector(".info-imc");

      var pesoEhValido = true;
      var alturaEhValido = true;

      if(peso <=0 || peso >= 500){
        console.log("Peso inválido!");
        pesoEhValido = false;
        tdImc.textContent = "Peso inválido!";
        paciente.style.color = "red";
      }

      if(altura <= 0 || altura >= 3.00){
        console.log("Altura inválida!");
        alturaEhValido = false;
        tdImc.textContent = "Altura inválido!";
        paciente.classList.add("paciente-invalido");
      }

      if(pesoEhValido && alturaEhValido){
        var imc = peso / (altura * altura);
        tdImc.textContent =  imc.toFixed(2);
      }
      console.log(pacientes[i]);
}
