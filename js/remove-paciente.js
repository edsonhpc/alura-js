/* Função de Exemplo 1
var pacientes = document.querySelectorAll(".paciente");

  pacientes.forEach(function(paciente){
      paciente.addEventListener("dblclick", function() {
          this.remove();
      });
  });
*/

/*Função de Exemplo 2 - Delegação de eventos*/
/*Parametro event é para eu saber qual filho foi clicado*/
/*O Event vai nos dizer quem foi clicado, logo o target diz quem é o nosso alvo*/
/*A propriedade parentNode vou usar para remover o pai do meu target "alvo" ou "pai  dele"*/
/*Dessa forma quando eu removo ele vai subindo até chegar a tabela e depois remove a tr*/
/*Quando click no filho o evento consegue chegar no seu pai*/
/*Função setTimeout é para pedir para js aguardar um tempo antes dele seguir com a execução */
/* 500 milisegundos equivale a 0.5s*/
/* tagName retorna a tag do elemento em maiúsculo */

var tabela = document.querySelector("table");

    tabela.addEventListener("dblclick", function (event) {
      if (event.target.tagName == 'TD') {
           event.target.parentNode.classList.add("fadeOut");

           setTimeout(function() {
             event.target.parentNode.remove();
           },500);
       }
    });
