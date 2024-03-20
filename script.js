
const cardContainer = document.querySelector(".card-container")
const resultContainer = document.querySelector(".result-container");
const result = document.getElementById("result")
function getValue(btn) {
    const targetBtn = document.getElementById(btn);

    const value = targetBtn.innerText;
    result.innerText = value;
    console.log("object");

    targetBtn.classList.add("active")


}
function submitResult() {

    // error handle
    if (!(result.innerText)) {
        return alert("Choose a number first.")
    }

    resultContainer.classList.remove("result-container")
    resultContainer.classList.add("visible");
    console.log(cardContainer);
    cardContainer.classList.add("hidden");
    cardContainer.classList.remove(".card-container");
    console.log(result);
}


