window.onload = function () {
  const btn = document.getElementById("submit");
  btn.addEventListener("click", function (event) {
    event.preventDefault();
    window.alert("Thank you for signing up!");
    window.location.href = "https://colenelson806.github.io/MinecraftPluginProject/index.html";
  });
};
