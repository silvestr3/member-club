const appointmentsList = document.querySelector("#history-list");
const appointmentsAmount = document.querySelector("#history-amount span");

export function loadAppointmentsHistory(appointmentsHistory) {
  appointmentsList.replaceChildren();

  appointmentsAmount.innerText = `${appointmentsHistory.length} cortes`;

  const border = document.createElement("div");
  border.classList.add("border");
  appointmentsList.append(border);

  appointmentsHistory.forEach((appointment) => {
    const appointmentItem = document.createElement("li");
    appointmentItem.classList.add("history-item");

    const datetimeInfo = document.createElement("div");

    const date = document.createElement("span");
    date.classList.add("history-date");
    date.innerText = appointment.date;

    const time = document.createElement("span");
    time.classList.add("history-time");
    time.innerText = appointment.time;

    datetimeInfo.append(date, time);

    const iconContainer = document.createElement("div");
    const icon = document.createElement("img");
    icon.setAttribute("src", "src/assets/icons/check.svg");
    icon.setAttribute("alt", "Check icon");
    iconContainer.append(icon);

    appointmentItem.append(datetimeInfo, iconContainer);
    appointmentsList.append(appointmentItem);
  });
}
