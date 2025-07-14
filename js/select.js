const imgBox = document.querySelectorAll(".select-container .img-box");

imgBox.forEach((btn) => {
    btn.addEventListener("click", () => {
        btn.classList.toggle("active");
    });
});

const video = document.querySelector("video");
video.controls = false;
