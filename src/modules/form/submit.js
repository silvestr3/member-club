import { fetchClientInformation } from "../../services/fetch-client-information";
import { loadCardChecks } from "../card/load-card-checks";
import { loadAppointmentsHistory } from "../history/load-appointments-history";
import { loadClientInformation } from "../info/load-client-info";
import { loadProgress } from "../progress/load-progress";

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
  loadCardChecks(data.loyaltyCard, data.id);
  loadProgress(data.loyaltyCard);
});
