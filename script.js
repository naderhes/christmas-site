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
  const input = document.getElementById("password").value;
  const error = document.getElementById("error");

  if (input === correctPassword) {
    document.getElementById("login").style.display = "none";
    document.getElementById("content").classList.remove("hidden");

    document.getElementById("name").innerText = loverName;

    document.getElementById("music").play();
    typeText();
  } else {
    error.innerText = "الباسورد غلط 😅 جربي تاني";
  }
}

function typeText() {
  if (index < message.length) {
    document.getElementById("text").innerHTML += message.charAt(index);
    index++;
    setTimeout(typeText, 60);
  }
}
