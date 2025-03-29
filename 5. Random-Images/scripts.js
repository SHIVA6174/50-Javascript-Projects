const imageContainer = document.querySelector(".image-container");
const button = document.querySelector(".Btn");
button.addEventListener("click", () => {
  imageNums = 4;
  addNewImage();
});

function addNewImage() {
  for (let num = 1; num <= imageNums; num++) {
    const newImage = document.createElement("img");
    newImage.src = `https://picsum.photos/300?random=${Math.floor(
      Math.random() * 2000
    )}`;

    imageContainer.appendChild(newImage);
  }
}
