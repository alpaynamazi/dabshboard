function popup(requestedElement) {
  document.getElementsByTagName("body")[0].style.overflow = "hidden";
  document.getElementById(requestedElement).style.visibility = "visible";
  document.getElementById(requestedElement).firstElementChild.style.background =
    "rgba(0,0,0,0.7)";
}

function popupremove(requestedElement) {
  document.getElementsByTagName("body")[0].style.overflow = "auto";
  document.getElementById(requestedElement).style.visibility = "hidden";
  document.getElementById(requestedElement).firstElementChild.style.background =
    "rgba(0,0,0,0)";
}
