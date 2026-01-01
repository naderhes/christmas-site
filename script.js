function checkPassword() {
  const input = document.getElementById("password").value.trim();
  const correctPassword = "24/4/2002";

  if (input === correctPassword) {
    document.getElementById("login").style.display = "none";
    document.getElementById("content").classList.remove("hidden");

    const music = document.getElementById("music");
    if (music) music.play();
  } else {
    document.getElementById("error").innerText = "❌ الباسورد غلط، جرّبي تاني";
  }
}

let images = [
  "images/1.jpg",
  "images/2.jpg",
  "images/3.jpg",
  "images/4.jpg"
];

let currentIndex = 0;

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  document.getElementById("sliderImage").src = images[currentIndex];
}

function prevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  document.getElementById("sliderImage").src = images[currentIndex];
}
