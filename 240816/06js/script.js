const button = document.querySelector("#tweetButton");

button.addEventListener("click", () => {
  let tweetText = document.querySelector("#tweetTextArea").value;
  tweetText += ` #Jun #sns #js`;

  const encodedText = encodeURIComponent(tweetText);

  const tweetURL = `http://twitter.com/intent/tweet?text=${encodedText}`;

  window.open(tweetURL);
});
