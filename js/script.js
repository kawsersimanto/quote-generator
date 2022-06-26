const button = document.querySelector(".btn");
const copyButton = document.querySelector(".fa-paste");
const soundButton = document.querySelector(".fa-volume-high");

button.addEventListener("click", () => {
  getQuotes();
});

async function getQuotes() {
  const response = await fetch("https://api.quotable.io/random");
  const { content: quote, author: authorName } = await response.json();

  const paragraph = document.querySelector(".card-text");
  const small = document.querySelector(".author small");

  paragraph.innerText = `"${quote}"`;
  small.innerText = `- ${authorName}`;
  copyButton.addEventListener("click", () => {
    navigator.clipboard.writeText(paragraph.innerText);
  });

  soundButton.addEventListener("click", () => {
    let utterance = new SpeechSynthesisUtterance(
      `${paragraph.innerText} by ${small.innerText}`
    );
    speechSynthesis.speak(utterance);
  });
}
