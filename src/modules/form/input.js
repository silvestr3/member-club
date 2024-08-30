const stringMask = require("string-mask");

const clientId = document.querySelector("form input");

clientId.addEventListener("input", (e) => {
  const formatter = new stringMask("###-###-###-###");
  let value = clientId.value.replace(/\D/g, "");

  clientId.value = formatter.apply(value);
});
