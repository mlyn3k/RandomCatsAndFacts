  window.onload = function() {
    getContent();

    document.addEventListener("keyup", function() {
        getContent();
    })
  }

  async function getContent () {
    const apiUrl = "https://some-random-api.ml/animal/cat";
    const data = await fetch(apiUrl);
    const dataJson = await data.json();

    processData(dataJson);
  }

  function processData(data) {
    const imgSrc = data.image;
    const fact = data.fact;

    updateDOM(imgSrc, fact);
  }

  function updateDOM (imgSrc, fact) {
    const img = document.getElementById("content-img");
    const factDiv = document.getElementById("fact");

    img.src = imgSrc;
    factDiv.innerHTML = fact;
  }