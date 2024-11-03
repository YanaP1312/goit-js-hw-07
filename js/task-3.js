const input = document.querySelector("#name-input");
const span = document.querySelector("#name-output");

input.addEventListener("input", () => {
  input.addEventListener("blur", () => {
    const name = input.value.trim();
    span.textContent = name || "Anonymous";
  });
});
