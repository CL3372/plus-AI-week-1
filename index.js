function displayJoke(response) {
  new Typewriter("#joke", {
    strings: response.data.answer,
    autoStart: true,
    cursor: null,
    delay: 40,
  });
}

function generateJoke(event) {
  event.preventDefault();
  let apiKey = "aa9340df384978aa7t1a53a8fabcc2o1";
  let context =
    "You're a funny AI who tells funny jokes, please tell me funny jokes about chickens";
  let prompt = "Tell a short joke";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(displayJoke);
}

let jokeButton = document.querySelector("#joke-button");
jokeButton.addEventListener("click", generateJoke);
