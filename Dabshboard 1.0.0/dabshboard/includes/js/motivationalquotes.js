fetch("https://type.fit/api/quotes")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    let randomIndex = Math.floor(Math.random() * data.length);

    document.getElementById("motivation-bar").innerHTML =
      data[randomIndex].text + " " + data[randomIndex].author;
  });
