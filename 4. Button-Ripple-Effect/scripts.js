const Btn = document.querySelector(".Btn");
Btn.addEventListener("mouseover", (event) => {
  const x = event.pageY - Btn.offsetTop;
  const y = event.pageX - Btn.offsetLeft;

  Btn.style.setProperty("--xPosition", x + "px");
  Btn.style.setProperty("--yPosition", y + "px");
});
