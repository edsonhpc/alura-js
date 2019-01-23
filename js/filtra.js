var campoFiltro = document.querySelector("#filtrar-tabela");

    campoFiltro.addEventListener("input", function() {

    var pacientes = document.querySelectorAll(".paciente");

    if(this.value.length > 0){
        for (var i = 0; i < pacientes.length; i++) {
             var paciente = pacientes[i];
             var tdNome = paciente.querySelector(".info-nome");
             var nome = tdNome.textContent;
             var expressao = new RegExp(this.value, "i"); //Chamada do objeto RegExp passando o valor a ser testado, + qual o tipo casesentitive o sentive
             if (!expressao.test(nome)){ // Chamo o método test informando o que eu quero testar/ 1) o que deve ser buscado 2) como queremos que a regex busque
                 paciente.classList.add("invisivel");
             }else{
                paciente.classList.remove("invisivel");
             }
         }
      }else{
            for( var i = 0; i < pacientes.length; i++) {
               var paciente = pacientes[i];
                 paciente.classList.remove("invisivel");
           }
    }
 });
