const gallery = document.querySelector(".gallery");
const modal = document.querySelector(".viewer");
const modalImage = modal.querySelector("img");
const closeButton = document.querySelector(".close-viewer");
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");

const images = document.querySelectorAll(".gallery img");

let currentIndex = 0;

function showImage(index) {
    currentIndex =index;

    modalImage.src = "images/cool_picf.jpg"
    modalImage.alt = images[currentIndex].alt;
}

gallery.addEventListener("click", (event) => {
    const clickedImage =event.target;

    if (clickedImage.tagName !== "IMG") {
        return;
    }

    currentIndex = [...images].indexOf(clickedImage);
    showImage(currentIndex);

    modal.showModal();
});

nextButton.addEventListener("click", () => {
    currentIndex++;

    if (currentIndex >= images.length) {
        currentIndex = 0;
    }

    showImage(currentIndex);
});

prevButton.addEventListener("click", () => {
    currentIndex--;

    if (currentIndex < 0) {
        currentIndex = images.length -1;
    }

    showImage(currentIndex);
});

closeButton.addEventListener("click", () => {
    modal.close();
});

modal.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.close();
    }
});