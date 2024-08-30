const form = document.querySelector("form");
const clientId = document.querySelector("form input");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const inputFormatRegex = /([1-9]{3})-([1-9]{3})-([1-9]{3})-([1-9]{3})/;
  const isValidInput = inputFormatRegex.test(clientId.value);

  if (!isValidInput) {
    alert("ID do cliente com formato inválido!");
  }
});
