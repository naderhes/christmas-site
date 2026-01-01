const correctPassword = "24/4/2002";

function checkPassword() {
  const input = document.getElementById("password").value.trim();
  const error = document.getElementById("error");

  if (input === correctPassword) {
    document.getElementById("login").style.display = "none";
    document.getElementById("content").classList.remove("hidden");
  } else {
    error.innerText = "❌ الباسورد غلط، جربي تاني";
  }
}
