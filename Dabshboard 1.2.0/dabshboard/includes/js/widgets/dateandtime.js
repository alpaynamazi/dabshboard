update();

function update() {
  var today = new Date();
  var date =
    today.getFullYear() + "/" + (today.getMonth() + 1) + "/" + today.getDate();
  var time =
    (today.getHours() < 10 ? "0" : "") +
    today.getHours() +
    ":" +
    (today.getMinutes() < 10 ? "0" : "") +
    today.getMinutes() +
    ":" +
    (today.getSeconds() < 10 ? "0" : "") +
    today.getSeconds();
  var dateStr = date;
  var day = getDayName(dateStr, "us-En");
  document.getElementById("date").innerHTML = date;
  document.getElementById("time").innerHTML = time;
  document.getElementById("day").innerHTML = day;
}

function getDayName(dateStr, locale) {
  var date = new Date(dateStr);
  return date.toLocaleDateString(locale, { weekday: "long" });
}

setInterval(update, 1000);
