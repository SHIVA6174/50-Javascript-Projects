const container = document.querySelector(".container");
// console.log(container);

const careers = [
  "YouTuber!",
  "Web Designer!",
  "Web Developer!",
  "Freelancer!",
  "Instructor!",
];

let careerIndex = 0;
let characterIndex = 0;

text();

function text() {
  characterIndex++;
  // console.log(characterIndex);
  container.innerHTML = `<h1>I am ${
    careers[careerIndex].slice(0, 1) === "I" ? "An" : "A"
  } ${careers[careerIndex].slice(0, characterIndex)}</h1>`;

  if (characterIndex === careers[careerIndex].length) {
    characterIndex = 0;
    careerIndex++;
  }

  if (careerIndex === careers.length) {
    careerIndex = 0;
  }

  setTimeout(text, 500);
}

//  What i leanrt --> ternary operator,arrays , functions, slice(),innerHtml,querySelector()
