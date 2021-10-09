motivational();

function motivational() {
    fetch("https://type.fit/api/quotes")
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            let randomIndex = Math.floor(Math.random() * data.length);
            if (data[randomIndex].text.length < 100) {
                if (data[randomIndex].author != null) {
                    document.getElementById("motivation-bar").innerHTML =
                        data[randomIndex].text +
                        "<span style='margin-left:10px'>-- " +
                        data[randomIndex].author +
                        "</span>";
                } else {
                    document.getElementById("motivation-bar").innerHTML =
                        data[randomIndex].text +
                        "<span style='margin-left:10px'>-- Alpay Namazi</span>";
                }
            } else {
                motivational();
            }
        });
}
