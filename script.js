/* ✏️ عدل هنا بس */
const correctPassword = "19991225"; // تاريخ ميلادها YYYYMMDD
const loverName = "اسمها هنا";

/* الرسالة */
const message = `
كنت فاكر إني بعرف أختار،
لحد ما اخترتك إنتِ ❤️

إنتِ مش بس حبيبتي،
إنتِ أماني،
وأجمل صدفة في حياتي ✨

كل سنة وإنتِ معايا،
وكل كريسماس وإنتِ قلبي 🎄❤️
`;

let index = 0;

function checkPassword() {
  const input = document.getElementById("password").value.trim();

  // تاريخ الميلاد بالصّيغة اللي إنت عايزها
  const correctPassword = "24/4/2002";

  if (input === correctPassword) {
    document.getElementById("login").style.display = "none";
    document.getElementById("content").classList.remove("hidden");

    const music = document.getElementById("music");
    if (music) music.play();

    startTyping(); // لو عندك كتابة تلقائية
  } else {
    document.getElementById("error").innerText = "❌ الباسورد غلط، جرّبي تاني";
  }
}

function typeText() {
  if (index < message.length) {
    document.getElementById("text").innerHTML += message.charAt(index);
    index++;
    setTimeout(typeText, 60);
  }
}

