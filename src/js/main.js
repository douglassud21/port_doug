const form = document.getElementById("formContato");

form.addEventListener("submit", function (e) {
  e.preventDefault(); // Impede o envio normal do formulário

  const formData = new FormData(form);

  fetch(form.action, {
    method: "POST",
    body: formData,
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      if (response.ok) {
        alert("Mensagem enviada com sucesso!");
        form.reset(); // Limpa o formulário
      } else {
        alert("Erro ao enviar mensagem. Tente novamente.");
      }
    })
    .catch((error) => {
      alert("Erro de conexão. Tente novamente.");
    });
});
