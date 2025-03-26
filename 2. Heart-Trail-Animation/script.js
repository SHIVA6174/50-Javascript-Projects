const bodyElement = document.querySelector("body");

bodyElement.addEventListener("mousemove", (event) => {
  const xPosition = event.offsetX;
  // console.log(xPosition);
  const yPosition = event.offsetY;
  // console.log(yPosition);
  const spanElement = document.createElement("span");

  spanElement.style.left = xPosition + "px";
  spanElement.style.top = yPosition + "px";

  const size = Math.random() * 200;

  spanElement.style.width = size + "px";
  spanElement.style.height = size + "px";

  bodyElement.appendChild(spanElement);

  setTimeout(() => {
    spanElement.remove();
  }, 3000);
});
