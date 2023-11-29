document.addEventListener("DOMContentLoaded", function () {
  const videoContainer = document.querySelector(".video-container");
  const hideButton = document.getElementById("hide-button");
  const content = document.querySelector(".content");
  const buttonshow = document.querySelector(".bouton-video");

  function showContent() {
    var content = document.querySelector(".content");
    var videoContainer = document.querySelector(".video-container");
    var hideButton = document.querySelector("#hide-button");
    var showButton = document.querySelector("#show-button");

    content.style.display = "block";
    videoContainer.style.display = "none";
    hideButton.style.display = "none";
    showButton.style.display = "inline-block";
  }

  hideButton.addEventListener("click", function () {
    if (videoContainer.style.display === "none") {
        hideContent();
      } else {
        showContent();
        var iframe = document.querySelector('iframe'); // Sélectionnez l'iframe
        iframe.src = iframe.src; // Recharge l'iframe, ce qui arrête la vidéo
      }
  });
});

var menuContainer = document.getElementById("menuContainer");
var burgerMenu = document.getElementById("burgerMenu");
var closeBtn = document.getElementById("closeBtn");

burgerMenu.addEventListener("click", function () {
  menuContainer.style.right = "0";
  menuContainer.style.display = "block";
});

closeBtn.addEventListener("click", function () {
  menuContainer.style.right = "-100%";
  menuContainer.style.display = "none";
});

function hideContent() {
  var content = document.querySelector(".content");
  var videoContainer = document.querySelector(".video-container");
  var hideButton = document.querySelector("#hide-button");
  var showButton = document.querySelector("#show-button");

  content.style.display = "none";
  videoContainer.style.display = "flex";
  videoContainer.style.justifyContent = "center"; // Centrer la vidéo
  videoContainer.style.alignItems = "center"; // Centrer la vidéo
  hideButton.style.display = "inline-block"; // Afficher le bouton hide
  showButton.style.display = "none"; // Cacher le bouton show
}
hideButton.addEventListener("click", function () {
  if (videoContainer.style.display === "none") {
    hideContent();
  } else {
    showContent();
    var iframe = document.querySelector('iframe');
    iframe.src = iframe.src;

    // Faites défiler la page vers le haut
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
});
