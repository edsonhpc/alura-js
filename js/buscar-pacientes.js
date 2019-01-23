var botaoAdicionar = document.querySelector("#buscar-pacientes");

    botaoAdicionar.addEventListener("click", function(){
        console.log("Buscando pacientes...");
        var xhr = new XMLHttpRequest(); // é um objeto JS responsável por fazer requisições HTTP | requisições assíncronas

        xhr.open("GET","https://api-pacientes.herokuapp.com/pacientes"); //método open para informar o tipo de requisição a ser realizada | método e url

        xhr.addEventListener("load", function(){ //evento que vai escutar a minha requisição quando sua resposta for carregada.

        var erroAjax = document.querySelector("#erro-ajax");
        if (xhr.status == 200){ // propriedade status do XMLHttpRequest

              erroAjax.classList.add("invisivel");
              var resposta = xhr.responseText; // resposta sempre vai retornar no responseText
                  console.log(resposta); // utilizar essa propriedade para ter o acesso aos dados.
                  console.log(typeof  resposta); // typeof comando para saber o formato dos dados.

               var pacientes = JSON.parse(resposta); //transformar resposta Json em objetos JS
                   console.log(pacientes);
                   console.log(typeof pacientes);

                   pacientes.forEach( function(paciente) {
                      adicionaPacienteNaTabela(paciente);
                   });
              }else{
                console.log(xhr.status);
                console.log(xhr.responseText);
                erroAjax.classList.remove("invisivel");
          }

        });
        xhr.send(); //método send para o envio da requisição
    });
