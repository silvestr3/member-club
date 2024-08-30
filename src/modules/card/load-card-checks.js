const cardGrid = document.querySelector("#card-grid");
const cardId = document.querySelector("#card-id");
const lastSlotImage = document.querySelector(".slot.last img");

export function loadCardChecks(loyaltyCard, id) {
  cardId.innerHTML = `ID: ${id}`;

  const cardSlots = cardGrid.children;
  const { totalCuts } = loyaltyCard;

  for (let i = 0; i < cardSlots.length; i++) {
    cardSlots[i].classList.remove("complete");
  }

  for (let i = 0; i < totalCuts; i++) {
    cardSlots[i].classList.add("complete");
  }

  if (totalCuts === 10) {
    lastSlotImage.setAttribute("src", "src/assets/icons/pin-gift.svg");
  } else {
    lastSlotImage.setAttribute("src", "src/assets/icons/gift.svg");
  }
}
