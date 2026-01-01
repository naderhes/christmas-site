const correctPassword = "24/4/2002";

const images = [
  "images/1.jpg",
  "images/2.jpg",
  "images/3.jpg",
  "images/4.jpg",
  "images/5.jpg",
  "images/6.jpg",
  "images/7.jpg",
  "images/8.jpg"
];

let currentIndex = 0;

function checkPassword() {
  const input = document.getElementById("password").value.trim();
  const error = document.getElementById("error");

  if (input === correctPassword) {
    document.getElementById("login").style.display = "none";
    document.getElementById("content").classList.remove("hidden");

    document.getElementById("sliderImage").src = images[0];

    const music = document.getElementById("music");
    if (music) music.play();

    startHearts();
  } else {
    error.innerText = "❌ الباسورد غلط، جرّبي تاني";
  }
}

/* سلايدر */
function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  document.getElementById("sliderImage").src = images[currentIndex];
}

function prevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  document.getElementById("sliderImage").src = images[currentIndex];
}

/* قلوب */
function startHearts() {
  setInterval(() => {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerText = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = Math.random() * 20 + 15 + "px";
    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 6000);
  }, 400);
}
