
const translations = {
  fr:{hero_badge:"Prêt & Finance",hero_title:"Offres de prêt claires, rapides et 100% en ligne",
      hero_sub:"Taux transparents, réponse rapide et accompagnement humain.",
      cta_primary:"Demander une simulation",cta_secondary:"Voir nos services",
      k1:"48h",k1l:"Décaissement moyen",k2:"3,2%",k2l:"Taux à partir de",k3:"4,9★",k3l:"Satisfaction client",
      s_title:"Nos services",s1:"Prêt personnel",s1d:"Financez un projet, sans justificatif d'achat.",
      s2:"Rachat de crédit",s2d:"Regroupez vos crédits et réduisez vos mensualités.",s3:"Prêt auto",s3d:"Un véhicule, neuf ou d’occasion.",
      c_title:"Contact",c_desc:"Laissez-nous un message. Nous répondons rapidement.",
      f_name:"Nom complet",f_email:"Email",f_msg:"Votre message",f_send:"Envoyer la demande",
      legal:"Site de démonstration générique."},
  en:{hero_badge:"Loan & Finance",hero_title:"Clear, fast, 100% online loan offers",
      hero_sub:"Transparent rates, quick decisions and human support.",
      cta_primary:"Start a quote",cta_secondary:"Explore services",
      k1:"48h",k1l:"Avg. payout",k2:"3.2%",k2l:"Rates from",k3:"4.9★",k3l:"Customer rating",
      s_title:"Our Services",s1:"Personal Loan",s1d:"Fund a project, no purchase proof required.",
      s2:"Debt consolidation",s2d:"Group loans and lower monthly costs.",s3:"Auto Loan",s3d:"New or used vehicles.",
      c_title:"Contact",c_desc:"Leave us a message. We reply quickly.",
      f_name:"Full name",f_email:"Email",f_msg:"Your message",f_send:"Send request",
      legal:"Demo site."},
  de:{hero_badge:"Kredit & Finanzen",hero_title:"Klare, schnelle, 100% Online-Kreditangebote",
      hero_sub:"Transparente Zinsen, schnelle Entscheidung, menschlicher Support.",
      cta_primary:"Angebot starten",cta_secondary:"Leistungen ansehen",
      k1:"48h",k1l:"Ø Auszahlung",k2:"3,2%",k2l:"Zinsen ab",k3:"4,9★",k3l:"Kundenzufriedenheit",
      s_title:"Unsere Leistungen",s1:"Privatkredit",s1d:"Finanzieren Sie Ihr Projekt ohne Kaufnachweis.",
      s2:"Umschuldung",s2d:"Kredite bündeln, Rate senken.",s3:"Autokredit",s3d:"Neu- oder Gebrauchtwagen.",
      c_title:"Kontakt",c_desc:"Schreiben Sie uns – wir melden uns rasch.",
      f_name:"Vollständiger Name",f_email:"E‑Mail",f_msg:"Ihre Nachricht",f_send:"Anfrage senden",
      legal:"Demo-Seite."},
  it:{hero_badge:"Prestiti & Finanza",hero_title:"Offerte di prestito chiare, veloci e 100% online",
      hero_sub:"Tassi trasparenti, risposta rapida e supporto umano.",
      cta_primary:"Calcola preventivo",cta_secondary:"Vedi i servizi",
      k1:"48h",k1l:"Erogazione media",k2:"3,2%",k2l:"Tassi da",k3:"4,9★",k3l:"Soddisfazione clienti",
      s_title:"I nostri servizi",s1:"Prestito personale",s1d:"Finanzia un progetto senza giustificativi.",
      s2:"Consolidamento debiti",s2d:"Unisci i prestiti e riduci le rate.",s3:"Prestito auto",s3d:"Veicoli nuovi o usati.",
      c_title:"Contatti",c_desc:"Scrivici – ti risponderemo presto.",
      f_name:"Nome e cognome",f_email:"Email",f_msg:"Messaggio",f_send:"Invia richiesta",
      legal:"Sito demo."},
  pt:{hero_badge:"Empréstimo & Finanças",hero_title:"Ofertas claras, rápidas e 100% online",
      hero_sub:"Taxas transparentes, decisão rápida e suporte humano.",
      cta_primary:"Simular proposta",cta_secondary:"Ver serviços",
      k1:"48h",k1l:"Prazo médio",k2:"3,2%",k2l:"Taxas a partir de",k3:"4,9★",k3l:"Satisfação dos clientes",
      s_title:"Nossos serviços",s1:"Empréstimo pessoal",s1d:"Financie um projeto sem comprovar compra.",
      s2:"Consolidação de dívidas",s2d:"Agrupe créditos e reduza parcelas.",s3:"Empréstimo auto",s3d:"Veículo novo ou usado.",
      c_title:"Contato",c_desc:"Deixe uma mensagem. Responderemos rápido.",
      f_name:"Nome completo",f_email:"Email",f_msg:"Sua mensagem",f_send:"Enviar pedido",
      legal:"Site demo."},
  nl:{hero_badge:"Lening & Financiën",hero_title:"Duidelijke, snelle, 100% online leningen",
      hero_sub:"Transparante tarieven, snelle beslissingen en menselijke ondersteuning.",
      cta_primary:"Start simulatie",cta_secondary:"Bekijk diensten",
      k1:"48u",k1l:"Gem. uitbetaling",k2:"3,2%",k2l:"Tarieven vanaf",k3:"4,9★",k3l:"Klanttevredenheid",
      s_title:"Onze diensten",s1:"Persoonlijke lening",s1d:"Financier een project zonder aankoopbewijs.",
      s2:"Schulden samenvoegen",s2d:"Leningen bundelen en maandlasten verlagen.",s3:"Autolening",s3d:"Nieuwe of gebruikte wagen.",
      c_title:"Contact",c_desc:"Stuur ons een bericht. We antwoorden snel.",
      f_name:"Volledige naam",f_email:"Email",f_msg:"Uw bericht",f_send:"Verstuur aanvraag",
      legal:"Demo site."}
};

function setLang(lang){
  const dict=translations[lang]||translations.fr;
  document.querySelectorAll("[data-i18n]").forEach(el=>{
    const key=el.getAttribute("data-i18n");
    if(dict[key]) el.textContent=dict[key];
  });
}

document.getElementById("lang").addEventListener("change",e=>{
  localStorage.setItem("lang",e.target.value);
  setLang(e.target.value);
});

window.addEventListener("DOMContentLoaded",()=>{
  const saved=localStorage.getItem("lang")||"fr";
  document.getElementById("lang").value=saved;
  setLang(saved);
  document.getElementById("year").textContent=new Date().getFullYear();
});
