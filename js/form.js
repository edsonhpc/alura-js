var botaoAdicionar = document.querySelector("#adicionar-paciente");
    botaoAdicionar.textContent;

    botaoAdicionar.addEventListener("click", function(event){
       event.preventDefault();

   var form = document.querySelector("#form-adiciona");

   var nome    = form.nome.value;
   var peso    = form.peso.value;
   var altura  = form.altura.value;
   var gordura = form.gordura.value;

   var table   = document.querySelector("#tabela-pacientes");
       tableTr = document.createElement("tr");

       table.appendChild(tableTr)


   var nomeTd    =  document.createElement("td");
   var pesoTd    =  document.createElement("td");
   var alturaTd  =  document.createElement("td");
   var gorduraTd =  document.createElement("td");

       nomeTd.textContent = nome;

    tableTr.appendChild(nomeTd);
    tableTr.appendChild(pesoTd);
    tableTr.appendChild(alturaTd);
    tableTr.appendChild(gorduraTd);

  

  console.log(table);


})
