const button = document.getElementById("btn");
const message = document.getElementById("message");

button.addEventListener("click", () => {
  message.textContent = "¡Hola! Este JS se ejecuta desde Render 🚀";
});
