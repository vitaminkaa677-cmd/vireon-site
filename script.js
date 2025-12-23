// Рік у футері
document.getElementById("year").textContent = new Date().getFullYear();

// Підстановка послуги у формі по кліку "Замовити"
const serviceSelect = document.getElementById("serviceSelect");
document.querySelectorAll("[data-service]").forEach(a => {
  a.addEventListener("click", () => {
    const s = a.getAttribute("data-service");
    if (s) serviceSelect.value = s;
  });
});

// Відправка — відкриваємо email з готовим текстом (заміни EMAIL!)
const EMAIL = "your-email@gmail.com"; // <-- постав свій
document.getElementById("orderForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("nameInput").value.trim();
  const details = document.getElementById("detailsInput").value.trim();
  const service = serviceSelect.value;

  const subject = encodeURIComponent(`Запит: ${service} — ${name}`);
  const body = encodeURIComponent(
    `Привіт! Мене звати ${name}.\n\nХочу замовити: ${service}\n\nДеталі:\n${details}\n\nДякую!`
  );

  window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
});

// Модалка для портфоліо
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");
const modalClose = document.getElementById("modalClose");

function openModal(src){
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  modalImg.src = src;
}
function closeModal(){
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  modalImg.src = "";
}

document.querySelectorAll(".shot").forEach(btn => {
  btn.addEventListener("click", () => {
    const src = btn.getAttribute("data-img");
    if (src) openModal(src);
  });
});

modalClose.addEventListener("click", closeModal);
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});
