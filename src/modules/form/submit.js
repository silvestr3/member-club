import { fetchClientInformation } from "../../services/fetch-client-information";
import { loadAppointmentsHistory } from "../history/load-appointments-history";
import { loadClientInformation } from "../info/load-client-info";

const form = document.querySelector("form");
const clientId = document.querySelector("form input");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const inputFormatRegex = /([0-9]{3})-([0-9]{3})-([0-9]{3})-([0-9]{3})/;
  const isValidInput = inputFormatRegex.test(clientId.value);

  if (!isValidInput) {
    alert("ID do cliente com formato inválido!");
    return;
  }

  const data = await fetchClientInformation(clientId.value);

  if (!data) {
    alert("Cliente não encontrado!");
    return;
  }

  // console.log(data);
  loadClientInformation(data);
  loadAppointmentsHistory(data.appointmentHistory);
});
