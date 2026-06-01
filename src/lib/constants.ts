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
  { label: "Risultati", href: "#risultati" },
  { label: "Il Metodo", href: "#metodo" },
  { label: "Processo", href: "#processo" },
  { label: "Soluzioni", href: "#soluzioni" },
  { label: "Investimento", href: "#investimento" },
  { label: "Domande", href: "#faq" },
  { label: "Contatti", href: "#contatti" },
] as const;

export const PROBLEMS = [
  "Soffri di calvizie o diradamento e cerchi una soluzione realmente efficace?",
  "Hai fatto un trapianto ma il risultato non è quello che speravi?",
  "Non ti riconosci più allo specchio e vorresti ritrovare un'immagine più sicura di te?",
  "Hai provato farmaci, lozioni, patch o altre soluzioni… ma i risultati continuano a deluderti?",
] as const;

export const BENEFITS = [
  {
    icon: "shield" as const,
    title: "Nessuna chirurgia né dolore",
    body: "Ago sottile, pigmento bio-assorbibile, zero bisturi. Nessun ricovero, nessuna convalescenza.",
  },
  {
    icon: "spark" as const,
    title: "Risultati immediati e duraturi",
    body: "Effetto rasato credibile già dalla prima seduta. Il risultato si costruisce in 2-3 sedute e si mantiene per anni.",
  },
  {
    icon: "clock" as const,
    title: "Nessun dispositivo da indossare",
    body: "Niente parrucchino, niente fibre, niente protesi. Solo la tua testa, autentica.",
  },
  {
    icon: "star" as const,
    title: "Migliora l'autostima e il benessere",
    body: "Un volto più simmetrico e proporzionato cambia il modo in cui ti presenti al mondo.",
  },
] as const;

export const PROTOCOL_BADGES = [
  { label: "Senza chirurgia", meta: "Non invasivo" },
  { label: "Senza farmaci", meta: "Nessun principio attivo" },
  { label: "Senza effetti collaterali", meta: "Pigmenti certificati" },
] as const;

export const STATS = [
  { v: "8+", k: "Anni di Pratica" },
  { v: "600+", k: "Clienti Seguiti" },
  { v: "100%", k: "Risultati Garantiti" },
  { v: "4.8 / 5", k: "Recensioni Verificate" },
] as const;

export const PROCESS = [
  {
    n: "01",
    title: "Analisi",
    body: "Una prima visita in studio per analizzare lo stato del cuoio capelluto, il colore naturale dei capelli e definire la corretta tonalità di pigmento da utilizzare.",
    duration: "45 min",
  },
  {
    n: "02",
    title: "Progetto",
    body: "Disegniamo l'attaccatura ideale: densità, distribuzione delle orme follicolari, ricostruzione del fronte. Ogni linea è studiata sul tuo viso.",
    duration: "in studio",
  },
  {
    n: "03",
    title: "Seduta",
    body: "Micro-depositi di pigmento bio-assorbibile nello strato superficiale della cute. Procedura non invasiva, indolore, senza sanguinamento. Risultato uniforme già dalla prima sessione.",
    duration: "2 — 4 h",
  },
] as const;

export const SOLUTIONS = [
  {
    src: "/images/case-1.png",
    badge: "Calvizie avanzata",
    title: "Effetto Rasato",
    body: "Per simulare una rasatura uniforme, naturale e curata. Ideale nei casi di calvizie estesa: ricrea l'aspetto del bulbo con effetto realistico.",
  },
  {
    src: "/images/case-2.png",
    badge: "Diradamento",
    title: "Effetto Densità",
    body: "Per infoltire le zone meno piene, migliorare la copertura visiva e rendere la capigliatura più omogenea su tutta l'area.",
  },
  {
    src: "/images/case-3.png",
    badge: "Cicatrici",
    title: "Copertura Cicatrici",
    body: "Per mascherare cicatrici da trapianto FUT/FUE o traumi, uniformando il colore del cuoio capelluto al resto della testa.",
  },
  {
    src: "/images/transformation-1.png",
    badge: "Post-trapianto",
    title: "Perfezionamento",
    body: "Per uniformare la densità e migliorare l'aspetto complessivo dopo un autotrapianto. Più omogeneità e naturalezza.",
  },
] as const;

export const PRICING_TIERS = [
  {
    n: "I",
    name: "Effetto Rasato",
    level: "Aree parzialmente diradate",
    range: "€ 900 — € 1.200",
    image: "/images/case-1.png",
  },
  {
    n: "II",
    name: "Effetto Densità",
    level: "Diradamento esteso",
    range: "€ 1.200 — € 1.800",
    image: "/images/case-2.png",
  },
  {
    n: "III",
    name: "Copertura Cicatrici",
    level: "Cicatrici da trapianto o traumi",
    range: "€ 1.500 — € 2.200",
    image: "/images/case-3.png",
  },
  {
    n: "IV",
    name: "Perfezionamento Post-Trapianto",
    level: "Calvizie avanzata e completa",
    range: "€ 2.200 — € 2.600",
    image: "/images/transformation-1.png",
  },
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
