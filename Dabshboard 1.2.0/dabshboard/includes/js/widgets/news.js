fetch(
    "https://newsdata.io/api/1/news?apikey=pub_1549da7ca64992bf74fe7efe29689fd4d668&q=coronavirus&country=us&language=en"
)
    .then((response) => {
        return response.json();
    })
    .catch((err) => {
        console.error(err);
    });
/*news();

function news() {
    
            let randomIndex = Math.floor(Math.random() * data.length);
      if (data[randomIndex].text.length < 100) {
        if (data[randomIndex].author != null) {
          
        } else {
          document.getElementById("motivation-bar").innerHTML =
            data[randomIndex].text +
            "<span style='margin-left:10px'>-- Alpay Namazi</span>";
        }
      } else {
        news();
      }
        });
}*/
