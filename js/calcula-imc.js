
  var titulo = document.querySelector(".titulo");
      titulo.textContent = "Aparecida Nutricionista";

  titulo.addEventListener("click", function(){
      return console.log("Olá você clicou no Aparecida Nutricionista");
  })

  var pacientes = document.querySelectorAll(".paciente");

for( var i=0; i < pacientes.length; i++){

      var paciente = pacientes[i];

      var tdPeso   = paciente.querySelector(".info-peso");
      var peso     = tdPeso.textContent;

      var tdAltura = paciente.querySelector(".info-altura");
      var altura   = tdAltura.textContent;

      var tdImc    = paciente.querySelector(".info-imc");

      var pesoEhValido = validaPeso(peso);
      var alturaEhValido = validaAltura(altura);

      if(!pesoEhValido){
        console.log("Peso inválido!");
        pesoEhValido = false;
        tdImc.textContent = "Peso inválido!";
        paciente.classList.add("paciente-invalido");
      }

      if(!alturaEhValido){
        console.log("Altura inválida!");
        alturaEhValido = false;
        tdImc.textContent = "Altura inválido!";
        paciente.classList.add("paciente-invalido");
      }

      if(pesoEhValido && alturaEhValido){
        tdImc.textContent = calculaImc(peso, altura);
      }
}

function validaPeso(peso){
   if (peso >= 0 && peso <= 1000){
      return true;
   }else{
     return false;
   }
}

function validaAltura(altura){
  if (altura >= 0 && altura <= 3.00){
    return true;
  }else{
    return false;
  }
}

function calculaImc(peso, altura){
    var imc = 0
        imc =  peso / (altura * altura);

   return imc.toFixed(2);
}
