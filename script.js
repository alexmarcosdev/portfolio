const email = "alejandromarcosworks@gmail.com";

document.querySelector(".copy").addEventListener("click", () => {
  navigator.clipboard.writeText(email);
  alert("Email copiado");
});

document.querySelector(".send").addEventListener("click", () => {
  window.location.href = `mailto:${email}`;
});
