export const SITE = {
  name: "MicroHair",
  fullName: "MicroHair di Luca Sagona",
  byline: "Scalp Micropigmentation Atelier",
  tagline: "Goodbye Baldness, Hello Confidence.",
  taglineIt: "Dì addio alla calvizie.",
  phone: "+39 351 555 8821",
  phoneLink: "tel:+393515558821",
  whatsapp: "https://wa.me/393515558821",
  whatsappDisplay: "+39 351 555 8821",
  email: "info@microhair.it",
  emailLink: "mailto:info@microhair.it",
  address: "Piazza del Cisternone, 12 — 57100 Livorno (LI), Italia",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Piazza+del+Cisternone+Livorno",
  rating: "4.8",
  reviewCount: "200+",
  hours: "Lunedì — Sabato · 09:30 – 19:00",
  social: {
    instagram: "https://www.instagram.com/microhair.it/",
    facebook: "https://www.facebook.com/61572637182316/",
  },
} as const;

export const NAV = [
  { label: "Il Metodo", href: "#metodo" },
  { label: "L'Eccellenza", href: "#eccellenza" },
  { label: "Risultati", href: "#risultati" },
  { label: "Processo", href: "#processo" },
  { label: "Domande", href: "#faq" },
  { label: "Contatti", href: "#contatti" },
] as const;

export const PILLARS = [
  {
    n: "01",
    title: "Non Chirurgico",
    body: "Nessun bisturi, nessun trapianto. La SMP riproduce il follicolo con pigmenti bio-assorbibili, in sole 2-3 sedute.",
  },
  {
    n: "02",
    title: "Risultato Reale",
    body: "Effetto rasato credibile già a pochi centimetri di distanza. Nessuno noterà la differenza — se non te stesso allo specchio.",
  },
  {
    n: "03",
    title: "Zero Manutenzione",
    body: "Una volta concluso il percorso, ti basterà un ritocco dopo 2 anni per rinfrescare l'intensità del pigmento.",
  },
] as const;

export const STATS = [
  { v: "8+", k: "Anni di Pratica" },
  { v: "600+", k: "Clienti Seguiti" },
  { v: "100%", k: "Risultati Garantiti" },
  { v: "4.8 / 5", k: "Recensioni Verificate" },
] as const;

export const PROCESS = [
  {
    n: "I",
    title: "Consulenza Privata",
    body: "Un incontro intimo per ascoltare la tua storia, valutare la situazione del cuoio capelluto e disegnare insieme l'attaccatura ideale.",
    duration: "45 min",
  },
  {
    n: "II",
    title: "Prima Seduta",
    body: "Posiamo la base del pigmento. Si definisce la linea frontale, la densità e il tono esatto del follicolo per un effetto naturale.",
    duration: "3 — 4 h",
  },
  {
    n: "III",
    title: "Seconda Seduta",
    body: "A 10-14 giorni di distanza, si stratifica il colore. Il pigmento si fonde, la definizione si affina, l'effetto si fa tridimensionale.",
    duration: "2 — 3 h",
  },
  {
    n: "IV",
    title: "Ritocco Finale",
    body: "Ultimo passaggio per uniformare le micro-aree ancora leggere. Da qui in avanti, solo un controllo annuale.",
    duration: "1 — 2 h",
  },
] as const;

export const FAQS = [
  {
    q: "La micropigmentazione del cuoio capelluto è la stessa cosa di un tatuaggio?",
    a: "No. La SMP è un trattamento altamente specializzato, con attrezzature dedicate e pigmenti formulati per il cuoio capelluto. A differenza dei tatuaggi tradizionali, i nostri pigmenti non virano al blu o al verde col passare degli anni.",
  },
  {
    q: "Il trattamento è doloroso?",
    a: "La maggior parte dei clienti descrive una sensazione di fastidio lieve, paragonabile a un leggero graffio. Utilizziamo anestetici topici per ridurre al minimo il disagio, specialmente nelle aree più sensibili.",
  },
  {
    q: "Quanto durano i risultati?",
    a: "I pigmenti sono formulati per durare a lungo. Con il tempo tendono a schiarirsi naturalmente, ed è per questo che consigliamo un ritocco di mantenimento dopo circa 2 anni per rinfrescare l'intensità.",
  },
  {
    q: "È adatto anche con capelli grigi?",
    a: "Assolutamente sì. Adattiamo la tonalità del pigmento al colore naturale del capello. I capelli grigi non rappresentano un limite, anzi: l'effetto finale è estremamente naturale.",
  },
  {
    q: "Si può fare anche in estate?",
    a: "Certo, basta evitare l'esposizione solare diretta nei primi 5-7 giorni dopo ogni seduta. Una protezione SPF 50 sul cuoio capelluto è sufficiente per continuare a vivere normalmente.",
  },
  {
    q: "Quanto costa una seduta di SMP?",
    a: "Il preventivo è sempre personalizzato. In sede, dopo la consulenza, formuliamo un programma su misura in base all'estensione dell'area, al numero di sedute necessarie e al risultato desiderato.",
  },
] as const;

export const TESTIMONIALS = [
  {
    body: "Mi sono guardato allo specchio e ho ritrovato me stesso. Non un altro — esattamente me. Luca ha cambiato il modo in cui mi presento al mondo.",
    name: "Marco D.",
    meta: "Milano · Cliente dal 2022",
  },
  {
    body: "Professionalità assoluta, ambiente riservato, zero pressione. Tre sedute e la mia vita sociale è cambiata. Avrei dovuto farlo anni fa.",
    name: "Andrea P.",
    meta: "Roma · Cliente dal 2023",
  },
  {
    body: "Lavoro a contatto col pubblico. Nessuno — e dico nessuno — ha mai notato nulla. Solo complimenti. È il miglior investimento che abbia fatto su me stesso.",
    name: "Stefano V.",
    meta: "Firenze · Cliente dal 2024",
  },
] as const;
