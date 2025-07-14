const checkbox = document.getElementById("robotCheck");
const label = document.querySelector(".main-checkbox");
const selectContainer = document.querySelector(".select-container");

checkbox.addEventListener("change", function () {
    if (checkbox.checked) {
        label.classList.add("checked");
        selectContainer.classList.add("active");
    } else {
        label.classList.remove("checked");
        selectContainer.classList.remove("active");
    }
});
