const correctPassword = "24/4/2002";

function checkPassword() {
  const input = document.getElementById("password").value.trim();
  if (input === correctPassword) {
    document.getElementById("login").style.display = "none";
    document.getElementById("content").classList.remove("hidden");
  } else {
    document.getElementById("error").innerText = "❌ الباسورد غلط";
  }
}

// السلايدر
let images = [
  "images/1.jpg",
  "images/2.jpg",
  "images/3.jpg",
  "images/4.jpg"
];

let index = 0;
const img = document.getElementById("sliderImage");
const dotsContainer = document.getElementById("dots");

images.forEach((_, i) => {
  const dot = document.createElement("span");
  dot.className = "dot";
  dot.onclick = () => showImage(i);
  dotsContainer.appendChild(dot);
});

function updateDots() {
  document.querySelectorAll(".dot").forEach((d, i) => {
    d.classList.toggle("active", i === index);
  });
}

function showImage(i) {
  index = i;
  img.src = images[index];
  updateDots();
}

function nextImage() {
  index = (index + 1) % images.length;
  showImage(index);
}

function prevImage() {
  index = (index - 1 + images.length) % images.length;
  showImage(index);
}

// تشغيل تلقائي
setInterval(nextImage, 4000);
showImage(0);
