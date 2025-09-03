// 🌍 Gestion multilingue
const translations = {
  fr: { title: "Prêt & Finance", contact: "Contactez-nous", send: "Envoyer" },
  en: { title: "Loan & Finance", contact: "Contact Us", send: "Send" },
  de: { title: "Kredit & Finanzen", contact: "Kontaktieren Sie uns", send: "Senden" },
  it: { title: "Prestito & Finanza", contact: "Contattaci", send: "Invia" },
  pt: { title: "Empréstimo & Finança", contact: "Contate-nos", send: "Enviar" },
  nl: { title: "Lening & Financiën", contact: "Neem contact op", send: "Versturen" }
};
function changeLanguage() {
  const lang = document.getElementById("lang-select").value;
  document.getElementById("title").innerText = translations[lang].title;
  document.getElementById("contact-title").innerText = translations[lang].contact;
  document.getElementById("send-btn").innerText = translations[lang].send;
}
// 📩 Gestion du formulaire (stockage local)
document.getElementById("contact-form").addEventListener("submit", function(e) {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;
  let messages = JSON.parse(localStorage.getItem("messages")) || [];
  messages.push({ name, email, message, date: new Date().toLocaleString() });
  localStorage.setItem("messages", JSON.stringify(messages));
  document.getElementById("form-response").innerText = "✅ Message enregistré localement !";
  this.reset();
});