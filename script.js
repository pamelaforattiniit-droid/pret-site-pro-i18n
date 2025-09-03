document.getElementById('langSelector').addEventListener('change', function() {
  const lang = this.value;
  localStorage.setItem('lang', lang);
  translate(lang);
});

function translate(lang) {
  const translations = {
    fr: { offers: "Nos offres de prêts", maxLoan: "Montant maximum possible : 1 000 000€", loanRequest: "Demande de prêt", testimonials: "Témoignages", followup: "Suivi de demande", chat: "Chat en ligne" },
    en: { offers: "Our loan offers", maxLoan: "Maximum possible loan: €1,000,000", loanRequest: "Loan request", testimonials: "Testimonials", followup: "Request tracking", chat: "Online chat" },
    de: { offers: "Unsere Kreditangebote", maxLoan: "Maximal möglicher Kredit: 1.000.000€", loanRequest: "Kreditanfrage", testimonials: "Erfahrungsberichte", followup: "Antragsverfolgung", chat: "Online-Chat" },
    it: { offers: "Le nostre offerte di prestito", maxLoan: "Importo massimo possibile: 1.000.000€", loanRequest: "Richiesta di prestito", testimonials: "Testimonianze", followup: "Monitoraggio della richiesta", chat: "Chat online" },
    pt: { offers: "Nossas ofertas de empréstimo", maxLoan: "Valor máximo possível: 1.000.000€", loanRequest: "Pedido de empréstimo", testimonials: "Depoimentos", followup: "Acompanhamento do pedido", chat: "Chat online" },
    nl: { offers: "Onze leningaanbiedingen", maxLoan: "Maximaal mogelijk bedrag: €1.000.000", loanRequest: "Leningsaanvraag", testimonials: "Getuigenissen", followup: "Aanvraag opvolging", chat: "Online chat" }
  };
  document.querySelectorAll('[data-i18n]').forEach(el => {
    el.textContent = translations[lang][el.getAttribute('data-i18n')];
  });
}

window.onload = () => {
  const savedLang = localStorage.getItem('lang') || 'fr';
  document.getElementById('langSelector').value = savedLang;
  translate(savedLang);
};