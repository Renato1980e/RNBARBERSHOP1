const WHATSAPP_NUMBER = "5599984158379"; // Código do país + DDD + telefone, apenas dígitos.
const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");
menuToggle.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
  menuToggle.textContent = open ? "×" : "☰";
});
nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  nav.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.textContent = "☰";
}));
document.querySelectorAll("[data-service]").forEach(link => link.addEventListener("click", () => {
  const select = document.getElementById("serviceSelect");
  const option = [...select.options].find(item => item.text.toLowerCase() === link.dataset.service.toLowerCase());
  if (option) select.value = option.value;
}));
document.getElementById("bookingForm").addEventListener("submit", event => {
  event.preventDefault();
  const name = document.getElementById("customerName").value.trim();
  const service = document.getElementById("serviceSelect").value;
  const time = document.getElementById("preferredTime").value.trim();
  const message = `Olá! Meu nome é ${name} e gostaria de agendar na RN Barber Shop.\nServiço: ${service}\n${time ? `Dia/horário preferido: ${time}\n` : ""}Podemos combinar um horário disponível?`;
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
});
document.getElementById("year").textContent = new Date().getFullYear();
