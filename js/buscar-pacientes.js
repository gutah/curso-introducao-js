var botaoAdicionar = document.querySelector("#buscar-pacientes");
var erroAjax = document.querySelector("#erro-ajax");

botaoAdicionar.addEventListener("click", function() {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

  xhr.addEventListener("load", function() {
    if (xhr.status == 200) {

      erroAjax.classList.add("invisivel");

      var resposta = xhr.responseText;
      var pacientes = JSON.parse(resposta);

      pacientes.forEach(function(paciente) {
        adicionaPacienteNaTabela(paciente);
      });
    } else {
      erroAjax.classList.remove("invisivel");
    }
  });

  xhr.send();
});
