const text = document.querySelector("#text");
const imagem = document.querySelector("#img");

async function requestMessage() {
  const requestMessage = await fetch("https://api.adviceslip.com/advice");
  const dataMessage = await requestMessage.json();
  const message = dataMessage.slip.advice;

  text.innerHTML = `<p>"${message}"</p>`;
}

async function requestDog() {
  const response = await fetch("https://random.dog/woof.json");
  const data = await response.json();
  const dataUrl = data.url;

  if (dataUrl.includes(".mp4")) {
    requestDog();
  } else {
    imagem.innerHTML = `<img src="${dataUrl}" alt="Doguinho aleatório">`;
  }
}

requestMessage();
requestDog();
