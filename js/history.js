const historyTab = document.getElementById("history-btn");
const donateBtn = document.getElementById("donation-btn");

historyTab.addEventListener("click",function () {
    historyTab.classList.add(
        "bg-[#B4F461]",
        "font-bold"
    )  
    donateBtn.classList.remove(
        "bg-[#B4F461]",
        "font-bold"
    )  

    document.getElementById("donate-area").classList.add("hidden");
    const addHistory = document.getElementById("history-section");
    addHistory.classList.remove("hidden")
})


donateBtn.addEventListener("click",function () {
    donateBtn.classList.add(
        "bg-[#B4F461]",
        "font-bold"
    )  
    historyTab.classList.remove(
        "bg-[#B4F461]",
        "font-bold"
    )  

    document.getElementById("history-section").classList.add("hidden");
    const addDonate = document.getElementById("donate-area");
    addDonate.classList.remove("hidden");
})