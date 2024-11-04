const input = document.querySelector("#name-input");
const span = document.querySelector("#name-output");

input.addEventListener("input", () => {
  const name = input.value.trim();
  span.textContent = name || "Anonymous";
});
