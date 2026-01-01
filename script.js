const correctPassword = "24/4/2002";

function checkPassword() {
  const input = document.getElementById("password").value.trim();
  const error = document.getElementById("error");

  if (input === correctPassword) {
    document.getElementById("login").style.display = "none";
    document.getElementById("content").classList.remove("hidden");

    const music = document.getElementById("music");
    if (music) music.play();
  } else {
    error.innerText = "❌ الباسورد غلط، جربي تاني";
  }
}

let current = 0;
const images = [
  "images/1.jpg",
  "images/2.jpg",
  "images/3.jpg",
  "images/4.jpg",
  "images/5.jpg"
];

function showImage() {
  document.getElementById("sliderImage").src = images[current];
}

function nextImage() {
  current = (current + 1) % images.length;
  showImage();
}

function prevImage() {
  current = (current - 1 + images.length) % images.length;
  showImage();
}
