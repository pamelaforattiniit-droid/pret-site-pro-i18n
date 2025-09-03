// Gestion multilingue (simplifiée)
document.getElementById("language-selector").addEventListener("change", function() {
  alert("🌍 Langue changée en : " + this.value);
});

// Formulaire de prêt
document.getElementById("loan-form").addEventListener("submit", e => {
  e.preventDefault();
  const name = document.getElementById("loan-name").value;
  const email = document.getElementById("loan-email").value;
  const amount = document.getElementById("loan-amount").value;
  let loans = JSON.parse(localStorage.getItem("loans")) || [];
  loans.push({name, email, amount, date: new Date().toLocaleString()});
  localStorage.setItem("loans", JSON.stringify(loans));
  document.getElementById("loan-confirmation").style.display = "block";
  e.target.reset();
});

// Suivi de demande
document.getElementById("followup-form").addEventListener("submit", e => {
  e.preventDefault();
  const id = document.getElementById("followup-id").value;
  const income = document.getElementById("income").value;
  const employment = document.getElementById("employment").value;
  let followups = JSON.parse(localStorage.getItem("followups")) || [];
  followups.push({id, income, employment, date: new Date().toLocaleString()});
  localStorage.setItem("followups", JSON.stringify(followups));
  document.getElementById("followup-confirmation").style.display = "block";
  e.target.reset();
});

// Formulaire contact
document.getElementById("contact-form").addEventListener("submit", e => {
  e.preventDefault();
  const name = document.getElementById("contact-name").value;
  const email = document.getElementById("contact-email").value;
  const message = document.getElementById("contact-message").value;
  let messages = JSON.parse(localStorage.getItem("messages")) || [];
  messages.push({name, email, message, date: new Date().toLocaleString()});
  localStorage.setItem("messages", JSON.stringify(messages));
  document.getElementById("contact-confirmation").style.display = "block";
  e.target.reset();
});

// Chat
document.getElementById("chat-form").addEventListener("submit", e => {
  e.preventDefault();
  const input = document.getElementById("chat-input");
  let chats = JSON.parse(localStorage.getItem("chats")) || [];
  const msg = { text: input.value, date: new Date().toLocaleString() };
  chats.push(msg);
  localStorage.setItem("chats", JSON.stringify(chats));
  const box = document.getElementById("chat-box");
  box.innerHTML += `<p><strong>Client:</strong> ${msg.text}</p>`;
  input.value = "";
});
