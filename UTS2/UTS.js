function showAlert() {
  alert("Welcome to Serasa where every flavour feels like home 😊");
}
function toggledarkmode() {
  document.body.classList.toggle("dark-mode");
  const icon = document.querySelector("#darkModeToggle i");

  if (document.body.classList.contains("dark-mode")) {
    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");
  } else {
    icon.classList.remove("fa-sun");
    icon.classList.add("fa-moon");
  }
}