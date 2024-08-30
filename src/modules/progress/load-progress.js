const remainingTitle = document.querySelector("#progress-info h2");
const progressLabel = document.querySelector("#progress-track span");
const progressBar = document.querySelector("#progress-bar");

export function loadProgress(loyaltyCard) {
  const { totalCuts, cutsNeeded, cutsRemaining } = loyaltyCard;

  remainingTitle.innerHTML = `${cutsRemaining} <strong>cortes restantes</strong>`;
  progressLabel.innerHTML = `${totalCuts} de ${cutsNeeded}`;
  progressBar.style.width = `${totalCuts * 10}%`;

  if (totalCuts === 10) {
    alert("Parabéns! Seu próximo corte é gratuito!");
  }
}
