function popup(requestedElement) {
  document.getElementById(requestedElement).style.visibility = "visible";
  document.getElementById(requestedElement).firstElementChild.style.background =
    "rgba(0,0,0,0.7)";
}

function popupremove(requestedElement) {
  document.getElementById(requestedElement).style.visibility = "hidden";
  document.getElementById(requestedElement).firstElementChild.style.background =
    "rgba(0,0,0,0)";
}
