// input value function
function getInputValue(inputId) {
  const inputValue = parseFloat(document.getElementById(inputId).value);
  return inputValue;
}

// my money parsFloat function

function moneyToNumber(mainMoney) {
  const mainBalance = parseFloat(document.getElementById(mainMoney).innerText);
  return mainBalance;
}

// card one done
document
  .getElementById("noakhali-donate-btn")
  .addEventListener("click", function () {
    const noakhaliInputValue = parseFloat(
      document.getElementById("noakhali-donate-input").value
    );
    const mainTk = parseFloat(
      document.getElementById("main-balance").innerText
    );
    const newBalance = mainTk - noakhaliInputValue;

    if (isNaN(noakhaliInputValue) || noakhaliInputValue <= 0) {
      alert("Error: Invalid donation amount. Please enter a positive number.");
      return;
    }

    if (mainTk < noakhaliInputValue) {
      alert("Error: Donation amount exceeds available balance.");
      return;
    }

    document.getElementById("main-balance").innerText = newBalance.toFixed(2);

    const noakhaliDonetAmount = parseFloat(
      document.getElementById("noakhali-donate").innerText
    );
    const noakhaliDonet = noakhaliInputValue + noakhaliDonetAmount;

    document.getElementById("noakhali-donate").innerText =
      noakhaliDonet.toFixed(2);

    const modalTitle = document.getElementById("modal-title");
    const modalMessage = document.getElementById("modal-message");
    modalTitle.innerText = "Congrats!";
    modalMessage.innerText = `You have successfully donated ${noakhaliInputValue.toFixed(
      2
    )} BDT for flood relief at Noakhali.`;
    my_modal_1.showModal();

    const historyItem = document.createElement("div");
    historyItem.className =
      "bg-white p-3 rounded-md border-l-2 border-green-500 mt-5";
    historyItem.innerHTML = `
      <p class="text-xl font-bold">${noakhaliInputValue.toFixed(
        2
      )} Taka is Donated for Flood Relief at Noakhali, Bangladesh!</p>
      <p class="mt-2">${new Date()}</p>
    `;
    const historyContainer = document.getElementById("history-list");
    historyContainer.insertBefore(historyItem, historyContainer.firstChild);
  });

// card two
document
  .getElementById("feni-donate-btn")
  .addEventListener("click", function () {
    const feniInputValue = getInputValue("feni-input");
    const feniDonet = moneyToNumber("feni-donet");
    const mainTk = moneyToNumber("main-balance");

    const mainInputDonet = mainTk - feniInputValue;
    const setFeniDonate = feniInputValue + feniDonet;

    if (feniInputValue <= 0 || isNaN(feniInputValue)) {
      alert("Error: Invalid donation amount. Please enter a positive number.");
      return;
    }

    if (mainTk < feniInputValue) {
      alert("Error: Donation amount exceeds available balance.");
      return;
    }

    document.getElementById("main-balance").innerText =
      mainInputDonet.toFixed(2);

    document.getElementById("feni-donet").innerText = setFeniDonate.toFixed(2);

    const modalTitle = document.getElementById("modal-title");
    const modalMessage = document.getElementById("modal-message");
    modalTitle.innerText = "Congrats!";
    modalMessage.innerText = `You have successfully donated ${feniInputValue.toFixed(
      2
    )} BDT for flood relief in Feni.`;
    my_modal_1.showModal();

    const historyItem = document.createElement("div");
    historyItem.className =
      "bg-white p-3 rounded-md border-l-2 border-green-500 mt-5";
    historyItem.innerHTML = `
      <p class="text-xl font-bold">${feniInputValue.toFixed(
        2
      )} Taka is Donated for Flood Relief in Feni, Bangladesh!</p>
      <p class="mt-2">${new Date()}</p>
    `;
    const historyContainer = document.getElementById("history-list");
    historyContainer.insertBefore(historyItem, historyContainer.firstChild);
  });

//   card three
document.getElementById("injured-btn").addEventListener("click", function () {
  const injuredMainAmount = moneyToNumber("injured-main-amount");
  const mainTk = moneyToNumber("main-balance");
  const injuredInputValue = getInputValue("injured-input");

  const injuredDonateByMainMoney = mainTk - injuredInputValue;
  const updateInjuredTk = injuredMainAmount + injuredInputValue;

  if (injuredInputValue <= 0 || isNaN(injuredInputValue)) {
    alert("Error: Invalid donation amount. Please enter a positive number.");
    return;
  }

  if (mainTk < injuredInputValue) {
    alert("Error: Donation amount exceeds available balance.");
    return;
  }

  document.getElementById("main-balance").innerText =
    injuredDonateByMainMoney.toFixed(2);

  document.getElementById("injured-main-amount").innerText =
    updateInjuredTk.toFixed(2);

  const modalTitle = document.getElementById("modal-title");
  const modalMessage = document.getElementById("modal-message");
  modalTitle.innerText = "Congrats!";
  modalMessage.innerText = `You have successfully donated ${injuredInputValue.toFixed(
    2
  )} BDT for injured relief.`;
  my_modal_1.showModal();

  const historyItem = document.createElement("div");
  historyItem.className =
    "bg-white p-3 rounded-md border-l-2 border-green-500 mt-5";
  historyItem.innerHTML = `
      <p class="text-xl font-bold">${injuredInputValue.toFixed(
        2
      )} Taka is Donated for Injured Relief!</p>
      <p class="mt-2">${new Date()}</p>
    `;
  const historyContainer = document.getElementById("history-list");
  historyContainer.insertBefore(historyItem, historyContainer.firstChild);
});
