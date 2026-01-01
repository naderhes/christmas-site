/* =========================
   إعدادات أساسية
========================= */

// تاريخ الميلاد (الباسورد)
const correctPassword = "24/4/2002";

// الصور (8 صور)
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

/* =========================
   عند تحميل الصفحة
========================= */
window.onload = function () {
  // لون الموقع بامبي
  document.body.style.background =
    "linear-gradient(135deg, #ff9a9e, #fecfef)";

  // أول صورة
  const img = document.getElementById("sliderImage");
  if (img) {
    img.src = images[0];
  }
};

/* =========================
   فحص الباسورد
========================= */
function checkPassword() {
  const input = document.getElementById("password").value.trim();
  const error = document.getElementById("error");

  if (input === correctPassword) {
    document.getElementById("login").style.display = "none";
    document.getElementById("content").classList.remove("hidden");

    const music = document.getElementById("music");
    if (music) music.play();
  } else {
    error.innerText = "❌ الباسورد غلط، جرّبي تاني";
  }
}

/* =========================
   السلايدر
========================= */
function showImage() {
  const img = document.getElementById("sliderImage");
  if (img) {
    img.src = images[currentIndex];
  }
}

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  showImage();
}

function prevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage();
}
