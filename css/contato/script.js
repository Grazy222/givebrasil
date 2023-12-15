function validarFormulario() {
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("email").value;
    var mensagem = document.getElementById("mensagem").value;

    if (nome == "" || email == "" || mensagem == "") {
      alert("Por favor, preencha todos os campos!");
      return false;
    }

    return true;
  }